import * as React from 'react';
import Container from '@mui/material/Container';
import { Link as LinkRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack, Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import DangerousIcon from '@mui/icons-material/Dangerous';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';

const menuLinksStyles = {
	display: 'flex',
	alignItems: 'center',
	fontWeight: 600,
	color: '#565656'
}

function Slider() {
	return (
		<Container disableGutters maxWidth={false} sx={{ display: { xs: 'none', sm: 'flex' }, bgcolor: 'rgba(0, 0, 0, 0.04)', color: 'white', height: '40px', px: '30px', borderBottom: '1px solid #e7e5e5', justifyContent: 'center' }}>
			<Box>
				<Grid sx={{ height: '40px' }}
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justifyContent="center">

					<Grid item xs sx={{ display: 'flex', fontSize: '14px', justifyContent: 'center' }}>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								'& > :not(style) + :not(style)': {
									ml: 2,
								},
							}}>
							<Stack
								direction="row"
								divider={<Divider orientation="vertical" flexItem />}
								spacing={2}>
								<LinkRouter to='/' style={menuLinksStyles}>
									<HomeOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Home
								</LinkRouter>
								<LinkRouter to='/' style={menuLinksStyles}>
									<LocalGroceryStoreOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Shop
								</LinkRouter>
								<LinkRouter to='/404' style={menuLinksStyles}>
									<DangerousIcon fontSize="small" sx={{ pr: '5px' }} />404
								</LinkRouter>
								{/* <LinkRouter to='/' style={menuLinksStyles}>
									<LoyaltyOutlinedIcon fontSize="small" sx={{ pr: '5px' }} />Sale
								</LinkRouter> */}
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Slider