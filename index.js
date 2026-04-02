import axios from 'axios'
import { promises as fs } from 'fs'
import path from 'path'
import { XMLParser } from 'fast-xml-parser'
import { JSDOM } from 'jsdom'
import prettier from 'prettier'
import { exec } from 'child_process'

const ASSET_DOWNLOAD_TIMEOUT_MS = 20000;
const defaultDomain = 'empire-html5.goodgamestudios.com'
const networks = [1, 5, 11, 26, 34, 39, 64, 65, 68]
const languageAPI = 'https://translations-api-test.public.ggs-ep.com/12/en/'

const mkdir = d => fs.mkdir(d, { recursive: true })
const isWindows = process.platform === 'win32'

async function runShellCommand(command) {
  await new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        const error = new Error(stderr || err.message)
        error.cause = err
        return reject(error)
      }
      resolve()
    })
  })
}

async function ensureDirectoryRemoved(dir) {
  const stats = await fs.stat(dir).catch(() => null)
  if (!stats || !stats.isDirectory()) return;

  async function removeRecursive(target) {
    const stat = await fs.stat(target).catch(() => null);
    if (!stat) return;
    if (stat.isDirectory()) {
      const entries = await fs.readdir(target).catch(() => []);
      for (const entry of entries) {
        await removeRecursive(path.join(target, entry));
      }
      try {
        await fs.rmdir(target);
      } catch (err) {
        // Ignoriere Fehler, falls das Verzeichnis bereits entfernt wurde
      }
    } else {
      // Versuche Schreibschutz zu entfernen (Windows), dann löschen
      if (isWindows) {
        try {
          await fs.chmod(target, 0o666);
        } catch (e) {}
      }
      await fs.unlink(target).catch(() => {});
    }
  }

  await removeRecursive(dir);

  const stillExists = await fs.stat(dir).then(() => true).catch(() => false);
  if (stillExists) {
    throw new Error(
      `Ordner ${dir} existiert weiterhin nach Löschversuch. Bitte mit Administratorrechten ausführen oder manuell löschen.`
    );
  }
}

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
  const proxyUrl = `https://cors-anywhere.com/https://${defaultDomain}/default/index.html?inGameShop=1&allowFullScreen=true`
  const directUrl = `https://${defaultDomain}/default/index.html?inGameShop=1&allowFullScreen=true`
  const requestConfig = {
    headers: {
      Origin: `https://${defaultDomain}`,
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  let html
  try {
    html = (await axios.get(proxyUrl, requestConfig)).data
  } catch (err) {
    console.warn(`⚠️  Proxy-Request fehlgeschlagen: ${err.response?.status || err.message}`)
    try {
      html = (await axios.get(directUrl, requestConfig)).data
    } catch (err2) {
      console.error(`❌ Fehler beim Abrufen der HTML-Seite: ${err2.response?.status || err2.message}`)
      return null
    }
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
      await ensureDirectoryRemoved(outputDir)
      console.log(`✅ Ordner ${outputDir} entfernt`)
    } catch (err) {
      console.warn(`⚠️  Kann Ausgabeverzeichnis ${outputDir} nicht vorbereiten: ${err.message}`)
      throw err
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

const dotNotationRegexSrc = /this\.assets\.([A-Za-z0-9_]+)\s*=\s*['"]([^'"]+)['"]/g
const bracketNotationRegexSrc = /this\.assets\[['"]([^'"]+)['"]\]\s*=\s*['"]([^'"]+)['"]/g

async function downloadItemAssets() {
  const candidateSources = [
    path.join('data', 'scripts', 'ggs.dll', 'deobfuscated.js'),
    path.join('data', 'scripts', 'ggs.dll.js'),
    path.join('data', 'scripts', 'ggs.dll', 'index.js')
  ]

  let sourcePath = null
  let source = null

  for (const candidate of candidateSources) {
    const exists = await fs
      .stat(candidate)
      .then(stat => stat.isFile())
      .catch(() => false)
    if (exists) {
      sourcePath = candidate
      break
    }
  }

  if (!sourcePath) {
    console.warn('⚠️  Keine ItemVersions-Quelle gefunden. Überspringe Asset-Download.')
    return null
  }

  try {
    source = await fs.readFile(sourcePath, 'utf8')
  } catch (err) {
    console.warn(`⚠️  ItemVersions-Datei nicht lesbar (${sourcePath}):`, err.message)
    return null
  }

  console.log(`ℹ️  Verwende ItemVersions-Quelle: ${sourcePath}`)

  const assets = new Map()
  const parseContent = content => {
    // Create new regex instances for each call to avoid global state issues
    const dotNotationRegex = new RegExp(dotNotationRegexSrc, 'g');
    const bracketNotationRegex = new RegExp(bracketNotationRegexSrc, 'g');
    let localMatch = dotNotationRegex.exec(content)
    while (localMatch !== null) {
      assets.set(localMatch[1], localMatch[2])
      localMatch = dotNotationRegex.exec(content)
    }
    localMatch = bracketNotationRegex.exec(content)
    while (localMatch !== null) {
      assets.set(localMatch[1], localMatch[2])
      localMatch = bracketNotationRegex.exec(content)
    }
  }
  parseContent(source)

  if (assets.size === 0) {
    const fallbackRoot = path.join('data', 'scripts', 'ggs.dll')
    const pending = [fallbackRoot]
    const seen = new Set()

    while (pending.length > 0) {
      const current = pending.pop()
      if (!current || seen.has(current)) continue
      seen.add(current)

      const stat = await fs
        .stat(current)
        .catch(() => null)
      if (!stat) continue

      if (stat.isDirectory()) {
        const entries = await fs.readdir(current).catch(() => [])
        for (const entry of entries) {
          pending.push(path.join(current, entry))
        }
      } else if (stat.isFile() && current.endsWith('.js')) {
        try {
          const content = await fs.readFile(current, 'utf8')
          if (content.includes('ItemVersions.prototype.fill')) {
            parseContent(content)
            if (assets.size > 0) {
              console.log(`ℹ️  ItemVersions-Daten in ${current} gefunden`)
              break
            }
          }
        } catch (err) {
          console.warn(`⚠️  Konnte ${current} nicht lesen: ${err.message}`)
        }
      }
    }
  }

  if (assets.size === 0) {
    console.warn('⚠️  Keine Item-Assets in ItemVersions gefunden')
    return { total: 0, downloaded: 0, skipped: 0, failed: 0 }
  }

  console.log(`ℹ️  ${assets.size} Item-Asset-Einträge gefunden`)

  const imagesRoot = path.join('data', 'images')
  await mkdir(imagesRoot)

  const entries = Array.from(assets.entries())
  const total = entries.length
  const chunkSize = 10
  let processed = 0
  let downloaded = 0
  let skipped = 0
  let failed = 0

  const downloadAsset = async (key, assetPath) => {
    if (!assetPath || assetPath.includes('..')) {
      console.warn(`⚠️  Überspringe verdächtigen Asset-Pfad für ${key}: ${assetPath}`)
      skipped += 1
      processed += 1
      return
    }

    if (!assetPath) {
      console.warn(`⚠️  Überspringe Asset mit leerem Pfad für ${key}: ${assetPath}`)
      skipped += 1
      processed += 1
      return
    }

    // Normalize and validate assetPath to prevent directory traversal
    const normalizedAssetPath = path.normalize(assetPath);
    const imagesRootAbs = path.resolve(imagesRoot);
    const resolvedAssetPath = path.resolve(imagesRoot, normalizedAssetPath);

    if (!resolvedAssetPath.startsWith(imagesRootAbs + path.sep)) {
      console.warn(`⚠️  Überspringe verdächtigen Asset-Pfad für ${key}: ${assetPath}`)
      skipped += 1
      processed += 1
      return
    }

    const remoteFile = `${assetPath}.png`
    const segments = assetPath.split('/').filter(Boolean)
    
    // Extract the full filename with version (last part of the path)
    const fullFilename = segments.pop()

    if (!fullFilename) {
      console.warn(`⚠️  Überspringe Asset ohne Dateisegment ${key}: ${assetPath}`)
      skipped += 1
      processed += 1
      return
    }

    // Drop the last folder (which typically is the asset name without version) to keep shared category folders
    if (segments.length > 0) {
      segments.pop()
    }

    const relativeDir = segments.length > 0 ? path.join(...segments) : ''
    const targetDir = relativeDir ? path.join(imagesRoot, relativeDir) : imagesRoot
    const targetPath = path.join(targetDir, `${fullFilename}.png`)

    const exists = await fs
      .stat(targetPath)
      .then(() => true)
      .catch(() => false)

    if (exists) {
      skipped += 1
      processed += 1
      return
    }

    await mkdir(targetDir)

    const url = `https://${defaultDomain}/default/assets/${remoteFile}`

    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: ASSET_DOWNLOAD_TIMEOUT_MS
      })
      await fs.writeFile(targetPath, response.data)
      downloaded += 1
    } catch (err) {
      failed += 1
      const status = err.response?.status
        ? `Status ${err.response.status}`
        : err.code || err.message
      console.error(`❌ Asset ${key} konnte nicht geladen werden (${url}) - ${status}`)
    } finally {
      processed += 1
    }
  }

  for (let i = 0; i < total; i += chunkSize) {
    const chunk = entries.slice(i, i + chunkSize)
    await Promise.all(chunk.map(([key, assetPath]) => downloadAsset(key, assetPath)))
    console.log(`🔄 Assets ${Math.min(processed, total)}/${total} verarbeitet`)
  }

  console.log(
    `✅ Asset-Download abgeschlossen: ${downloaded} neu, ${skipped} übersprungen, ${failed} fehlgeschlagen`
  )

  return { total, downloaded, skipped, failed }
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

async function saveVersions(itemsVersion, languageVersions, scriptsVersion, buildNumberGame) {
  const out = {
    items: itemsVersion,
    languages: languageVersions,
    scripts: scriptsVersion,
    buildNumber: buildNumberGame
  }

  await fs.writeFile(
    path.join('data', 'versions.json'),
    JSON.stringify(out, null, 2)
  )
  console.log(`✅ Versionsinfo gespeichert: data/versions.json`)
}

async function extractBuildNumberGameFromCacheBreaker(scripts) {
  if (!scripts || Object.keys(scripts).length === 0) {
    return null
  }

  let cacheBreakerEntry = null

  for (const [id, info] of Object.entries(scripts)) {
    if (id.toLowerCase() === 'cachebreaker' || info.filename.includes('CacheBreaker')) {
      cacheBreakerEntry = { id, info }
      break
    }
  }

  if (!cacheBreakerEntry) {
    console.warn('⚠️  Keine CacheBreaker-Bundle-Information gefunden')
    return null
  }

  const versionDir = path.join('data', 'scripts', 'versions', cacheBreakerEntry.id)
  const bundlePath = path.join(
    versionDir,
    cacheBreakerEntry.info.versionFilename || cacheBreakerEntry.info.filename
  )

  const exists = await fs
    .stat(bundlePath)
    .then(stat => stat.isFile())
    .catch(() => false)

  if (!exists) {
    console.warn(`⚠️  CacheBreaker-Bundle nicht gefunden: ${bundlePath}`)
    return null
  }

  const content = await fs.readFile(bundlePath, 'utf8')
  const versionMatch = content.match(
    /name:\s*'TranspilationEmpire'[^]*?version:\s*'([0-9.]+)'/
  )

  if (!versionMatch || !versionMatch[1]) {
    console.warn('⚠️  Keine TranspilationEmpire-Version im CacheBreaker-Bundle gefunden')
    return null
  }

  const parts = versionMatch[1].split('.')
  const major = parts[0]
  const minorRaw = parts[1] || ''
  const patchRaw = (parts[2] || '').split('-')[0]

  if (!major) {
    console.warn('⚠️  Ungültige Versionsstruktur im CacheBreaker-Bundle')
    return null
  }

  const minor = minorRaw.padStart(3, '0')
  const patch = patchRaw.padStart(3, '0')
  const buildNumberGame = `${major}${minor}${patch}`

  return { version: versionMatch[1], buildNumberGame }
}

async function main() {
  // await fetchNetworks()

  const itemsVersion = await fetchItems()
  const languageVersions = await fetchLanguages()

  const scripts = await fetchGameClientScripts()
  await decompileScripts(scripts)
  await updateVersionHistory(scripts)

  // await downloadItemAssets()
  
  const scriptsVersion = scripts ? new Date().toISOString() : null
  const buildNumberInfo = await extractBuildNumberGameFromCacheBreaker(scripts)

  if (itemsVersion && languageVersions && scriptsVersion) {
    await saveVersions(
      itemsVersion,
      languageVersions,
      scriptsVersion,
      buildNumberInfo ? buildNumberInfo.buildNumberGame : null
    )
  }
}

main().catch(console.error)
