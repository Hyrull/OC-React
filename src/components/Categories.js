import { plantList } from '../datas/plantList';

function Categories( {onSelectCategory }) {
  const categories = plantList.reduce(
    (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
  )

  function filterCategories(category) {
    onSelectCategory(category)
  }

  return (
    <div className="lmj-categories">
      <select onChange={(e) => filterCategories(e.target.value)}>
        {categories.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button onClick={() => filterCategories('')}>Reset</button>
    </div>
  )
}

export default Categories