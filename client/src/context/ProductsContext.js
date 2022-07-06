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

	const loadLocalCart = localStorage.getItem("MY_CART")
		? JSON.parse(localStorage.getItem("MY_CART"))
		: []; // new

	const [cart, setCart] = useState(loadLocalCart)
	const [errorCart, setErrorCart] = useState(null)

	//Add product to the cart juts if it does not exist
	const handleAddToCart = (items) => {
		if (cart.indexOf(items) !== -1) {
			return;
		} else {
			setCart([...cart, items]);
			// localStorage.setItem("Cart", JSON.stringify(cart))
		}
	};

	useEffect(() => {
		const data = window.localStorage.getItem("MY_CART")
		setCart(JSON.parse(data))
	}, []);


	useEffect(() => {
		window.localStorage.setItem("MY_CART", JSON.stringify(cart))
	}, [cart]);




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
	}, [])



	return (
		<ProductsContext.Provider value={{
			products, loader, error, filter, setFilter, fetchData, setProducts, cart, setCart, errorCart, setErrorCart, handleAddToCart, handleRemove
		}}>
			{props.children}
		</ProductsContext.Provider>
	)
}
