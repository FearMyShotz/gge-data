import axios from 'axios'
import { promises as fs } from 'fs'
import path from 'path'
import { XMLParser } from 'fast-xml-parser'
import { JSDOM } from 'jsdom'
import prettier from 'prettier'
import { exec } from 'child_process'

const defaultDomain = 'empire-html5.goodgamestudios.com'
const networks = [1, 5, 11, 26, 34, 39, 64, 65, 68]
const languageAPI = 'https://translations-api-test.public.ggs-ep.com/12/en/'

const mkdir = d => fs.mkdir(d, { recursive: true })

async function formatJavaScript(code) {
  try {
    return await prettier.format(code, {
      parser: 'babel',
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      printWidth: 100
    })
  } catch (err) {
    console.warn(`⚠️  Fehler beim Formatieren von JavaScript:`, err.message)
    return code // Gib unformatierten Code zurück, falls Formatierung fehlschlägt
  }
}

async function fetchNetworks() {
  const parser = new XMLParser({ ignoreAttributes: false, ignoreDeclaration: true })
  const dir = path.join('data', 'networks')
  await mkdir(dir)

  for (const id of networks) {
    const url = `https://${defaultDomain}/config/network/${id}.xml`
    let xml, obj

    try {
      xml = (await axios.get(url)).data
    } catch (err) {
      console.error(`❌ Fehler beim Abrufen von ${url}:`, err.message)
      continue
    }

    try {
      obj = parser.parse(xml)
    } catch (err) {
      console.error(`❌ Fehler beim Parsen von XML für ${url}:`, err.message)
      continue
    }

    const instances = obj?.network?.instances?.instance
    if (!instances) {
      console.warn(`⚠️  Kein gültiges "instances"-Objekt in network ${id}`)
      continue
    }

    const arr = Array.isArray(instances) ? instances : [instances]
    const entries = {}

    for (const inst of arr) {
      const zone = inst.zone
      if (!zone || zone === 'EmpireEx_23') continue
      entries[zone] = {
        name: inst.instanceLocaId || null,
        id: inst.zoneId
      }
    }

    if (Object.keys(entries).length === 0) {
      console.warn(`⚠️  Keine gültigen Einträge in network ${id}`)
      continue
    }

    const outPath = path.join(dir, `${id}.json`)
    await fs.writeFile(outPath, JSON.stringify(entries, null, 2))
    console.log(`✅ Netzwerk gespeichert: ${outPath}`)
  }
}

async function fetchItems() {
  const base = `https://${defaultDomain}/default`
  const versionText = (await axios.get(`${base}/items/ItemsVersion.properties`)).data
  const version = versionText
    .split(/\r?\n/)
    .find(l => l.startsWith('CastleItemXMLVersion='))
    ?.split('=')[1]
    ?.trim()

  if (!version) {
    console.warn('⚠️  Keine CastleItemXMLVersion gefunden')
    return null
  }

  const itemsUrl = `${base}/items/items_v${version}.json`
  const items = (await axios.get(itemsUrl)).data

  const dir = path.join('data', 'items')
  await mkdir(dir)

  for (const [key, val] of Object.entries(items)) {
    if (key === '!') continue
    const content = Array.isArray(val) ? val : [val]
    await fs.writeFile(
      path.join(dir, `${key}.json`),
      JSON.stringify(content, null, 2)
    )
    console.log(`✅ items/${key}.json gespeichert`)
  }

  return version
}

async function fetchLanguages() {
  const versionData = (
    await axios.get(`https://${defaultDomain}/config/languages/version.json`)
  ).data

  const availableLangs = (
    await axios.get(`${languageAPI}language_native_*`)
  ).data

  const dir = path.join('data', 'languages')
  await mkdir(dir)

  const langVersions = {}

  for (const [lang, version] of Object.entries(versionData.languages)) {
    if (!lang || Number(version) < 1000) continue

    const code = lang.toLowerCase()
    const key = `language_native_${code}`
    if (!(key in availableLangs)) continue

    const res = await axios.get(`https://translations-api-test.public.ggs-ep.com/12/${code}`)
    await fs.writeFile(
      path.join(dir, `${code}.json`),
      JSON.stringify(res.data, null, 2)
    )
    console.log(`✅ Sprache ${code} gespeichert`)
    langVersions[code] = version
  }

  return langVersions
}

