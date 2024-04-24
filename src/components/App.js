import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import Categories from './Categories'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
        <Categories onSelectCategory={setSelectedCategory}></Categories>
				<ShoppingList cart={cart} updateCart={updateCart} selectedCategory={selectedCategory}/>
			</div>
			<Footer />
		</div>
	)
}

export default App