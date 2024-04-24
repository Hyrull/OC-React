import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart, selectedCategory }) {
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

  const filteredPlants = selectedCategory
  ? plantList.filter((plant) => plant.category === selectedCategory)
  : plantList;


	return (
		<div className='lmj-shopping-list'>
			<ul className='lmj-plant-list'>
				{filteredPlants.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList