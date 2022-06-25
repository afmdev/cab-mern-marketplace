import React, { useContext, useEffect, useState } from 'react'
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


function RegisterLogin() {


	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [name, setName] = useState("alejandro");

	const [newUser, setNewUser] = useState({});

	const handleChangeHandler = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
		console.log(e.target.value)
	};

	const signup = async () => {

		if (name === undefined) {
			console.log("ERROR UNDEFINED")
		} else {

			let urlencoded = new URLSearchParams();
			urlencoded.append("userName", newUser.userName);
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

	};


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
									display: 'inline-block', backgroundColor: '#d32f2f', borderRadius: '100px', p: '10px',
									color: '#fff', height: '25px', width: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
								}}><LockOpenIcon /></Box>

								<Box component="span" m={1} sx={{ width: '100%', border: '1px solid #e7e7e9' }}></Box>
							</Box>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
									/>
								</Grid>
							</Grid>
							<Button variant="contained" size="large" sx={{ width: '100%', my: '25px' }}>LOGIN</Button>
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

							<form>

								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											autoComplete="fname"
											variant="outlined"
											label="First Name"
											autoFocus
											id="username"
											name="userName"
											type="text"
											value={newUser.userName ? newUser.userName : ""}
											onChange={handleChangeHandler}
											required
											fullWidth
										/>
									</Grid>

									<Grid item xs={12}>
										<TextField
											variant="outlined"
											label="Email Address"
											name="email"
											id="email"
											autoComplete="email"
											type="email"
											value={newUser.email ? newUser.email : ""}
											onChange={handleChangeHandler}
											required
											fullWidth
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant="outlined"
											name="password"
											id="password"
											label="Password"
											type="password"
											autoComplete="current-password"
											value={newUser.password ? newUser.password : ""}
											onChange={handleChangeHandler}
											required
											fullWidth
										/>
									</Grid>

								</Grid>
								<Button variant="contained" size="large" sx={{ width: '100%', my: '25px' }} onClick={signup}>REGISTER ACCOUNT</Button>
							</form>
						</Grid>
					</Box>
				</TabPanel>
			</Box>
		</Grid >
	);
}

export default RegisterLogin