class TasteMapFilter {
	constructor(data, notes) {
		this.data = data
		this.notes = notes || []
		this.filteredData = []
	}

	filter = (object) => {
		if (!object.slug) return true
		return this.notes.includes(object.slug)
	}

	filterRecursive = (object) => {
		if (this.filter(object)) return true
		if (!object?.children?.length) return false

		const newChildren = [...object.children]
		return newChildren.some((child) => this.filterRecursive(child))
	}

	copyRecursive = (array) => {
		const resultArray = []

		array?.forEach((obj) => {
			if (this.filterRecursive(obj)) {
				const newObj = { ...obj }
	
				const resultObj = {
					slug: newObj.slug,
					name: newObj.name,
					normal: newObj.normal,
					children: []
				}

				resultObj.children = this.copyRecursive(newObj.children)
				resultArray.push(resultObj)
			}
		})

		return resultArray
	}

	getFilteredData = () => this.copyRecursive(this.data)
}

export default TasteMapFilter
