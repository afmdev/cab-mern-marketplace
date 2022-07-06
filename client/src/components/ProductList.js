
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




function ProductsList() {
	const { products, fetchData, cart, setCart, fetchCartItems } = useContext(ProductsContext);

	const { handleAddToCart } = useContext(ProductsContext);

	let items = products?.data


	useEffect(() => {
		console.log(cart);
	}, [cart]);


	return (
		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={2}
			columns={16}

		>

			{items && items.map((element, i) => {
				return (
					< Grid item style={{ display: 'flex' }
					} key={i} >
						<Card style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', maxWidth: '300px' }}>
							<CardContent>
								<IconButton color="primary" aria-label="add to shopping cart" style={{ position: 'absolute', right: '26px', top: '26px', padding: '6px', backgroundColor: 'transparent' }}>
									<AddShoppingCartIcon />
								</IconButton>
								<img src={element.picture} width="100%" />
								<Typography variant="headline" component="h4">
									{element.itemName}
								</Typography>
								<Typography component="p" sx={{ fontSize: '14px' }}>
									{element.shortDesc}
								</Typography>
								<Typography component="p" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
									{element.price}€
								</Typography>
							</CardContent >
							<CardActions style={{ justifyContent: 'space-between', padding: '0 16px 10px 16px' }}>
								<Link to={`/product/${element.slug}`} style={{ textDecoration: 'none' }}>
									<Button variant="contained" color="error" disableElevation style={{ backgroundColor: '#0F3460' }}>Read More</Button>
								</Link>
								<IconButton color="primary" aria-label="add to shopping cart" style={{ backgroundColor: '#e0e5ea' }} value={`${element.itemName}`} onClick={() => handleAddToCart(element)}>
									<AddShoppingCartIcon />
								</IconButton>
							</CardActions>
						</Card >
					</Grid >
				);
			})}
		</Grid >
	);
}

export default ProductsList
