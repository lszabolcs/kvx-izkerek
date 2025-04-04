import React, {
	useState,
	useRef
} from 'react'

import { Switch } from 'components/ui/switch'
import { Label } from 'components/ui/label'

import {
	Table,
	TableBody,
	TableCaption,
	TableHeader
} from 'components/ui/table'

import CoffeeRow from 'components/coffeerow/CoffeeRow'
import SunburstChart from 'components/sunburst/SunburstChart'
import CoffeeDialog from 'components/coffeedialog/CoffeeDialog'
import RoastDotList from 'components/roastdot/RoastDotList'

import tasteMap from '../../data/tasteMap'
import coffeeList, { sortByName } from '../../data/coffeeList'
import TasteMapFilter from '../../data/tasteMapFilter'

const Home = () => {
	const [filtered, setFiltered] = useState(false)
	const dialogRef = useRef(null)
	coffeeList.sort(sortByName)

	const onSelect = (newSelectedTaste) => {
		window?.umami?.track('taste-selected')
		dialogRef.current.update(newSelectedTaste)
	}

	const notes = new Set()
	coffeeList.forEach((coffee) => {
		coffee.notes.forEach((note) => notes.add(note))
	})

	const tasteMapFilter = new TasteMapFilter(tasteMap, [ ...notes ])
	const tasteMapFiltered = tasteMapFilter.getFilteredData()
	
	return (
		<main>
			<div className="max-w-screen-xl mx-auto space-y-2 px-5 pt-5">
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
			<div className="max-w-screen-xl mx-auto px-5 pb-5">
				<h2 className="text-xl sm:text-2xl font-bold mb-2">Kávé lista</h2>
				<Table>
					<TableHeader>
						<CoffeeRow header/>
					</TableHeader>
					<TableBody>
						{coffeeList.map((coffee) => <CoffeeRow data={coffee} key={`${coffee.name}-${coffee.roast}`}/>)}
					</TableBody>
					<TableCaption>
						<RoastDotList/>
					</TableCaption>
				</Table>
			</div>
		</main>
	)
}

export default Home
