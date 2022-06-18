import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Slider() {
	return (
		<Container disableGutters maxWidth={false} sx={{ bgcolor: '#0F3460', color: 'white', height: '40px', px: '30px' }}>
			<Box>
				<Grid sx={{ height: '40px' }}
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justifyContent="center">

					<Grid item xs="auto" sx={{ display: { md: 'none', xs: 'flex' }, fontSize: '12px' }}>
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
					</Grid>
					<Grid item xs sx={{ display: 'flex', fontSize: '12px', justifyContent: 'end' }}>
						<Box sx={{ display: 'flex', alignItems: "center" }}>
							Need help?
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Slider