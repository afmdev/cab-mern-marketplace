import React from 'react'
import { useLocation, useParams } from "react-router-dom";
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

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	flexCenter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '40px'
	},
});

const style = {
	width: '100%',

	bgcolor: '#f5f5f5',
};

function MyAccount() {

	const classes = useStyles();
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

					<Typography component="p">
						Account Settings
					</Typography>

					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<ListItem button>
							<PersonOutlineOutlinedIcon sx={{ mr: '10px' }} />
							<ListItemText primary="Profile Info" />
						</ListItem>
						<Divider />
					</List>



					<Typography component="p" sx={{ mt: '40px' }}>
						Dashboard
					</Typography>


					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<ListItem button>
							<ShoppingBagOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Orders" />
							<Box component="span">10</Box>
						</ListItem>
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
						<ListItem button>
							<DeleteForeverOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Delete" />
						</ListItem>
						<Divider />
					</List>

				</Box>
			</Grid>


			<Grid item xs={10} sm={10} md={8} lg={7} xl={5}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>
						<Typography variant="h5" fontWeight="900" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<PersonIcon sx={{ mr: '25px' }} />My Profile
						</Typography>
					</Box>
					<Box>
						<Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Edit Profile</Button>
					</Box>
				</Box>


				<Grid container spacing={3} alignItems="stretch" columns={13} sx={{ mt: '0', pt: '0' }}>

					<Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
						<Box sx={{ display: 'flex', alignItems: 'center', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56, mr: '10px' }}
								/>
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography component="p" sx={{ fontWeight: '900' }}>
									Alejandro F. Marrero
								</Typography>
								<Typography component="p" sx={{ fontSize: '12px' }}>
									Balance: <Typography component="span" sx={{ fontSize: '12px', fontWeight: '900' }}>500€</Typography>
								</Typography>
							</Box>
						</Box>
					</Grid>

					<Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
						<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
						<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
						<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Avatar
									alt="Remy Sharp"
									src="https://mui.com/static/images/avatar/1.jpg"
									sx={{ width: 56, height: 56 }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
						<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
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
						<Box sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box>
								<Typography component="p" fontSize="small">First Name</Typography>
								<Typography component="p">Alejandro</Typography>
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Last Name</Typography>
								<Typography component="p">Marrero</Typography>
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Email</Typography>
								<Typography component="p">ale@fm.es</Typography>
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Phone</Typography>
								<Typography component="p">922482738</Typography>
							</Box>

							<Box>
								<Typography component="p" fontSize="small">Birthday</Typography>
								<Typography component="p">18-03-1986</Typography>
							</Box>
						</Box>
					</Grid>


				</Grid>



			</Grid>
		</Grid >

	);
}

export default MyAccount
