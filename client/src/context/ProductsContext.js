import { createContext, useState } from 'react'

export const ProductsContext = createContext();

export const ProductContextProvider = (props) => {
	const [products, setProducts] = useState(null)
	const [loader, setLoader] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState([])


	const fetchData = () => {
		fetch("https://fakestoreapi.com/products")
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

	return (
		<ProductsContext.Provider value={{ products, loader, error, filter, setFilter, fetchData, setProducts }}>
			{props.children}
		</ProductsContext.Provider>
	)
}
