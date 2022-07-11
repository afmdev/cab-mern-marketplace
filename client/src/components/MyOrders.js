import React, { useContext } from 'react'
import { useLocation, useParams, Link as LinkRouter } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Skeleton } from '@mui/material';

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


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const style = {
	width: '100%',
	bgcolor: '#f5f5f5',
};





function MyAccount() {






	const { token, userProfile, signOut, updateAccount, setUpdateAccount } = useContext(AuthContext)
	const { ordersTotal, userOrders } = useContext(OrdersContext)

	const { products } = useContext(ProductsContext);


	let orders = userOrders

	console.log('ORDERS', orders)

	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={3}
			rowSpacing={3}
			columns={12}
			sx={{ mt: '0' }}
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
						<ListItem button divider>
							<FavoriteBorderOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Whishlist" />
							<Box component="span">32</Box>
						</ListItem>
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
							<ShoppingBagOutlinedIcon sx={{ mr: '25px' }} />My Orders
						</Typography>
					</Box>
					<Box>
						<LinkRouter to="/my-account/edit" underline="none" style={{ textDecoration: 'none' }}>

						</LinkRouter>
					</Box>
				</Box>

				<Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0' }}>

					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

						<Box>
							{orders && orders.map((element, i) => (
								<Box key={i}>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography component="p" sx={{ fontSize: '10px' }}>Order: {element._id}</Typography>
										<Typography component="p" sx={{ fontSize: '10px' }}>Created: {element.createdAt}</Typography>
									</Box>
									<TableContainer component={Paper} sx={{ mb: '50px' }}>
										<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
											<TableHead sx={{ backgroundColor: '#0f3460', color: '#fff' }}>
												<TableRow>
													<TableCell align="left" sx={{ color: '#fff' }}>Image</TableCell>
													<TableCell align="left" sx={{ color: '#fff' }}>Name</TableCell>
													<TableCell align="center" sx={{ color: '#fff' }}>Price</TableCell>
													<TableCell align="center" sx={{ color: '#fff' }}>Amount</TableCell>
													<TableCell align="center" sx={{ color: '#fff' }}>Link</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{element.items && element.items.map((element2, i) => (
													<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
														<TableCell component="th" scope="row"><img src={element2.picture} alt={element2.itemName} width="25px" /></TableCell>
														<TableCell align="left">{element2.itemName}</TableCell>
														<TableCell align="center">{element2.price}</TableCell>
														<TableCell align="center">{element.amount[i]}</TableCell>
														<TableCell align="center">
															<LinkRouter to={`/product/${element2.slug}`} style={{ textDecoration: 'none' }}>
																<Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Product</Button>
															</LinkRouter>
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Box>
							))}
						</Box>








						{/* {orders && orders.map((element, i) => {})}
					return (
					< Grid item style={{ display: 'flex' }
					} key={i} >
						<img src={element.picture} width="100%" />
					</Grid >
					); */}
					</Grid>
				</Grid>
			</Grid>
		</Grid >

	);
}

export default MyAccount
