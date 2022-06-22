import React from 'react'
import ProductList from '../components/ProductList'


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function ViewHome() {

	// const { fetchData } = useContext(ProductsContext)

	return (
		<Box>
			<Container sx={{ my: '20px' }}>
				<ProductList />
			</Container>
		</Box>

	)
}

export default ViewHome