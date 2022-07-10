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

	// const savedEvents = localStorage.getItem("MY_CART")
	// const alejandro = JSON.parse(savedEvents)
	// console.log("alejandro", alejandro)


	const loadLocalCart = localStorage.getItem("MY_CART")
		? JSON.parse(localStorage.getItem("MY_CART"))
		: [];


	const [cart, setCart] = useState(loadLocalCart)
	const [errorCart, setErrorCart] = useState(null)


	//Add product to the cart juts if it does not exist
	const handleAddToCart = (element) => {
		const id = element._id
		const userExists = cart.some(element => element._id === id);
		if (userExists) {
			console.log("Item already exists in the cart, so do not duplicate it")
		} else {
			setCart([...cart, element]);
			handleShowCart()
		}
	};


	useEffect(() => {
		const data = window.localStorage.getItem("MY_CART")
		setCart(JSON.parse(data))
	}, []);


	useEffect(() => {
		window.localStorage.setItem("MY_CART", JSON.stringify(cart))
	}, [cart]);


	const handleRemove = (element) => {
		const id = element._id
		const newCart = cart.filter((element) => element._id !== id);
		setCart(newCart);
		handlePrice()
	};


	const [price, setPrice] = useState(0);

	const handlePrice = () => {
		let ans = 0;
		cart.map((element) => (ans += element.amount * element.price));
		setPrice(ans.toFixed(2));
	};

	useEffect(() => {
		handlePrice()
	});

	const handleChange = (element, d) => {
		const index = cart.indexOf(element);
		const array = cart;
		array[index].amount += d;

		if (array[index].amount === 0) array[index].amount = 1;
		setCart([...array]);
		console.log(cart)
	};

	useEffect(() => {
		fetchData()
		// handlePrice();
	}, [])

	const [showCart, setShowCart] = useState(false);
	const handleShowCart = () => {
		if (showCart) {
			setShowCart(false);
		} else {
			setShowCart(true);
		}
	}

	return (
		<ProductsContext.Provider value={{
			products, loader, error, filter, setFilter, fetchData, setProducts, cart, setCart, errorCart, setErrorCart, handleAddToCart, handleRemove, price, setPrice, handleChange, showCart, setShowCart, handleShowCart
		}}>
			{props.children}
		</ProductsContext.Provider>
	)
}
