
import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ReactStars from 'react-stars';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ratingChanged = (newRating) => {
	console.log(newRating)
}


function ProductsList() {
	const { products, handleAddToCart } = useContext(ProductsContext);

	let items = products?.data

	return (
		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={2}
			columns={16}
			sx={{ pb: '80px' }}>

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
								<Typography variant="headline" component="h4" sx={{ my: '10px' }}>
									{element.itemName}
								</Typography>
								<Typography component="p" sx={{ fontSize: '14px' }}>
									{element.shortDesc}
								</Typography>



							</CardContent >
							<CardActions sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
								<Box sx={{ width: '100%', mx: '8px', mb: '20px' }}>
									<Grid sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', mb: '10px' }}>
										<ReactStars
											count={5}
											size={24}
											value={element.rate}
											edit={false} />
										<Box sx={{ mt: '6px', ml: '10px' }}>
											{element.rate === "undefined" ? "0 " : element.rate}{" "}/ 5
										</Box>
									</Grid>
									{element.sale === "0" ?
										(<Typography variant="headline" component="h4" sx={{ mr: '10px', fontSize: '25px' }}>
											€{element.price}
										</Typography>)
										:
										(<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
											<Typography variant="headline" component="h4" sx={{ mr: '10px', fontSize: '25px' }}>
												€{element.sale}
											</Typography>
											<Typography variant="paragraph" component="p" sx={{ mr: '10px', textDecoration: 'line-through', color: '#cfcfcf' }}>
												€{element.price}
											</Typography>
										</Box>
										)
									}

								</Box>

								<Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mr: '8px' }}>
									<Link to={`/product/${element.slug}`} style={{ textDecoration: 'none' }}>
										<Button variant="contained" color="error" disableElevation style={{ backgroundColor: '#0F3460' }}>Read More</Button>
									</Link>
									<IconButton color="primary" aria-label="add to shopping cart" style={{ backgroundColor: '#e0e5ea' }} value={`${element.itemName}`} onClick={() => handleAddToCart(element)}>
										<AddShoppingCartIcon />
									</IconButton>
								</Box>


							</CardActions>
						</Card >
					</Grid >
				);
			})}
		</Grid >
	);
}

export default ProductsList
