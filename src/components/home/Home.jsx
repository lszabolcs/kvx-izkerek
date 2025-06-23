import React, {
	useState,
	useRef
} from 'react'
import { sortByName, isRecent } from 'lib/utils'

import { Button } from 'components/ui/button'
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
import CoffeeDialog from 'components/dialogs/CoffeeDialog'
import InfoDialog from 'components/dialogs/InfoDialog'
import RoastDotList from 'components/roastdot/RoastDotList'

import tasteMap from '../../data/tasteMap'
import coffeeList from '../../data/__generated/coffeeList'
import TasteMapFilter from '../../data/tasteMapFilter'

const Home = () => {
	const [filteredByTaste, setFilteredByTaste] = useState(false)
	const [filteredByRecent, setFilteredByRecent] = useState(false)
	const infoDialogRef = useRef(null)
	const coffeDialogRef = useRef(null)

	
	const getCoffeList = () => {
		coffeeList.sort(sortByName)
		if (filteredByRecent) return coffeeList.filter((c) => isRecent(c?.lastSeen))
		return coffeeList
	}

	const getChartData = () => {
		if (!filteredByTaste) return tasteMap

		const notes = new Set()
		getCoffeList().forEach((coffee) => {
			coffee.notes.forEach((note) => notes.add(note))
		})

		const tasteMapFilter = new TasteMapFilter(tasteMap, [ ...notes ])

		return tasteMapFilter.getFilteredData()
	}

	const getChartName = () => {
		if (filteredByTaste && filteredByRecent) return 'filtered-recent-map"'
		if (filteredByRecent) return 'recent-map"'
		if (filteredByTaste) return 'filtered-map"'
		return 'full-map'
	}

	const onSelect = (newSelectedTaste) => {
		window?.umami?.track('taste-selected')
		coffeDialogRef.current.update(getCoffeList(), newSelectedTaste)
	}
	
	return (
		<main>
			<div className="max-w-screen-xl mx-auto space-y-2 px-5 pt-5">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl sm:text-3xl font-bold">Kávé Ízkerék</h1>
					<Button variant="outline" onClick={() => infoDialogRef?.current?.open()}>Mi ez?</Button>
				</div>
				<div className="flex items-center space-x-2">
					<Switch
						id="filter-recent"
						onCheckedChange={(e) => setFilteredByRecent(e)}/>
					<Label htmlFor="filter-recent">Csak aktuális kávék</Label>
				</div>
				<div className="flex items-center space-x-2">
					<Switch
						id="filter-taste"
						onCheckedChange={(e) => setFilteredByTaste(e)}/>
					<Label htmlFor="filter-taste">Van kapcsolódó kávé</Label>
				</div>
			</div>
			<SunburstChart
				data={getChartData()}
				containerName={getChartName()}
				onSelect={onSelect}/>
			<CoffeeDialog ref={coffeDialogRef}/>
			<InfoDialog ref={infoDialogRef}/>
			<div className="max-w-screen-xl mx-auto px-5 pb-5">
				<h2 className="text-xl sm:text-2xl font-bold mb-2">
					{filteredByRecent ? (
						<>
							<span className="mr-2">Aktuális kávé lista</span>
							<span className="text-base font-normal">(az elmúlt 30 napban felbukkant a shopban)</span>
						</>
					) : 'Kávé lista'}
				</h2>
				<Table>
					<TableHeader>
						<CoffeeRow header/>
					</TableHeader>
					<TableBody>
						{getCoffeList().map((coffee) => <CoffeeRow data={coffee} key={`${coffee.name}-${coffee.roast}`}/>)}
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
