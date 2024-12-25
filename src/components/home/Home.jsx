import React, {
	useState
} from 'react'

import SunburstChart from '../sunburst/SunburstChart'

import tasteMap from '../../data/tasteMap'
import coffeeList from '../../data/coffeeList'
import TasteMapFilter from '../../data/tasteMapFilter'

const Home = () => {
	const [filtered, setFiltered] = useState(false)

	const onSelect = (selectedCoffee) => {
		const coffees = coffeeList.filter((coffee) => coffee.notes.includes(selectedCoffee.slug))

		if (coffees?.length) console.table(coffees)
	}

	const onChange = (e) => {
		setFiltered(e.target.checked)
	}

	const notes = new Set()
	coffeeList.forEach((coffee) => {
		coffee.notes.forEach((note) => notes.add(note))
	})

	const tasteMapFilter = new TasteMapFilter(tasteMap, [ ...notes ])
	const tasteMapFiltered = tasteMapFilter.getFilteredData()
	
	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={filtered}
					onChange={onChange}/>
				Van kapcsolódó kávé
			</label>
			{filtered ? (
				<SunburstChart
					data={tasteMapFiltered}
					containerName="filtered-map"
					filteredData={tasteMapFiltered}
					onSelect={onSelect}/>
			) : (
				<SunburstChart
					data={tasteMap}
					containerName="full-map"
					onSelect={onSelect}/>
			)}
		</div>
	)
}

export default Home
