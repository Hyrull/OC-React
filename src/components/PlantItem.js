import CareScale from './CareScale'
import '../styles/plantitem.css'

function PlantItem(props) {
  return (
    <li key={props.id} className='lmj-plant-item'>
      {props.isBestSale && <span>🔥</span>}
      {props.name}
      <img src={props.cover} className='lmj-plant-item-cover'></img>
      <CareScale careType='water' scaleValue={props.water} />
      <CareScale careType='light' scaleValue={props.light} />
		</li>
  )
}

export default PlantItem