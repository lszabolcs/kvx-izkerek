const RoastDot = ({
	level = '',
	withLabel = false
}) => {
	const roastMap = {
		S: {
			color: '#5c443e',
			label: 'Sötét'
		},
		KS: {
			color: '#946643',
			label: 'Közepesen sötét'
		},
		KV: {
			color: '#b07c3c',
			label: 'Közepesen világos'
		},
		V: {
			color: '#cc9433',
			label: 'Világos'
		},
		F: {
			color: '#ccb72d',
			label: 'Filter'
		}
	}

	const dot = (
		<span
			className="font-bold text-xs text-white w-6 h-6 inline-flex items-center justify-center rounded-full"
			style={{ backgroundColor: roastMap[level].color }}>
			{level}
		</span>
	)
	
	if (withLabel) return (
		<span className="inline-flex items-center gap-2">
			{dot}
			{roastMap[level].label}
		</span>
	)

	return dot
}

export default RoastDot
