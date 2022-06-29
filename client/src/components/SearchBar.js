import * as React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { Link } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';




const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.04),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.black, 0.06),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

function SearchBar() {

	const { user, signOut, isUserLoggedIn } = useContext(AuthContext);

	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);



	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};


	// const handleMenuClose = () => {
	// 	setAnchorEl(null);
	// 	handleMobileMenuClose();
	// };

	// const handleMobileMenuOpen = (event) => {
	// 	setMobileMoreAnchorEl(event.currentTarget);
	// };

	const MenuSignedInId = 'account-menu';
	const renderMenuSignedIn = (
		<Menu
			anchorEl={anchorEl}
			id={MenuSignedInId}
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: 1.5,
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>

			<MenuItem>
				<Avatar /> Profile
			</MenuItem>
			<MenuItem>
				<Avatar /> My account
			</MenuItem>
			<Divider />

			<MenuItem sx={{ display: { md: 'none', sm: 'flex' } }}>
				<ListItemIcon>
					<Badge badgeContent={4} color="error">
						<FavoriteOutlinedIcon fontSize="small" />
					</Badge>
				</ListItemIcon>
				Whishlist
			</MenuItem>

			<MenuItem sx={{ display: { md: 'none', sm: 'flex' } }}>
				<ListItemIcon>
					<Badge badgeContent={17} color="error">
						<ShoppingCartIcon fontSize="small" />
					</Badge>
				</ListItemIcon>
				Cart
			</MenuItem>

			<Divider sx={{ display: { md: 'none', sm: 'flex' } }} />
			<MenuItem>
				<ListItemIcon>
					<PersonAdd fontSize="small" />
				</ListItemIcon>
				Add another account
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Settings fontSize="small" />
				</ListItemIcon>
				Settings
			</MenuItem>
			<MenuItem>
				<Link onClick={signOut} underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</Link>
			</MenuItem>
		</Menu>
	);

	const MenuMenuSignedOut = 'account-menu';
	const renderMenuSignedOut = (
		<Menu
			anchorEl={anchorEl}
			id={MenuMenuSignedOut}
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: 1.5,
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>



			<Link to="/access">
				<MenuItem>
					<Avatar /> Login
				</MenuItem>
			</Link>
			<MenuItem>

				<Avatar /> Register

			</MenuItem>
		</Menu>
	);



	const mobileMenuInId = 'primary-search-account-menu-mobile';
	const renderMobileMenuIn = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuInId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<FavoriteOutlinedIcon />
					</Badge>
				</IconButton>
				Whishlist
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new items"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
				<p>Cart</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);


	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky" sx={{ backgroundColor: "#fff", height: '64px', justifyContent: 'center', color: '#757575', boxShadow: '0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2, backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ display: { sm: 'flex', xs: 'none' }, alignItems: "center" }}>
						<img display="block" height="28px" src="https://alejandrofm.com/cab/logos/afm-dark.svg" alt="Logo" href="/"></img>
					</Box>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton size="large" aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="error">
								<FavoriteOutlinedIcon />
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							aria-label="show 17 new items"
							color="inherit"
						>
							<Badge badgeContent={17} color="error">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>


						<Tooltip title="Account settings">
							<IconButton
								onClick={handleClick}
								size="small"
								sx={{ ml: 2 }}
								aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
							>
								<Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
							</IconButton>
						</Tooltip>

					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuInId}
							aria-haspopup="true"
							// onClick={handleMobileMenuOpen}
							onClick={handleClick}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			{renderMobileMenuIn}
			{/* {user ? renderMobileMenuIn : renderMobileMenuOut} */}
			{user ? renderMenuSignedIn : renderMenuSignedOut}

		</Box >

	);
}
export default SearchBar