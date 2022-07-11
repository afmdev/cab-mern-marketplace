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


	const [value, setValue] = useState(0);
	const ref = useRef(null);



	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>

					<IconButton aria-label="cart" onClick={handleShowCart}>
						<StyledBadge badgeContent={cart.length} color="error">
							<ShoppingCartIcon />
						</StyledBadge>
					</IconButton>
					{/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
					{/* <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} /> */}

					{/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
				</BottomNavigation>
			</Paper>
		</Box>
	);
}