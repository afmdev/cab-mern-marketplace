import * as React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';


import Typography from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';



function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

// function LinkTab(props) {
// 	return (
// 		<Tab
// 			component="a"
// 			onClick={event => {
// 				event.preventDefault();
// 			}}
// 			{...props}
// 		/>
// 	);
// }

function RegisterLogin() {

	const { user, setUser, signOut, isUserLoggedIn } = useContext(AuthContext);

	const [value, setValue] = useState(0);

	const [name, setName] = useState(undefined);
	const [errorName, setErrorName] = useState(false);
	const [helperName, setHelperName] = useState('');

	const [email, setEmail] = useState('');
	const [errorEmail, setErrorEmail] = useState(false);
	const [helperEmail, setHelperEmail] = useState('');

	const [password, setPassword] = useState(undefined);
	const [errorPassword, setErrorPassword] = useState(false);
	const [helperPassword, setHelperPassword] = useState('');

	const [newUser, setNewUser] = useState({});

	//REVIEW Handler for tabs

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//REVIEW Handler for input fields

	const handleChangeName = (e) => {
		setName(e.target.value)
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
		setErrorName(false);
		setHelperName('');
	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value)
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
		setErrorEmail(false);
		setHelperEmail('');
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value)
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
		setErrorPassword(false);
		setHelperPassword('');
	};


	const signUp = async () => {

		if (name === undefined || name === '') {
			setHelperName('Name is a required field');
			setErrorName(true);
		} else if (email === undefined || email === '') {
			setHelperEmail('Email is a required field');
			setErrorEmail(true);
		} else if (password === undefined || password === '') {
			setHelperPassword('Password is a required field');
			setErrorPassword(true);
		} else {

			let urlencoded = new URLSearchParams();

			urlencoded.append("firstName", newUser.firstName);
			urlencoded.append("email", newUser.email);
			urlencoded.append("password", newUser.password);

			//REVIEW 25.1 Create and define the request options, including the objet created in the body
			var requestOptions = {
				method: "POST",
				body: urlencoded,
			};

			//REVIEW 25.2 Fetch endpoint attaching the request options. Display succes/error message to user.
			try {
				const response = await fetch(
					"http://localhost:5000/api/users/signUp",
					requestOptions
				);
				const results = await response.json();
				console.log("results", results);
			} catch (error) {
				console.log("error fetching", error);
			}
		}
	}


	const [signInUser, setSignInUser] = useState({});

	const handleChangeHandlerSignIn = (e) => {
		setSignInUser({ ...signInUser, [e.target.name]: e.target.value });
	}


	const signIn = async () => {
		let urlencoded = new URLSearchParams();
		urlencoded.append("email", signInUser.email);
		urlencoded.append("password", signInUser.password);

		var requestOptions = {
			method: "POST",
			body: urlencoded,
		};

		try {
			const response = await fetch(
				"http://localhost:5000/api/users/login",
				requestOptions
			);
			const result = await response.json();
			const { token, user } = result;

			if (token) {
				localStorage.setItem("token", token);
				setUser(true);
			} else {
				console.log("error seting token");
				setUser(false);
			}
			console.log("result", result);
		} catch (error) {
			console.log("login error", error);
		}
	}


	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			columns={12}
			sx={{ height: 'calc(100vh - 260px)' }}
			className="RegisterLogin"
		>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>

						<Tab label="LOGIN" {...a11yProps(0)} />
						<Tab label="REGISTER" {...a11yProps(1)} />


					</Tabs>
				</Box>
				<TabPanel value={value} index={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Box sx={{ textAlign: 'center' }}>
						<Grid sx={{ maxWidth: 'sm' }}>
							<Typography variant="headline" component="h2" sx={{ textAlign: 'center', mb: '50px', fontSize: '40px' }}>Log in to your account</Typography>

							<Box sx={{ width: '100%', mb: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
								<Box sx={{
									backgroundColor: '#d32f2f', borderRadius: '100px', p: '10px',
									color: '#fff', height: '25px', width: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
								}}><LockOpenIcon /></Box>

								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
							</Box>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										value={signInUser.email ? signInUser.email : ""}
										onChange={handleChangeHandlerSignIn}
										required
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										value={signInUser.password ? signInUser.password : ""}
										onChange={handleChangeHandlerSignIn}
										required
										fullWidth
									/>
								</Grid>
							</Grid>
							<Button variant="contained" size="large" sx={{ width: '100%', my: '25px' }} onClick={signIn}>LOGIN</Button>
						</Grid>
					</Box>
				</TabPanel>


				{/* REGISTER USER */}

				<TabPanel value={value} index={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

					<Box sx={{ textAlign: 'center' }}>
						<Grid sx={{ maxWidth: 'sm' }}>
							<Typography variant="headline" component="h2" sx={{ textAlign: 'center', mb: '50px', fontSize: '40px' }}>Register a new account</Typography>

							<Box sx={{ width: '100%', mb: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
								<Box sx={{
									display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#d32f2f', borderRadius: '100px', p: '10px',
									color: '#fff', height: '25px', width: '25px'
								}}><HowToRegIcon /></Box>

								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
							</Box>

							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										error={errorName}
										autoComplete="fname"
										variant="outlined"
										label="First Name"
										id="firstname"
										name="firstName"
										type="text"
										defaultValue={newUser.firstName ? newUser.firstName : ""}
										helperText={helperName}
										onChange={handleChangeName}
										required
										fullWidth
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										error={errorEmail}
										label="Email Address"
										variant="outlined"
										name="email"
										id="email"
										autoComplete="email"
										type="email"
										defaultValue={newUser.email ? newUser.email : ""}
										helperText={helperEmail}
										onChange={handleChangeEmail}
										required
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										error={errorPassword}
										variant="outlined"
										name="password"
										id="password"
										label="Password"
										type="password"
										autoComplete="current-password"
										defaultValue={newUser.password ? newUser.password : ""}
										helperText={helperPassword}
										onChange={handleChangePassword}
										required
										fullWidth
									/>
								</Grid>

							</Grid>
							<Button variant="contained" size="large" sx={{ width: '100%', my: '25px' }} onClick={signUp}>REGISTER ACCOUNT</Button>
						</Grid>
					</Box>
				</TabPanel>
			</Box>
		</Grid >
	);
}

export default RegisterLogin


