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

const InfoDialog = forwardRef((_, ref) => {
	const [show, setShow] = useState(false)

	useImperativeHandle(ref, () => ({
		open: () => setShow(true)
	}), [])

	const onClose = () => setShow(false)

	return (
		<Dialog open={show}>
			<DialogContent
				onClose={onClose}
				onEscapeKeyDown={onClose}
				onPointerDownOutside={onClose}
				onInteractOutside={onClose}
				onOpenAutoFocus={(event) => event.preventDefault()}
				aria-describedby={undefined}>
				<DialogHeader>
					<DialogTitle>Mi ez?</DialogTitle>
				</DialogHeader>
				<div className="space-y-4">
					<div className="text-sm">
						<p>
							Ez az oldal egy interaktív ízkerék, ami az AVX Café kávéinak ízjegyeit vizualizálja.
						</p>
						<p>
							Az ízkerékre kattintva megnézheted, hogy egy adott ízjegy melyik kávéban található meg.
						</p>
					</div>
					<h3 className="font-semibold">Szűrők</h3>
					<div className="text-sm">
						<p>
							<strong>Csak aktuális kávék:</strong> Csak azokat a kávékat mutatja a listában, amik az elmúlt 30 napban elérhetőek voltak a webshopban.
						</p>
						<p>
							<strong>Van kapcsolódó kávé:</strong> Az ízkeréken csak azokat az ízjegyeket emeli ki, amelyek megtalálhatóak a listában szereplő kávékban.
						</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
})

InfoDialog.displayName = 'InfoDialog'

export default InfoDialog
