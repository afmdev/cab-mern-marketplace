import { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
	const [products, setProducts] = useState(null)
	const [loader, setLoader] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState([])


	const fetchData = () => {
		fetch("http://localhost:5000/api/items/all")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const myData = data
				setProducts(data)
				setFilter(myData)
				setLoader(false)
			})
			.catch((error) => {
				setError(error)
			})
	}


	const [cart, setCart] = useState([])
	const [errorCart, setErrorCart] = useState(null)

	//Add product to the cart juts if it does not exist
	const handleAddToCart = (items) => {
		if (cart.indexOf(items) !== -1) {
			return;
		} else {
			setCart([...cart, items]);
			localStorage.setItem("Cart", JSON.stringify(cart))
		}

	};

	//Remove product from the cart 
	const handleRemove = (element) => {
		const id = element._id
		const newCart = cart.filter((element) => element._id !== id);
		setCart(newCart);
		// handlePrice();
	};

	// const handlePrice = () => {
	// 	let ans = 0;
	// 	cart.map((element) => (ans += element.amount * element.price));
	// 	setPrice(ans);
	// };



	useEffect(() => {
		fetchData()
		// handlePrice();
		// localStorage.setItem("Cart", JSON.stringify(cart)
		// const cartFromLocalStorage = localStorage.getItem('Cart');

	}, [])



	return (
		<ProductsContext.Provider value={{
			products, loader, error, filter, setFilter, fetchData, setProducts, cart, setCart, errorCart, setErrorCart, handleAddToCart, handleRemove
		}}>
			{props.children}
		</ProductsContext.Provider>
	)
}
