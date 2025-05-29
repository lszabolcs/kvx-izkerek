import { writeFile, mkdir } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import dotenv from 'dotenv'

dotenv.config()
    
const feedUrl = process.env.FEED_URL

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = dirname(__dirname)

async function getFeedXml(url) {
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP hiba! Státusz: ${response.status}`)
		}

		const xmlData = await response.text()
		return xmlData
	} catch (error) {
		console.error('Hiba a feed letöltése közben:', error.message)
		return null
	}
}

async function saveFeedXml(data, outputPath) {
	try {
		const outputDir = dirname(outputPath)
		await mkdir(outputDir, { recursive: true })

		const fileContent = data

		await writeFile(outputPath, fileContent, 'utf-8')
		console.log(`Feed sikeresen elmentve ide: ${outputPath}`)
	} catch (error) {
		console.error(`Hiba a feed mentése közben (${outputPath}):`, error.message)
	}
}

async function updateFeed() {
	if (!feedUrl) {
		console.error('Hiba: A FEED_URL környezeti változó nincs beállítva. Kérlek, add hozzá a .env fájlhoz.')
		return
	}
	const feed = await getFeedXml(feedUrl)

	const outputFilePath = join(projectRoot, 'scripts/__temp', 'feed.xml')
	await saveFeedXml(feed, outputFilePath)
}

updateFeed()