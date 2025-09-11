import RoastDot from 'components/roastdot/RoastDot'

const RoastDotList = () => (
	<div className="flex gap-4 flex-col sm:flex-row">
		<RoastDot level="S" withLabel/>
		<RoastDot level="KS" withLabel/>
		<RoastDot level="KV" withLabel/>
		<RoastDot level="V" withLabel/>
		<RoastDot level="F" withLabel/>
	</div>
)

export default RoastDotList
