import React, { useContext } from 'react'
import { useLocation, useParams, Link as LinkRouter } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

import Button from '@mui/material/Button';


import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import { AuthContext } from "../context/authContext";
import { OrdersContext } from "../context/ordersContext";
import { ProductsContext } from "../context/ProductsContext";


import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ReactStars from 'react-stars';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const style = {
	width: '100%',
	bgcolor: '#f5f5f5',
};



function MyAccount() {

	const { ordersTotal, userOrders } = useContext(OrdersContext)
	const { products, handleAddToCart, like, setLike } = useContext(ProductsContext);

	let items = products?.data

	const handleLike = (element) => {
		const id = element._id
		const likeExist = like.some(element => element._id === id);
		if (likeExist) {
			const newLike = like.filter((element) => element._id !== id);
			setLike(newLike)
			console.log('like', like)
		} else {
			setLike([...like, element]);

		}
	}


	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={3}
			rowSpacing={3}
			columns={12}
			sx={{ mt: '0', pb: '60px' }}
		>

			<Grid item xs={10} sm={10} md={3} lg={3} xl={2}>
				<Box style={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>

					<Typography component="p" sx={{ mt: '8px' }}>
						Dashboard
					</Typography>
					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<LinkRouter to="/my-orders/" underline="none" style={{ textDecoration: 'none' }}>
							<ListItem button>
								<ShoppingBagOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Orders" />
								<Box component="span">{ordersTotal ? ordersTotal : 0}</Box>
							</ListItem>
						</LinkRouter>
						<Divider />
						<LinkRouter to="/my-likes/" underline="none" style={{ textDecoration: 'none' }}>
							<ListItem button divider>
								<FavoriteBorderOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Wishlist" />
								<Box component="span">{like.length}</Box>
							</ListItem>
						</LinkRouter>
						<ListItem button>
							<SupportAgentOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Support" />
							<Box component="span">10</Box>
						</ListItem>
						<Divider light />
					</List>


					<Typography component="p" sx={{ mt: '30px' }}>
						Account Settings
					</Typography>
					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<LinkRouter to="/my-account/" underline="none" style={{ textDecoration: 'none' }}>
							<ListItem button>
								<PersonOutlineOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="My Profile" />
							</ListItem>
						</LinkRouter>
						<Divider />
						<ListItem button>
							<DeleteForeverOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Delete" />
						</ListItem>
						<Divider />
					</List>

				</Box>
			</Grid>


			<Grid item xs={10} sm={10} md={8} lg={7} xl={5} order={{ xs: 3, md: 1 }}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>
						<Typography variant="h5" fontWeight="900" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<ShoppingBagOutlinedIcon sx={{ mr: '25px' }} />My Wishlist
						</Typography>
					</Box>
				</Box>

				<Grid container alignItems="stretch"
					justifyContent="center"
					spacing={2}
					columns={16}
					sx={{ pb: '80px' }}>

					{like && like.map((element, i) => {
						return (
							< Grid item style={{ display: 'flex' }
							} key={i} >
								<Card style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', maxWidth: '300px' }}>
									<CardContent>

										{like && like.length === 0 ?

											(<IconButton key={i} color="primary" aria-label="add to shopping cart" style={{ position: 'absolute', right: '26px', top: '26px', padding: '6px', backgroundColor: 'transparent', color: 'red' }} onClick={() => handleLike(element)}><FavoriteBorderIcon /></IconButton>)
											:
											(like.map((elementLike, i) => {
												return (
													elementLike._id === element._id ?

														<IconButton key={i} color="primary" aria-label="add to shopping cart" style={{ position: 'absolute', right: '26px', top: '26px', padding: '6px', backgroundColor: 'transparent', color: 'red' }} onClick={() => handleLike(element)}><FavoriteIcon /></IconButton>
														:
														<IconButton key={i} color="primary" aria-label="add to shopping cart" style={{ position: 'absolute', right: '26px', top: '26px', padding: '6px', backgroundColor: 'transparent', color: 'red' }} onClick={() => handleLike(element)}><FavoriteBorderIcon /></IconButton>
												)
											}))}

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
											{element.sale === 0 ?
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
											<LinkRouter to={`/product/${element.slug}`} style={{ textDecoration: 'none' }}>
												<Button variant="contained" color="error" disableElevation style={{ backgroundColor: '#0F3460' }}>Read More</Button>
											</LinkRouter>
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


			</Grid>
		</Grid >

	);
}

export default MyAccount