async function fetchGameClientScripts() {
  const url = `https://sheltered-everglades-24913.fly.dev/https://${defaultDomain}/default/index.html?inGameShop=1&allowFullScreen=true`
  
  let html
  try {
    html = (await axios.get(url)).data
  } catch (err) {
    console.error(`❌ Fehler beim Abrufen der HTML-Seite:`, err.message)
    return null
  }

  const dom = new JSDOM(html)
  const document = dom.window.document
  
  // Finde alle preload links im head
  const preloadLinks = document.head.querySelectorAll('link[rel="preload"][as="script"]')
  
  const scripts = {}
  const timestamp = new Date().toISOString()
  
  const scriptsDir = path.join('data', 'scripts')
  await mkdir(scriptsDir)
  
  for (const link of preloadLinks) {
    const id = link.id
    const href = link.getAttribute('href')
    
    if (!id || !href) continue
    
    // Extrahiere UUID aus dem href (Teil zwischen . und .js)
    const match = href.match(/\.([a-f0-9]+)\.js$/)
    if (!match) continue
    
    const uuid = match[1]
    
    // Lade das Script herunter
    const scriptUrl = href.startsWith('http') ? href : `https://${defaultDomain}/default/${href}`
    
    try {
      const scriptContent = (await axios.get(scriptUrl)).data
      
      // Formatiere den JavaScript-Code
      const formattedContent = await formatJavaScript(scriptContent)
      
      const originalFilename = href.split('/').pop()
      const cleanFilename = originalFilename.replace(/\.[a-f0-9]+\.js$/, '.js')
      
      await fs.writeFile(
        path.join(scriptsDir, cleanFilename),
        formattedContent
      )
      
      const versionDir = path.join(scriptsDir, 'versions', id)
      await mkdir(versionDir)
      
      const versionFilename = originalFilename
      await fs.writeFile(
        path.join(versionDir, versionFilename),
        formattedContent
      )
      
      scripts[id] = {
        uuid: uuid,
        timestamp: timestamp,
        filename: cleanFilename,
        versionFilename: versionFilename,
        originalHref: href
      }
      
      console.log(`✅ Script gespeichert: ${cleanFilename} und Version: ${versionFilename} (UUID: ${uuid})`)
    } catch (err) {
      console.error(`❌ Fehler beim Herunterladen von ${scriptUrl}:`, err.message)
    }
  }
  
  return scripts
}

async function decompileScripts(scripts) {
  if (!scripts || Object.keys(scripts).length === 0) return

  for (const [scriptId, info] of Object.entries(scripts)) {
    const inputPath = path.join('data', 'scripts', info.filename)
    const baseName = info.filename.replace(/\.js$/, '')
    const outputDir = path.join('data', 'scripts', baseName)

    try {
      const stats = await fs.stat(outputDir).catch(() => null)
      if (stats && stats.isDirectory()) {
        await fs.rm(outputDir, { recursive: true, force: true })
        console.log(`🗑️  Ordner gelöscht: ${outputDir}`)
      }
    } catch (err) {
      console.warn(`⚠️  Fehler beim Löschen von ${outputDir}:`, err.message)
    }

    await new Promise((resolve, reject) => {
      const cmd = `npx webcrack "${inputPath}" --output "${outputDir}"`
      console.log(`🔁 Starte Webcrack: ${cmd}`)

      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(`❌ Fehler bei Webcrack für ${scriptId}: ${stderr}`)
          return reject(err)
        }

        console.log(`✅ ${scriptId} entpackt nach ${outputDir}`)
        resolve()
      })
    })
  }
}

async function loadVersionHistory() {
  const historyPath = path.join('data', 'versionHistory.json')
  try {
    const content = await fs.readFile(historyPath, 'utf8')
    return JSON.parse(content)
  } catch (err) {
    // Datei existiert noch nicht, erstelle leere Struktur
    return {
      gameBundle: [],
      vendor: [],
      dll: [],
      Loader: [],
      CacheBreaker: []
    }
  }
}

async function saveVersionHistory(history) {
  const historyPath = path.join('data', 'versionHistory.json')
  await fs.writeFile(historyPath, JSON.stringify(history, null, 2))
  console.log(`✅ Versionsverlauf gespeichert: ${historyPath}`)
}

async function updateVersionHistory(scripts) {
  if (!scripts || Object.keys(scripts).length === 0) {
    console.warn('⚠️  Keine Scripts gefunden, Versionsverlauf wird nicht aktualisiert')
    return
  }
  
  const history = await loadVersionHistory()
  
  for (const [scriptId, info] of Object.entries(scripts)) {
    const key = scriptId === 'Game' ? 'gameBundle' : scriptId
    
    if (!history[key]) {
      history[key] = []
    }
    
    // Prüfe ob diese UUID bereits existiert
    const existingEntry = history[key].find(entry => entry.uuid === info.uuid)
    if (!existingEntry) {
      history[key].push({
        uuid: info.uuid,
        timestamp: info.timestamp,
        filename: info.filename,
        versionFilename: info.versionFilename,
        originalHref: info.originalHref
      })
      console.log(`✅ Neue Version für ${key} hinzugefügt: ${info.uuid}`)
    } else {
      console.log(`ℹ️  Version ${info.uuid} für ${key} bereits vorhanden`)
    }
  }
  
  await saveVersionHistory(history)
}

async function saveVersions(itemsVersion, languageVersions, scriptsVersion) {
  const out = {
    items: itemsVersion,
    languages: languageVersions,
    scripts: scriptsVersion
  }

  await fs.writeFile(
    path.join('data', 'versions.json'),
    JSON.stringify(out, null, 2)
  )
  console.log(`✅ Versionsinfo gespeichert: data/versions.json`)
}

async function main() {
  await fetchNetworks()

  const scripts = await fetchGameClientScripts()
  await decompileScripts(scripts)
  await updateVersionHistory(scripts)
  
  const scriptsVersion = scripts ? new Date().toISOString() : null
  
  const itemsVersion = await fetchItems()
  const languageVersions = await fetchLanguages()

  if (itemsVersion && languageVersions) {
    await saveVersions(itemsVersion, languageVersions, scriptsVersion)
  }
}

main().catch(console.error)
