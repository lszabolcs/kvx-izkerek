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

import RoastDot from 'components/roastdot/RoastDot'

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
			<TableRow className="hidden sm:table-row">
				<TableHead>Név</TableHead>
				<TableHead>Pörkölés</TableHead>
				<TableHead className="text-right">Ízjegyek</TableHead>
			</TableRow>
		)
	}
	

	return (
		<TableRow className="flex flex-wrap py-4 gap-2 sm:table-row sm:p-0">
			<TableCell className="p-0 grow max-w-[calc(100%-2rem)] text-balance text-base sm:p-2">
				<a
					className="hover:underline"
					href={url}
					target="_blank"
					rel="noreferrer">
					{data?.name}
					<ExternalLink className="inline-block ml-2 w-4 h-4"/>
				</a>
			</TableCell>
			<TableCell className="p-0 sm:p-2">
				{data?.roast && <RoastDot level={data.roast}/>}
			</TableCell>
			<TableCell className="w-full flex flex-wrap gap-2 items-start p-0 sm:w-auto sm:justify-end sm:p-2">
				{data?.desc && renderDesc(data.desc)}
				{data?.notes?.map((n) => renderTaste(n))}
			</TableCell>
			{data?.desc && (
				<TableCell className="italic p-0 sm:hidden">
					"{data.desc}"
				</TableCell>
			)}
		</TableRow>
	)
}

export default CoffeeRow
