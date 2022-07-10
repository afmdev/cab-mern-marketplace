import React, { useContext } from 'react'
import { useLocation, useParams, Link as LinkRouter } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Skeleton } from '@mui/material';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { AuthContext } from "../context/authContext";
import { OrdersContext } from "../context/ordersContext";


const style = {
	width: '100%',
	bgcolor: '#f5f5f5',
};

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function MyAccount() {

	const { token, userProfile, signOut, updateAccount, setUpdateAccount } = useContext(AuthContext)
	const { ordersTotal } = useContext(OrdersContext)



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

				<Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0' }} order={{ xs: 1, md: 2 }}>



					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Box className="myFlex" sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px', textAlign: 'center' }}>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align="right">Calories</TableCell>
											<TableCell align="right">Fat&nbsp;(g)</TableCell>
											<TableCell align="right">Carbs&nbsp;(g)</TableCell>
											<TableCell align="right">Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow
												key={row.name}
												sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
											>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
												<TableCell align="right">{row.fat}</TableCell>
												<TableCell align="right">{row.carbs}</TableCell>
												<TableCell align="right">{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
					</Grid>


				</Grid>



			</Grid>
		</Grid >

	);
}

export default MyAccount
