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
import PersonIcon from '@mui/icons-material/Person';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	flexCenter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
});

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

			<Grid item xs={10} sm={10} md={3} lg={3} xl={3}>

				<Box style={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
					<Typography component="p">
						Dashboard
					</Typography>
					<Link href="#" underline="none" className={classes.flexCenter}>
						<Box className={classes.flexCenter}>
							<ShoppingBagOutlinedIcon /> Orders
						</Box>
						<Box component="span">
							10
						</Box>
					</Link>
					<Link href="#" underline="none" className={classes.flexCenter}>
						<Box className={classes.flexCenter}>
							<FavoriteBorderOutlinedIcon />Whishlist
						</Box>
						<Box component="span">
							10
						</Box>
					</Link>
					<Link href="#" underline="none" className={classes.flexCenter}>
						<Box className={classes.flexCenter}>
							<SupportAgentOutlinedIcon /> Support Ticket
						</Box>
						<Box component="span">
							10
						</Box>
					</Link>
				</Box>
			</Grid>


			<Grid item xs={10} sm={10} md={8} lg={7} xl={7}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '10px' }}>
					<Box>
						<Typography variant="h5" fontWeight="900" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<PersonIcon sx={{ mr: '25px' }} />My Profile
						</Typography>
					</Box>
					<Box>
						<Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Edit Profile</Button>
					</Box>
				</Box>

				<Box>

					<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
						<Box>
							<Avatar
								alt="Remy Sharp"
								src="https://mui.com/static/images/avatar/1.jpg"
								sx={{ width: 56, height: 56 }}
							/>
						</Box>
						<Box></Box>
					</Box>
					<Box>
						<Box></Box>
						<Box></Box>
						<Box></Box>
						<Box></Box>
					</Box>
				</Box>
			</Grid>
		</Grid>

	);
}

export default MyAccount
