import { Box, Grid, Typography } from "@mui/material";


const sectionStyle = {
	height: "100px",

	backgroundImage:
		"url('https://i.picsum.photos/id/536/1920/100.jpg?hmac=dnCehAzgVdxcQT3H0eOsWmBBG_SekDcsmTB6vhvg90E') ",
	backgroundPosition: "right center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
}

function TopSlider() {
	return (
		<Grid style={sectionStyle}
			container
			direction="column"
			justify="space-evenly"
			alignItems="center"
			justifyContent="center"
		>
			<Box>
				<Typography variant="h2" color="#fff"></Typography>
			</Box>
		</Grid>
	)
}
export default TopSlider
