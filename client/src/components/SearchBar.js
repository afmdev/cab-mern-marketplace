import * as React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { Link as LinkRouter } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { createTheme } from '@mui/material/styles';


import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';


const style = {
	width: '100%',
	// bgcolor: '#f5f5f5',
};

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

	const { user, token, userProfile, setUserProfile, signOut, updateAccount, setUpdateAccount } = useContext(AuthContext)

	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const [show, setShow] = useState(false);
	const handleShow = () => {
		if (show) {
			setShow(false);
		} else {
			setShow(true);
		}
	}

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	}

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	}


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

				{userProfile?.avatarPicture ? <Avatar
					alt={userProfile?.fistName}
					src={userProfile?.avatarPicture}
					sx={{ width: 32, height: 32 }}
				/> : <Avatar />} My Profile

				{/* <Avatar /> My account */}
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



			<LinkRouter to="/access" sx={{ textDecoration: 'none' }} underline="none">
				<MenuItem>
					<Avatar /> Login
				</MenuItem>
			</LinkRouter>

			<LinkRouter to="/access" sx={{ textDecoration: 'none' }} underline="none">
				<MenuItem>
					<Avatar /> Register
				</MenuItem>
			</LinkRouter>
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





		<Box sx={{ flexGrow: 1 }} >

			<Box style={{ position: 'relative', width: '80%' }}>
				<Drawer
					anchor="left"
					variant="temporary"
					open={show}
					onClose={handleShow}
				>
					<Box sx={{ position: 'absolute', right: '0' }}>
						<IconButton onClick={handleShow}>
							<CloseIcon />
						</IconButton>
					</Box>
					<Typography variant="h6" m={2} sx={{ width: '300px' }}>
						Menu
					</Typography>
					{/* <Divider /> */}
					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<LinkRouter to='/access'>
							<ListItem button>
								<ShoppingBagOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Home" />
							</ListItem>
						</LinkRouter>
						<Divider />
						<LinkRouter to='/access' >
							<ListItem button divider>
								<LocalGroceryStoreOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Shop" />
							</ListItem>
						</LinkRouter>
						<LinkRouter to='/access' underline="none">
							<ListItem button>
								<EmojiEventsOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Bestseller" />
							</ListItem>
						</LinkRouter>
						<Divider light />
						<LinkRouter to='/access'>
							<ListItem button>
								<LoyaltyOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Sale" />
							</ListItem>
						</LinkRouter>
						<Divider />
					</List>
				</Drawer>
			</Box>

			<AppBar position="sticky" sx={{ backgroundColor: "#fff", height: '64px', justifyContent: 'center', color: '#757575', boxShadow: '0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
				<Toolbar sx={{ px: '24px' }}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleShow}
						sx={{ display: { sm: 'none', xs: 'flex' }, mr: 2, backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ display: { sm: 'flex', xs: 'none' }, alignItems: "center" }}>
						<LinkRouter to='/'>
							<img display="block" height="28px" src="https://alejandrofm.com/cab/logos/afm-dark.svg" alt="Logo" href="/"></img>
						</LinkRouter
						>
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

						{user ?
							<Tooltip title="Account settings">
								<IconButton
									onClick={handleClick}
									size="small"
									sx={{ ml: 2 }}
									aria-controls={open ? 'account-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
								>
									<Avatar
										alt={userProfile?.fistName}
										src={userProfile?.avatarPicture ? userProfile.avatarPicture : "https://res.cloudinary.com/https-www-alejandrofm-com/image/upload/v1656668929/afm-mern-marketplace/cenddmxzmxj5gw16oqgi.png"}
										sx={{ width: 32, height: 32 }}
									/>
									{/* <Avatar sx={{ width: 32, height: 32 }}>A</Avatar> */}
								</IconButton>
							</Tooltip>
							:
							<Tooltip title="Login & Register">
								<IconButton
									onClick={handleClick}
									size="small"
									sx={{ ml: 2 }}
									aria-controls={open ? 'account-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
								>
									<Avatar
										alt={userProfile?.fistName}
										src={userProfile?.avatarPicture ? userProfile.avatarPicture : "https://res.cloudinary.com/https-www-alejandrofm-com/image/upload/v1656668929/afm-mern-marketplace/cenddmxzmxj5gw16oqgi.png"}
										sx={{ width: 32, height: 32 }}
									/>
									{/* <Avatar sx={{ width: 32, height: 32 }}>A</Avatar> */}
								</IconButton>
							</Tooltip>
						}




					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }} >
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