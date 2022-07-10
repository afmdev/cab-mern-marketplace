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
import { InputBase } from '@mui/material';

import FormControl from '@mui/material/FormControl';


import { AuthContext } from "../context/authContext";
import { OrdersContext } from "../context/ordersContext";


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

function MyAccountEdit() {


	const { token, user, userProfile, setUserProfile, signOut, updateAccount, setUpdateAccount, globalTimer } = useContext(AuthContext)


	const { userOrders, setUserorders, ordersTotal, setOrdersTotal } = useContext(OrdersContext)

	const [alert, setAlert] = useState(false)
	const [alertSeverity, setAlertSeverity] = useState()
	const [alertMessage, setAlertMessage] = useState()

	function closeAlerts() {
		setAlert(false);
	}

	const [selectedFile, setSelectedFile] = useState(null);


	const handleChangeHandler = (e) => {
		setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
	};

	const attachFileHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};


	const uploadPicture = async (e) => {
		e.preventDefault();

		if (selectedFile === null) {
			setAlert(true)
			setAlertSeverity("error")
			setAlertMessage("You have not selected any images to be uploaded to your profile. ")
			setTimeout(closeAlerts, globalTimer);
		} else {

			const formData = new FormData();
			console.log("selectedFile<<<<<<<<<<<<<", selectedFile);
			formData.append("image", selectedFile);
			console.log("formData", formData);

			const requestOptions = {
				method: "POST",
				body: formData,
			};
			try {
				const response = await fetch(
					"http://localhost:5000/api/users/imageUpload",
					requestOptions
				);
				console.log("response", response);
				const result = await response.json();

				setUserProfile({ ...userProfile, avatarPicture: result.imageUrL });

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
		setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
		// setUpdateAccount({ ...updateAccount, [event.target.name]: event.target.value });
		// console.log(updateAccount);
	};
	const updateProfile = async () => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		let urlencoded = new URLSearchParams();
		urlencoded.append("id", userProfile._id);
		urlencoded.append("firstName", userProfile.firstName);
		urlencoded.append("lastName", userProfile.lastName);
		// urlencoded.append("email", userProfile.email);
		urlencoded.append("phone", userProfile.phone);
		urlencoded.append("birthday", userProfile.birthday);
		urlencoded.append("role", userProfile.role);
		urlencoded.append("avatarPicture", userProfile.avatarPicture);
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: urlencoded,
		};
		// console.log('urlencoded', myHeaders.get("Authorization"))

		try {
			const response = await fetch(
				"http://localhost:5000/api/users/updateProfile",
				requestOptions
			);
			console.log('response', response)
			const result = await response.json();
			const errorMsg = result.msg
			setAlert(true)
			setAlertMessage(errorMsg)
			setTimeout(closeAlerts, globalTimer);
		} catch (error) {
			setAlert(true)
			setAlertMessage("Unfortunately your profile information has not been updated.", error)
			setTimeout(closeAlerts, globalTimer);
		}
	};



	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={3}
			rowSpacing={3}
			columns={12}
			sx={{ mt: '0' }}
		>

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
							<PersonIcon sx={{ mr: '25px' }} />Edit My Profile
						</Typography>
					</Box>
					<Box>
						<LinkRouter to="/my-account" style={{ textDecoration: 'none' }}>
							<Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Back To Profile</Button>
						</LinkRouter>
					</Box>
				</Box>


				<Grid container spacing={3} alignItems="stretch" columns={12} sx={{ mt: '0', pt: '0', mb: '50px' }}>

					<Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ position: 'relative' }}>


						<Box sx={{ boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)', background: '#F5F5F5', borderRadius: '8px', overflow: 'hidden', padding: '15px' }}>
							<Box sx={{ position: 'relative' }}>
								<Box>
									<Avatar
										alt={userProfile?.fistName}
										src={userProfile?.avatarPicture ? userProfile.avatarPicture : ""}
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
									color: '#fff', height: '25px', width: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
								}}><EditOutlinedIcon /></Box>

								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
							</Box>

							<Grid container spacing={2} sx={{
								mt: '20px'
							}}>
								<Grid item xs={12} xl={6}>
									<TextField
										// error={errorName}
										autoComplete="fname"
										variant="outlined"
										label="First Name"
										id="firstname"
										name="firstName"
										type="text"
										value={userProfile?.firstName ? userProfile.firstName : ""}
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
										autoComplete="lname"
										variant="outlined"
										label="Last Name"
										id="lastname"
										name="lastName"
										type="text"
										value={userProfile?.lastName ? userProfile.lastName : ""}
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
										autoComplete="phone"
										variant="outlined"
										label="Phone"
										id="phone"
										name="phone"
										type="tel"
										value={userProfile?.phone ? userProfile.phone : ""}
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
										autoComplete="birthday"
										variant="outlined"
										label="Birthday"
										id="birthday"
										name="birthday"
										type="date"
										InputLabelProps={{
											shrink: true,
										}}
										value={userProfile?.birthday ? userProfile.birthday : ""}
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
										autoComplete="email"
										variant="outlined"
										label="E-Mail"
										id="email"
										name="email"
										type="email"
										value={userProfile?.email ? userProfile.email : ""}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
										disabled
									/>
								</Grid>

								{/* <Grid item xs={12} xl={6}>
									<TextField
										// error={errorName}
										autoComplete="password"
										variant="outlined"
										label="Password"
										id="password"
										name="password"
										type="password"
										value={userProfile?.password ? userProfile.password : "E-Mail"}
										// helperText={helperName}
										onChange={handleChange}
										required
										fullWidth
										sx={{ background: '#fff' }}
									/>
								</Grid> */}
							</Grid>
							<Button variant="contained" size="small" sx={{ width: '100%', mt: '25px' }} disableElevation onClick={updateProfile}>SAVE CHANGES</Button>
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

export default MyAccountEdit