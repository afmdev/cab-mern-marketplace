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

import { AuthContext } from "../context/authContext";
import { OrdersContext } from "../context/ordersContext";

// const styles = (theme) => ({
// 	myFlex: {

// 		[theme.breakpoints.down('md')]: {
// 			display: 'flex',
// 			justifyContent: 'space-between',
// 			flexDirection: 'column',
// 			alignItems: 'center',
// 			height: '40px'
// 		},
// 	},
// });


const style = {
	width: '100%',
	bgcolor: '#f5f5f5',
};

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
							<PersonIcon sx={{ mr: '25px' }} />My Profile
						</Typography>
					</Box>
					<Box>
						<LinkRouter to="/my-account/edit" underline="none" style={{ textDecoration: 'none' }}>
							<Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Edit Profile</Button>
						</LinkRouter>
					</Box>
				</Box>

				<Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0' }} order={{ xs: 1, md: 2 }}>

					<Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
						<Box sx={{ display: 'flex', alignItems: 'center', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt={userProfile?.fistName}
									src={userProfile?.avatarPicture ? userProfile.avatarPicture : ""}
									sx={{ width: 56, height: 56, mr: '10px' }}
								/>
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography component="p" sx={{ fontWeight: '900' }}>
									{userProfile?.firstName ? userProfile.firstName : "nasty"} {userProfile?.lastName ? userProfile.lastName : ""}
								</Typography>
								<Typography component="p" sx={{ fontSize: '12px' }}>
									Account Type: <Typography component="span" sx={{ fontSize: '12px', fontWeight: '900' }}>{userProfile?.role ? userProfile.role : "nasty"}</Typography>
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6} sm={6} md={1.75} lg={2} xl={2}>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6} sm={6} md={1.75} lg={2} xl={2}>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6} sm={6} md={1.75} lg={2} xl={2}>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6} sm={6} md={1.75} lg={2} xl={2}>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px 0 15px 0' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0' }}>

					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Box className="myFlex" sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px', textAlign: 'center' }}>
							<Box>
								<Typography component="p" fontSize="small">First Name</Typography>
								{userProfile?.firstName
									?
									(<Typography component="p">{userProfile.firstName}</Typography>)
									:
									(<Typography component="p">nasty</Typography>)}
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Last Name</Typography>
								{userProfile?.lastName
									?
									<Typography component="p">{userProfile.lastName}</Typography>
									:
									<Typography component="p">nasty</Typography>}
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Email</Typography>
								{userProfile?.email
									?
									<Typography component="p">{userProfile.email}</Typography>
									:
									<Typography component="p">nasty</Typography>}
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Phone</Typography>
								{userProfile?.phone
									?
									<Typography component="p">{userProfile.phone}</Typography>
									:
									<Typography component="p">nasty</Typography>}
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Birthday</Typography>
								{userProfile?.birthday
									?
									<Typography component="p">{userProfile.birthday}</Typography>
									:
									<Typography component="p">nasty</Typography>}
							</Box>
						</Box>
					</Grid>


				</Grid>



			</Grid>
		</Grid >

	);
}

export default MyAccount
