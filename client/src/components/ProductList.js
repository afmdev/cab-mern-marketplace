
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'


function ProductsList() {

	const { products, fetchData } = useContext(ProductsContext);

	let items = products?.data



	return (
		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={2}
			columns={16}
		>

			{items && items.map((element, i) => {
				return (
					<Grid item style={{ display: 'flex' }} spacing={3}>
						<Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', maxWidth: '300px' }}>
							<CardContent>
								<Typography>
									Category
								</Typography>
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
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card >
					</Grid >
				);
			})}
		</Grid >
	);
}

export default ProductsList
