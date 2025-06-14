import axios from 'axios'
import { promises as fs } from 'fs'
import path from 'path'
import { XMLParser } from 'fast-xml-parser'

const defaultDomain = 'empire-html5.goodgamestudios.com'
const networks = [1, 5, 11, 26, 34, 39, 64, 65, 68]
const languageAPI = 'https://translations-api-test.public.ggs-ep.com/12/en/'

const mkdir = d => fs.mkdir(d, { recursive: true })

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

async function saveVersions(itemsVersion, languageVersions) {
  const out = {
    items: itemsVersion,
    languages: languageVersions
  }

  await fs.writeFile(
    path.join('data', 'versions.json'),
    JSON.stringify(out, null, 2)
  )
  console.log(`✅ Versionsinfo gespeichert: data/versions.json`)
}

async function main() {
  await fetchNetworks()
  const itemsVersion = await fetchItems()
  const languageVersions = await fetchLanguages()
  if (itemsVersion && languageVersions) {
    await saveVersions(itemsVersion, languageVersions)
  }
}

main().catch(console.error)
