import '../styles/shoppinglist.css'
import { plantList } from '../datas/plantList'

export function ShoppingListCategories() {
  const categoriesSet = new Set(plantList.map(plantList => plantList.category))
  const categories = Array.from(categoriesSet)
  return (
    <div>
      {categories.map(category => (
        <p key={category}>{category}</p>
      ))}
    </div>
  )
}

export function ShoppingList() {
  return (
    <ul>
      {plantList.map((plant) => (
        plant.isSpecialOffer
        ? <div className='lmj-Sales'><li key={`${plant.id}`}>{plant.name}<span> - Soldes !</span></li></div>
        : <li key={`${plant.id}`}>{plant.name}</li>
      ))}
    </ul>
  )
}