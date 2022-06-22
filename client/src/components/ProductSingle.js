
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { Link, useLocation, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'


function ProductSingle(props) {
	const { slug } = useParams();
	const location = useLocation();

	const [products, setProducts] = useState(null)
	const [loader, setLoader] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState([])


	const fetchData = () => {
		fetch("http://localhost:5000/api/items/" + slug)
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

	useEffect(() => {
		fetchData()
	}, [])


	return (
		<Container maxWidth="xs">
			{element && <img src={element.picture} alt={element.itemName} width="50px" />}

		</Container>
	);
}

export default ProductSingle
