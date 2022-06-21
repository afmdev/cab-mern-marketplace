import React, { useContext, useEffect } from 'react'
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

	// const { fetchData } = useContext(ProductsContext)




	return (
		<Box>
			<TopBar />
			<SearchBar />
			<MainMenu />
			<TopSlider />
			<Container>
				<ProductList />
			</Container>
		</Box>

	)
}

export default ViewHome