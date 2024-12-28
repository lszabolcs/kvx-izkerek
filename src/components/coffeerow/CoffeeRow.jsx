import {
	TableCell,
	TableRow
  } from 'components/ui/table'

import { ExternalLink } from 'lucide-react'

const CoffeeRow = ({
	data = {}
}) => {
	const params = new URLSearchParams({
		route: 'product/list',
		keyword: `${data?.name} ${data?.roast}`
})
	const url = `https://www.avxcafe.hu/index.php?${params}`

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
			<TableCell className="text-right">{data?.notes?.join(', ')}</TableCell>
		</TableRow>
	)
}

export default CoffeeRow
