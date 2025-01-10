import React, {
	useState,
	useRef
} from 'react'

import { Switch } from 'components/ui/switch'
import { Label } from 'components/ui/label'

import {
	Table,
	TableBody
} from 'components/ui/table'

import CoffeeRow from 'components/coffeerow/CoffeeRow'
import SunburstChart from 'components/sunburst/SunburstChart'
import CoffeeDialog from 'components/coffeedialog/CoffeeDialog'

import tasteMap from '../../data/tasteMap'
import coffeeList, { sortByName } from '../../data/coffeeList'
import TasteMapFilter from '../../data/tasteMapFilter'

const Home = () => {
	const [filtered, setFiltered] = useState(false)
	const dialogRef = useRef(null)
	coffeeList.sort(sortByName)

	const onSelect = (newSelectedTaste) => dialogRef.current.update(newSelectedTaste)

	const notes = new Set()
	coffeeList.forEach((coffee) => {
		coffee.notes.forEach((note) => notes.add(note))
	})

	const tasteMapFilter = new TasteMapFilter(tasteMap, [ ...notes ])
	const tasteMapFiltered = tasteMapFilter.getFilteredData()
	
	return (
		<main>
			<div className="space-y-2">
				<h1 className="text-2xl sm:text-3xl font-bold">Kávé Ízkerék</h1>
				<div className="flex items-center space-x-2">
					<Switch
						id="filter"
						onCheckedChange={(e) => setFiltered(e)}/>
					<Label htmlFor="filter">Van kapcsolódó kávé</Label>
				</div>
			</div>
			{filtered ? (
				<SunburstChart
					data={tasteMapFiltered}
					containerName="filtered-map"
					onSelect={onSelect}/>
			) : (
				<SunburstChart
					data={tasteMap}
					containerName="full-map"
					onSelect={onSelect}/>
			)}
			<CoffeeDialog ref={dialogRef}/>
			<h2 className="text-xl sm:text-2xl font-bold mb-2">Kávé lista</h2>
			<Table>
				<TableBody>
					{coffeeList.map((coffee) => <CoffeeRow data={coffee} key={coffee.name}/>)}
				</TableBody>
			</Table>
		</main>
	)
}

export default Home
