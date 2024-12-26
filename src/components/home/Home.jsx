import React, {
	useState
} from 'react'

import { Switch } from 'components/ui/switch'
import { Label } from 'components/ui/label'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
  } from "components/ui/dialog"
  

import SunburstChart from '../sunburst/SunburstChart'

import tasteMap from '../../data/tasteMap'
import coffeeList from '../../data/coffeeList'
import TasteMapFilter from '../../data/tasteMapFilter'

const Home = () => {
	const [filtered, setFiltered] = useState(false)
	const [selectedTaste, setSelectedTaste] = useState('')
	const [selectedCoffees, setSelectedCoffees] = useState([])

	const onSelect = (newSelectedTaste) => {
		const coffees = coffeeList.filter((coffee) => coffee.notes.includes(newSelectedTaste.slug))
		setSelectedTaste(newSelectedTaste)
		setSelectedCoffees(coffees)
	}

	const onClose = () => setSelectedCoffees([])

	const notes = new Set()
	coffeeList.forEach((coffee) => {
		coffee.notes.forEach((note) => notes.add(note))
	})

	const tasteMapFilter = new TasteMapFilter(tasteMap, [ ...notes ])
	const tasteMapFiltered = tasteMapFilter.getFilteredData()
	
	return (
		<div>
			 <div className="flex items-center space-x-2">
				<Switch
					id="filter"
					onCheckedChange={(e) => setFiltered(e)}/>
				<Label htmlFor="filter">Van kapcsolódó kávé</Label>
			</div>
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
			<Dialog open={selectedCoffees?.length}>
				<DialogContent
					onClose={onClose}
					onEscapeKeyDown={onClose}
					onPointerDownOutside={onClose}
					onInteractOutside={onClose}>
					<DialogHeader>
					<DialogTitle>Ízjegy: {selectedTaste.name}</DialogTitle>
					<DialogDescription>
						{selectedCoffees.map((coffee) => (
							<div>
								{`${coffee.name} ${coffee.roast}`}
							</div>
						))}
					</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default Home
