import React, {
	forwardRef,
	useImperativeHandle,
	useState,
} from 'react'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from 'components/ui/dialog'

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
				onInteractOutside={onClose}>
				<DialogHeader>
				<DialogTitle>Ízjegy: {selectedTaste?.name}</DialogTitle>
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
	)
})

CoffeeDialog.displayName = 'CoffeeDialog'

export default CoffeeDialog
