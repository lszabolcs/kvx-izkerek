import {
	TableCell,
	TableRow
} from 'components/ui/table'
import { Badge } from 'components/ui/badge'

import { ExternalLink } from 'lucide-react'

import tasteMap from 'data/tasteMap'
import TasteMapFilter from 'data/tasteMapFilter'

const CoffeeRow = ({
	data = {}
}) => {
	const params = new URLSearchParams({
		route: 'product/list',
		keyword: `${data?.name} ${data?.roast}`
})
	const url = `https://www.avxcafe.hu/index.php?${params}`
	const tasteMapFilter = new TasteMapFilter(tasteMap)

	const renderTaste = (tasteSlug) => {
		const taste = tasteMapFilter.getTasteBySlug(tasteSlug)
		return (
			<Badge
				key={taste?.slug}
				className="whitespace-nowrap"
				style={{ background: taste?.normal?.fill }}>
				{taste?.name}
			</Badge>
		)
	}
	

	return (
		<TableRow>
			<TableCell>
				<a
					className="hover:underline"
					href={url}
					target="_blank"
					rel="noreferrer">
					{data?.name}
					<ExternalLink className="inline-block ml-2 w-4 h-4"/>
				</a>
			</TableCell>
			<TableCell className="font-bold">{data?.roast}</TableCell>
			<TableCell className="flex flex-wrap gap-2 items-start justify-end">
				{data?.notes?.map((n) => renderTaste(n))}
			</TableCell>
		</TableRow>
	)
}

export default CoffeeRow
