import React, {
	useState,
	useRef
} from 'react'

import { Switch } from 'components/ui/switch'
import { Label } from 'components/ui/label'
  

import SunburstChart from 'components/sunburst/SunburstChart'
import CoffeeDialog from 'components/coffeedialog/CoffeeDialog'

import tasteMap from '../../data/tasteMap'
import coffeeList from '../../data/coffeeList'
import TasteMapFilter from '../../data/tasteMapFilter'

const Home = () => {
	const [filtered, setFiltered] = useState(false)
	const dialogRef = useRef(null)

	const onSelect = (newSelectedTaste) => dialogRef.current.update(newSelectedTaste)

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
					onSelect={onSelect}/>
			) : (
				<SunburstChart
					data={tasteMap}
					containerName="full-map"
					onSelect={onSelect}/>
			)}
			<CoffeeDialog ref={dialogRef}/>
		</div>
	)
}

export default Home
