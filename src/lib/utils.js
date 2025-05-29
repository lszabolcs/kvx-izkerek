import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs) => {
  	return twMerge(clsx(inputs))
}

const sortByName = (a, b) => {
	const nameA = a.name.toUpperCase()
  	const nameB = b.name.toUpperCase()
	if (nameA < nameB) return -1
	if (nameA > nameB) return 1
	return 0
}

const isRecent = (dateStringOrObject) => {
	if (!dateStringOrObject) return false

	const dateToCheck = new Date(dateStringOrObject)
	if (isNaN(dateToCheck.getTime())) {
		console.warn(`Érvénytelen dátum formátum: ${dateStringOrObject}`)
		return false
	}

	const today = new Date()
	const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000
	const thirtyDaysAgo = new Date(today.getTime() - thirtyDaysInMilliseconds)

	dateToCheck.setHours(0, 0, 0, 0)
	thirtyDaysAgo.setHours(0, 0, 0, 0)

	return dateToCheck >= thirtyDaysAgo
}

export {
	sortByName,
	cn,
	isRecent
}
