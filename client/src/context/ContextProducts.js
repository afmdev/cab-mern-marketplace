import React from 'react'
import { createContext, useState } from 'React'

export const ProductsContext = createContext()

export const ProductContextProvider = (props) => {
	const [products, setProducts] = useState(null)
	const [loader, setLoader] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState([])


	const fetchData = () => {
		fetch('http://localhost:5000/api/items/all')
			.then((response) => {
				return response.json()
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
		<ProductContext.Provider value={{ products, loader, error, filter, setFilter, fetchData, setproducts }}>
			{props.children}
		</ProductContext.Provider>
	)
}
