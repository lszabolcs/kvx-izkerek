import {
	TableCell,
	TableHead,
	TableRow
} from 'components/ui/table'
import { Badge } from 'components/ui/badge'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from 'components/ui/tooltip'

import { ExternalLink, Info } from 'lucide-react'

import tasteMap from 'data/tasteMap'
import TasteMapFilter from 'data/tasteMapFilter'

const CoffeeRow = ({
	data = {},
	header = false
}) => {
	const params = new URLSearchParams({
		route: 'product/list',
		keyword: `${data?.name} ${data?.roast}`
})
	const url = `https://www.avxcafe.hu/index.php?${params}`
	const tasteMapFilter = new TasteMapFilter(tasteMap)

	const renderDesc = (desc) => (
		<TooltipProvider delayDuration={50}>
			<Tooltip>
				<TooltipTrigger className="hidden sm:block">
					<Info className="mt-1 w-4 h-4"/>
				</TooltipTrigger>
				<TooltipContent defaultOpen={false}>
					<p>{desc}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)

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

	if (header) {
		return (
			<TableRow>
				<TableHead>Név</TableHead>
				<TableHead>Pörkölés</TableHead>
				<TableHead className="text-right">Ízjegyek</TableHead>
			</TableRow>
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
				{data?.desc && renderDesc(data.desc)}
				{data?.notes?.map((n) => renderTaste(n))}
			</TableCell>
		</TableRow>
	)
}

export default CoffeeRow
