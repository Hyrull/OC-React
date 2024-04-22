import Banner from './Banner'
// import Cart from './Cart'
import { ShoppingList, ShoppingListCategories } from './ShoppingList'

function App() {
    return (
    <div>
      <Banner />
      {/* <Cart /> */}
      <ShoppingListCategories />
      <ShoppingList />
    </div>
)}

export default App