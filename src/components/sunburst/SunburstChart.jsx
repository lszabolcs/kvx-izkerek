import React, { useRef } from 'react'

import AnyChart from 'anychart-react'
import anychart from 'anychart'

import styles from './SunburstChart.module.css'

const SunburstChart = ({
	data = [],
	containerName = '',
	onSelect = () => {}
}) => {
	const chartInstanceRef = useRef()

	const onClick = (e) => {
		const name = e.point?.get('name') || false
		const slug = e.point?.get('slug') || false
		if (name && slug) onSelect({ name, slug })
	}

	const getInstance = (dataArg) => {
		if (!data) return false

		const chartConfig = anychart.sunburst(dataArg, 'as-tree')
		chartConfig.calculationMode('ordinal-from-leaves')
		chartConfig.background().fill('transparent')
		chartConfig.interactivity().selectionMode('none')
		chartConfig.padding(0)
		chartConfig.margin(0)
		chartConfig.container(containerName)
		chartConfig.listen('pointClick', onClick)
		return chartConfig.draw()
	}

	chartInstanceRef.current = getInstance(data)

	return (
		<div
			key="data-chart"
			id={containerName}
			className={`relative w-full z-auto aspect-square max-h-[calc(100dvh-4.5rem)] ${styles.container}`}>
			<AnyChart instance={chartInstanceRef.current}/>
		</div>
	)
}

export default SunburstChart
