import React, {
	forwardRef,
	useImperativeHandle,
	useState,
} from 'react'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from 'components/ui/dialog'

import {
	Table,
	TableBody,
	TableHeader,
	TableCaption
} from 'components/ui/table'

import CoffeeRow from 'components/coffeerow/CoffeeRow'
import RoastDotList from 'components/roastdot/RoastDotList'

import coffeeList from 'data/coffeeList'

const CoffeeDialog = forwardRef((_, ref) => {
	const [selectedTaste, setSelectedTaste] = useState('')
	const [selectedCoffees, setSelectedCoffees] = useState([])

	useImperativeHandle(ref, () => ({
		update: (taste) => {
			const coffees = coffeeList.filter((coffee) => coffee.notes.includes(taste.slug))
			setSelectedTaste(taste)
			setSelectedCoffees(coffees)
		}
	}), [])

	const onClose = () => {
		setSelectedTaste(null)
		setSelectedCoffees([])
	}

	return (
		<Dialog open={selectedCoffees?.length}>
			<DialogContent
				onClose={onClose}
				onEscapeKeyDown={onClose}
				onPointerDownOutside={onClose}
				onInteractOutside={onClose}
				onOpenAutoFocus={(event) => event.preventDefault()}
				aria-describedby={undefined}>
				<DialogHeader>
					<DialogTitle>Ízjegy: {selectedTaste?.name}</DialogTitle>
				</DialogHeader>
				<Table>
					<TableHeader>
						<CoffeeRow header/>
					</TableHeader>
					<TableBody>
						{selectedCoffees.map((coffee) => <CoffeeRow data={coffee} key={`${coffee.name}-${coffee.roast}`}/>)}
					</TableBody>
					<TableCaption>
						<RoastDotList/>
					</TableCaption>
				</Table>
			</DialogContent>
		</Dialog>
	)
})

CoffeeDialog.displayName = 'CoffeeDialog'

export default CoffeeDialog
