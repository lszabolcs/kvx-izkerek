import React, {
	useEffect,
	useRef,
	useState
} from 'react'
import classNames from 'classnames'

import AnyChart from 'anychart-react'
import anychart from 'anychart'

import styles from './SunburstChart.module.css'

const SunburstChart = ({
	data = [],
	filteredData = [],
	filtered = false,
	onSelect = () => {}
}) => {
	const chart1InstanceRef = useRef()
	const chart2InstanceRef = useRef()
	const [loaded, setLoaded] = useState()

	const onClick = (e) => {
		const name = e.point?.get('name') || false
		const slug = e.point?.get('slug') || false
		if (name && slug) onSelect({ name, slug })
	}

	const getInstance = (dataArg, container) => {
		if (!data || !filteredData) return false

		const chartConfig = anychart.sunburst(dataArg, 'as-tree')
		chartConfig.calculationMode('ordinal-from-leaves')
		chartConfig.interactivity().selectionMode('none')
		chartConfig.container(container)
		chartConfig.listen('pointClick', onClick)
		chartConfig.draw()
		return chartConfig
	}

	useEffect(() => {
		chart1InstanceRef.current = getInstance(data, 'data-chart')
		chart2InstanceRef.current = getInstance(filteredData, 'data-chart-filtered')
		setLoaded(true)
	}, [])

	const container1Class = classNames(styles.container, {
		[styles['container--show']]: !filtered
	})

	const container2Class = classNames(styles.container, {
		[styles['container--show']]: filtered
	})

	return (
		<>
			<div
				id="data-chart"
				className={container1Class}>
				{loaded && <AnyChart instance={chart1InstanceRef.current}/>}
			</div>
			<div
				id="data-chart-filtered"
				className={container2Class}>
				{loaded && <AnyChart instance={chart2InstanceRef.current}/>}
			</div>
		</>
	)
}

export default SunburstChart
