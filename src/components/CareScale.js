import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={() => careAlert(scaleValue, careType)}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function careAlert(scaleValue, careType) {
  const careWord = scaleValue === 1 ? 'peu' : scaleValue === 2 ? 'modérement' : scaleValue === 3 ? 'beaucoup' : 'ERROR'
  const careTypeFrench = careType === 'light' ? 'de lumière' : "d'arrosage"
  alert(`Cette plante requiert ${careWord} ${careTypeFrench}.`)

}

export default CareScale