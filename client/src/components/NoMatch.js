import React from "react";
import { useLocation, Link as LinkRouter } from "react-router-dom";
import { Grid, Box, Typography, Button } from '@mui/material/';

function NoMatch() {

	let location = useLocation();


	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={3}
			rowSpacing={3}
			columns={12}
			sx={{ mt: '0', pb: '60px' }}
			className="ViewNoMatch"
		>
			<Box sx={{ textAlign: "center" }}>
				<Box sx={{ mt: "30px" }}>
					<img src="../404.svg" width="200px" />
				</Box>
				<Box>
					<Typography variant="h1" sx={{ mt: '8px' }}>

						404
					</Typography>
				</Box>

				<Box>			<Typography component="p" sx={{ mt: '8px' }}>
					Sorry but we can not found the following URL: <br /><strong>{location.pathname}</strong>
				</Typography> </Box>

				<Box sx={{ mt: "30px" }}>
					<LinkRouter to='/'>
						<Button underline="none" variant="contained" disableElevation sx={{ borderRadius: "100px" }}>Go back Home</Button></LinkRouter>
				</Box>
			</Box>


		</Grid>



	)
}

export default NoMatch



