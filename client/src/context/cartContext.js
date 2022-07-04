
import { createContext, useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useParams } from 'react-router-dom';


export const CartContext = createContext();

export const CartContextProvider = (props) => {

	const { email } = useParams();

	const [products, setProducts] = useState(null)
	const [loader, setLoader] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState([])


	const fetchCartData = () => {
		fetch("http://localhost:5000/api/carts/" + email)
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

	const element = products?.data[0]
	const sale = products?.data[0].sale
	const salePercentage = ((products?.data[0].sale / products?.data[0].price) * 100).toFixed(0);

	useEffect(() => {
		fetchCartData()
	}, [])


	return (
		<CartContext.Provider value={{ products, loader, error }}>
			{props.children}
		</CartContext.Provider>
	)
}
