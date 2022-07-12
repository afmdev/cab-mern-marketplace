import React, { useContext, useRef, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function SimpleBottomNavigation() {

	const { cart, handleShowCart } = useContext(ProductsContext);

	return (
		<Box sx={{ display: { md: 'none', sm: 'block' }, overflow: 'hidden', position: 'fixed', bottom: '0', width: '100%', background: '#fff', borderTop: '1px solid #e7e5e5', boxShadow: 'inset 0 1px 15px 7px #e9e9e9' }}>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
				<IconButton aria-label="cart" onClick={handleShowCart}>
					<StyledBadge badgeContent={cart.length} color="error">
						<ShoppingCartIcon />
					</StyledBadge>
				</IconButton>
			</Box>
		</Box>
	);
}