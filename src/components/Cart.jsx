import { useState, useEffect } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const savedCart = JSON.parse(localStorage.getItem('cart'));
		if (savedCart && savedCart.length > 0) {
			updateCart(savedCart);
		}
	}, [updateCart]);

	useEffect(() => {
		const newTotal = cart.reduce(
			(acc, { amount, price }) => acc + amount * price,
			0
		);
		setTotal(newTotal);
	}, [cart]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	);
}

export default Cart;
