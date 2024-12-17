import React, {
	useEffect,
	useState
} from 'react'

import AnyChart from 'anychart-react'
import anychart from 'anychart'

import styles from './SunburstChart.module.css'
import tasteMap from '../../data/tasteMap'

const SunburstChart = () => {
	const [chart, setChart] = useState()

	const onClick = (e) => {
		console.log('e', e.point?.get('slug'))
	}

	const init = () => {
		let chartConfig = anychart.sunburst(tasteMap, 'as-tree')
		chartConfig.calculationMode('ordinal-from-leaves')
		chartConfig.interactivity().selectionMode('none')
		chartConfig.container('chart-container')
		chartConfig.listen('pointClick', onClick)

		setChart(chartConfig.draw())
	}

	useEffect(() => {
		init()
	}, [])

	return (
		<div id="chart-container" className={styles.container}>
			{chart && <AnyChart instance={chart} title=''/>}
		</div>
	)
}

export default SunburstChart
