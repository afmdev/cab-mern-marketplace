import * as React from 'react';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack, Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';

const menuLinksStyles = {
	display: 'flex',
	alignItems: 'center',
	fontWeight: 600,
	color: '#565656'
}

function Slider() {
	return (
		<Container disableGutters maxWidth={false} sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)', color: 'white', height: '40px', px: '30px', borderBottom: '1px solid #e7e5e5' }}>
			<Box>
				<Grid sx={{ height: '40px' }}
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justifyContent="center">

					{/* <Grid item xs="auto" sx={{ display: { md: 'none', xs: 'flex' }, fontSize: '12px' }}>
						<Box sx={{ display: 'flex', alignItems: "center" }}>
							<img display="block" height="28px" src="https://alejandrofm.com/cab/logos/afm.svg" alt="Logo" href="/"></img>
						</Box>
					</Grid> 
					<Grid item xs="auto" sx={{ display: { md: 'flex', xs: 'none' }, fontSize: '12px' }}>
						<Box sx={{ display: 'flex', alignItems: "center" }}>
							<LocalPhoneOutlinedIcon sx={{ mr: '7px' }} /><span>+49 176 8563 5852</span>
						</Box>
						<Box sx={{ display: 'flex', alignItems: "center", ml: '15px' }}>
							<EmailOutlinedIcon sx={{ mr: '7px' }} /> <span>info@alejandrofm.com</span>
						</Box>
					</Grid> */}
					<Grid item xs sx={{ display: 'flex', fontSize: '14px', justifyContent: 'center' }}>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								'& > :not(style) + :not(style)': {
									ml: 2,
								},
							}}
						>
							<Stack
								direction="row"
								divider={<Divider orientation="vertical" flexItem />}
								spacing={2}
							>

								<Link to='/' style={menuLinksStyles}>
									<HomeOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Home
								</Link>

								<Link to='/access' style={menuLinksStyles}>
									<LocalGroceryStoreOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Login
								</Link>

								<Link to='/' style={menuLinksStyles}>
									<EmojiEventsOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Bestseller
								</Link>

								<Link to='/' style={menuLinksStyles}>
									<LoyaltyOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Sale
								</Link>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Slider