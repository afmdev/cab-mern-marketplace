import React, { useContext, useState } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { AuthContext } from "../context/authContext";
import { OrdersContext } from "../context/ordersContext";
import serverURL from "../config";


const Input = styled('input')({
	display: 'none',
});

const style = {
	width: '100%',
	bgcolor: '#f5f5f5',
};

const theme = createTheme({
	overrides: {
		MuiInputBase: {
			input: {
				background: "#fff",
			},
		},
	},
});

function ProductAdd() {

	const { token, globalTimer } = useContext(AuthContext)


	const [alert, setAlert] = useState(false)
	const [alertSeverity, setAlertSeverity] = useState()
	const [alertMessage, setAlertMessage] = useState()

	function closeAlerts() {
		setAlert(false);
	}

	const [selectedFile, setSelectedFile] = useState(null);
	const [itemInfo, setItemInfo] = useState(null);

	// const [itemInfo, setitemInfo] = useState(null);


	const attachFileHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	function cleanAfterSubmit() {
		setItemInfo({})

	}


	const uploadPicture = async (e) => {
		e.preventDefault();

		if (selectedFile === null) {
			setAlert(true)
			setAlertSeverity("error")
			setAlertMessage("You have not selected any images to be uploaded to your profile. ")
			setTimeout(closeAlerts, globalTimer);
		} else {

			const formData = new FormData();
			// console.log("selectedFile<<<<<<<<<<<<<", selectedFile);
			formData.append("image", selectedFile);
			// console.log("formData", formData);

			const requestOptions = {
				method: "POST",
				body: formData,
			};
			try {
				const response = await fetch(
					serverURL + "api/users/imageUpload",
					requestOptions
				);
				console.log("response", response);
				const result = await response.json();

				setItemInfo({ ...itemInfo, picture: result.imageUrL });

				const serverMsg = result.msg
				const serverAlert = result.alertColor
				setAlert(true)
				setAlertSeverity(serverAlert)
				setAlertMessage(serverMsg)
				setTimeout(closeAlerts, globalTimer);

			} catch (error) {
				setAlert(true)
				setAlertMessage("Something went wrong, please try again later. ", error)
				setTimeout(closeAlerts, globalTimer);
			}
		}
	};

	const handleChange = (event) => {
		setItemInfo({ ...itemInfo, [event.target.name]: event.target.value });
		console.log(itemInfo);
	};
	const addProduct = async () => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		let urlencoded = new URLSearchParams();
		urlencoded.append("itemName", itemInfo.itemName);
		urlencoded.append("slug", itemInfo.slug);
		urlencoded.append("shortDesc", itemInfo.shortDesc);
		urlencoded.append("longDesc", itemInfo.longDesc);
		urlencoded.append("price", itemInfo.price);
		urlencoded.append("sale", itemInfo.sale);
		urlencoded.append("picture", itemInfo.picture);
		urlencoded.append("user_id", itemInfo.user_id);
		urlencoded.append("rate", itemInfo.rate);
		urlencoded.append("count", itemInfo.count);
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: urlencoded,
		};
		// console.log('urlencoded', myHeaders.get("Authorization"))

		try {
			const response = await fetch(
				serverURL + "api/items/add-product",
				requestOptions
			);
			console.log('response', response)
			const result = await response.json();

			const serverMsg = result.msg
			const serverAlert = result.alertColor
			setAlert(true)
			setAlertSeverity(serverAlert)
			setAlertMessage(serverMsg)
			setTimeout(closeAlerts, globalTimer);
			cleanAfterSubmit()

		} catch (error) {
			setAlert(true)
			setAlertMessage("Something went wrong in the publication of the new product.", error)
			setTimeout(closeAlerts, globalTimer);
		}
	};



	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={3}
			rowSpacing={3}
			columns={12}
			sx={{ mt: '0', pb: '60px' }}>

			<Grid item xs={10} sm={10} md={3} lg={3} xl={2}>
				<Box style={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
					<Typography component="p" sx={{ mt: '8px' }}>
						Dashboard
					</Typography>
					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<LinkRouter to="/my-orders/" underline="none" style={{ textDecoration: 'none' }}>
							<ListItem button>
								<ShoppingBagOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="Orders" />
								<Box component="span">10</Box>
							</ListItem>
						</LinkRouter>
						<Divider />
						<ListItem button divider>
							<FavoriteBorderOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Whishlist" />
							<Box component="span">32</Box>
						</ListItem>
						<ListItem button>
							<SupportAgentOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Support" />
							<Box component="span">10</Box>
						</ListItem>
						<Divider light />
					</List>


					<Typography component="p" sx={{ mt: '30px' }}>
						Account Settings
					</Typography>
					<List sx={style} component="nav" aria-label="mailbox folders">
						<Divider />
						<LinkRouter to="/my-account/" underline="none" style={{ textDecoration: 'none' }}>
							<ListItem button>
								<PersonOutlineOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
								<ListItemText primary="My Profile" />
							</ListItem>
						</LinkRouter>
						<Divider />
						<ListItem button>
							<DeleteForeverOutlinedIcon sx={{ color: '#0f3460', mr: '10px' }} />
							<ListItemText primary="Delete" />
						</ListItem>
						<Divider />
					</List>

				</Box>
			</Grid>

			<Grid item xs={10} sm={10} md={8} lg={7} xl={5}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>
						<Typography variant="h5" fontWeight="900" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<AddShoppingCartIcon sx={{ mr: '25px' }} />Add New Product
						</Typography>
					</Box>
				</Box>


				<Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0', mb: '50px' }}>

					<Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ position: 'relative' }}>


						<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box sx={{ position: 'relative' }}>
								<Box>
									<Avatar
										alt={itemInfo?.fistName}
										src={itemInfo?.picture ? itemInfo.picture : ""}
										sx={{ width: 56, height: 56, mr: '10px' }}
									/>
								</Box>
								<Box sx={{ position: 'absolute', left: '31px', bottom: '-13px' }}>
									<FormControl>
										<label htmlFor="icon-button-file">
											<Input accept="image/*" id="icon-button-file" type="file" onChange={attachFileHandler} />
											<IconButton color="primary" aria-label="upload picture" component="span">
												<PhotoCamera />
											</IconButton>
										</label>
										<Button variant="contained" size="small" color="error" sx={{ my: '10px', padding: '0px' }} disableElevation onClick={uploadPicture}>UPLOAD</Button>
									</FormControl>
								</Box>
							</Box>

							<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
								<Box sx={{
									backgroundColor: '#d32f2f', borderRadius: '100px', p: '10px',
									color: '#fff', height: '25px', width: '45px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
								}}><AddTaskIcon /></Box>

								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
							</Box>

							<Grid container spacing={2} sx={{
								mt: '20px'
							}}>
								<Grid item xs={12} xl={6}>
									<TextField
										// error={errorName}
										autoComplete="itemName"
										variant="outlined"
										label="Item Name"
										id="itemName"
										name="itemName"
										type="text"
										value={itemInfo?.itemName ? itemInfo.itemName : ""}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12} xl={6}>
									<TextField
										// error={errorName}
										autoComplete="slug"
										variant="outlined"
										label="Slug"
										id="slug"
										name="slug"
										type="text"
										value={itemInfo?.slug ? itemInfo.slug : ""}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										// error={errorName}
										autoComplete="shortDesc"
										variant="outlined"
										label="Short Description"
										id="shortDesc"
										name="shortDesc"
										type="text"
										value={itemInfo?.shortDesc ? itemInfo.shortDesc : ""}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										// error={errorName}
										autoComplete="longDesc"
										variant="outlined"
										label="Long Description"
										id="longDesc"
										name="longDesc"
										type="text"
										value={itemInfo?.longDesc ? itemInfo.longDesc : ""}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12} xl={6}>
									<TextField
										// error={errorName}
										autoComplete="price"
										variant="outlined"
										label="Price"
										id="price"
										name="price"
										type="text"
										value={itemInfo?.price ? itemInfo.price : ""}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12} xl={6}>
									<TextField
										// error={errorName}
										autoComplete="sale"
										variant="outlined"
										label="Sale"
										id="sale"
										name="sale"
										type="text"
										value={itemInfo?.sale ? itemInfo.sale : ""}
										// helperText={helperName}
										onChange={handleChange}
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12} >
									<TextField
										// error={errorName}
										autoComplete="rate"
										variant="outlined"
										label="Rate"
										id="rate"
										name="rate"
										type="text"
										value={itemInfo?.rate ? itemInfo.rate : ""}
										// helperText={helperName}
										onChange={handleChange}
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid>
							</Grid>
							<Button variant="contained" size="small" sx={{ width: '100%', mt: '25px' }} disableElevation onClick={addProduct}>SAVE CHANGES</Button>
						</Box>
						<Collapse in={alert}>
							<Alert severity={alertSeverity}>
								{alertMessage}
							</Alert>
						</Collapse>
					</Grid>
				</Grid>
				{/* <Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0' }}>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							Hola
						</Box>
					</Grid>
				</Grid> */}
			</Grid>
		</Grid >

	);
}

export default ProductAdd