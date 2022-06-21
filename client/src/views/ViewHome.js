import React from 'react'
import TopBar from '../components/TopBar'
import SearchBar from '../components/SearchBar'
import MainMenu from '../components/MainMenu'
import TopSlider from '../components/TopSlider'
import ProductList from '../components/ProductList'
import { ProductsContext } from '../context/ProductsContext'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ViewHome() {

	// const { products, setFilter } = useContext(ProductsContext)


	return (
		<Box>
			<TopBar />
			<SearchBar />
			<MainMenu />
			<TopSlider />
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Box>xs=4</Box>
					</Grid>
					<Grid item xs={8}>
						<Box><ProductList /></Box>
					</Grid>
				</Grid>
			</Container>
		</Box>

	)
}

export default ViewHome