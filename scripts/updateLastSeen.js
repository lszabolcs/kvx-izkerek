import { parseStringPromise } from 'xml2js'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import coffeeTypeList from '../src/data/coffeeTypeList.js'
import coffeeList from '../src/data/__generated/coffeeList.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = dirname(__dirname)

const localFeed = join(__dirname, '__temp', 'feed.xml')

async function getLocalFeed(path) {
	try {
		const feedXml = await loadFeedFromFile(path)
		return feedXml
	} catch (error) {
		console.error('Hiba a feed betöltése közben:', error.message)
		return null
	}
}

async function parseXml(xmlData) {
	try {
		const products = []
		const result = await parseStringPromise(xmlData, {
			explicitArray: true,
			trim: true,
		})

		const productList = result?.products?.product

		if (!productList || !Array.isArray(productList) || productList.length === 0) {
			console.log('Nem találhatóak termékek a feed-ben.')
			return []
		}

		productList.forEach((product) => {
			const category = (product?.category?.length) ? product.category[0] : ''
			const name = (product?.name?.length) ? product.name[0] : ''
			if (
				category.includes('Pörkölt Kávé >') &&
				!category.includes('Pörkölt Kávé > Teák')
			) {
				products.push(name)
			}
		})

		console.log(`Kinyert kávék száma: ${products.length}`)
		return products
	} catch (error) {
		console.error('Hiba az XML feldolgozása közben:', error.message)
		return []
	}
}

async function loadFeedFromFile(filePath) {
	try {
		const xmlData = await readFile(filePath, 'utf-8')
		return xmlData
	} catch (error) {
		console.error(`Hiba a local feed fájl (${filePath}) beolvasása közben:`, error.message)
		return null
	}
}

async function saveCoffeeListToFile(list, outputPath) {
	try {
		const outputDir = dirname(outputPath)
		await mkdir(outputDir, { recursive: true })

		const fileContent = `export default ${JSON.stringify(list, null, 2)};\n`

		await writeFile(outputPath, fileContent, 'utf-8')
		console.log(`Kávé lista sikeresen elmentve ide: ${outputPath}`)
	} catch (error) {
		console.error(`Hiba a kávé lista mentése közben (${outputPath}):`, error.message)
	}
}

async function saveCurrentDateToFile(outputPath) {
	try {
		const outputDir = dirname(outputPath)
		await mkdir(outputDir, { recursive: true })

		const data = { lastUpdated: new Date().toISOString() }
		const fileContent = `export default ${JSON.stringify(data, null, 2)};\n`

		await writeFile(outputPath, fileContent, 'utf-8')
		console.log(`Aktuális dátum elmentve: ${outputPath}`)
	} catch (error) {
		console.log(`Hiba az aktuális dátum mentése közben (${outputPath}):`, error.message)
	}
}

function normalizeString(str) {
	if (typeof str !== 'string' || !str) return ''
	return str.toLowerCase().replace(/\s+/g, ' ').trim()
}

function updateLastSeenToCoffe(coffeeItem, foundUrl) {
	if (foundUrl) {
		coffeeItem.lastSeen = new Date().toISOString()
		return coffeeItem
	}
	return coffeeItem
}

function mergeCoffeeLists(typeList, list) {
	let newList = (list?.length) ? [...list] : []

	typeList.forEach(t => {
		const foundItem = newList.some((i) => i.name === t.name)
		if (!foundItem) {
			console.log(`Új kávé hozzáadva a listához: ${t.name}`)
			newList.push({ ...t })
		}
	})

	return newList
}

async function updateLastSeen() {
	let products = null
	let updatedCoffeList = null
	let foundCount = 0

	updatedCoffeList = mergeCoffeeLists(coffeeTypeList, coffeeList)

	const feedXml = await getLocalFeed(localFeed)

	if (feedXml) {
		products = await parseXml(feedXml)
	}
	
	if (products) {
		products.forEach((item) => {
			const normalizedItem = normalizeString(item)
			const found = updatedCoffeList.some((coffee) => {
				return normalizedItem.includes(normalizeString(coffee?.name))
			})
			if (!found) console.log(`Új kávé nincs a listában: ${item}`)
		})
	}
	

	if (products) {
		updatedCoffeList = updatedCoffeList.map((c) => {
			const normalizedCoffeeName = normalizeString(c?.name)
			const foundUrl = products?.some((u) => normalizeString(u).includes(normalizedCoffeeName))
			if (foundUrl) foundCount++
			return updateLastSeenToCoffe(c, foundUrl)
		})
	}

	console.log(`Kávé lista: ${updatedCoffeList?.length}, talált: ${foundCount}`)
	

	const outputListFilePath = join(projectRoot, 'src/data/__generated', 'coffeeList.js')
	await saveCoffeeListToFile(updatedCoffeList, outputListFilePath)

	const outputDateFilePath = join(projectRoot, 'src/data/__generated', 'date.js')
	await saveCurrentDateToFile(outputDateFilePath)
}

updateLastSeen()
