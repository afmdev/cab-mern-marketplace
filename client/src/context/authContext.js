import { createContext, useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

	const token = getToken();

	const [user, setUser] = useState(false);
	// const [updateAccount, setUpdateAccount] = useState({});
	const [userProfile, setUserProfile] = useState(null);
	const [error, setError] = useState(null);

	const redirectTo = useNavigate();


	const isUserLoggedIn = () => {
		console.log(token);
		if (token) {
			setUser(true);
			console.log("OK: User is logged in");
			redirectTo("/my-account")
			getProfile()
		} else {
			setUser(false);
			console.log("WARNING: User is NOT logged ");
		}
	};


	const signOut = () => {
		localStorage.removeItem("token");
		setUser(false);
		setUserProfile(null)
		redirectTo("/");

		console.log("WARNING: User signed out" + user);
	};


	// const getProfile = async () => {
	// 	const token = getToken();
	// 	const myHeaders = new Headers();
	// 	myHeaders.append("Authorization", `Bearer ${token}`);
	// 	var requestOptions = {
	// 		method: "GET",
	// 		headers: myHeaders,
	// 	};
	// 	try {
	// 		const response = await fetch(
	// 			"http://localhost:5000/api/user/updateUser",
	// 			requestOptions
	// 		);
	// 		const result = await response.json();
	// 		console.log("result >>>>>>>>>>>>>>>>>>>>>>>>>", result);
	// 		setUserProfile(result);
	// 	} catch (error) {
	// 		console.log("error gettin profile", error);
	// 		setError("login first ");
	// 	}
	// };

	const getProfile = async () => {
		const myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		const requestOptions = {
			method: "GET",
			headers: myHeaders,
		};
		try {
			const response = await fetch(
				"http://localhost:5000/api/users/userInfo",
				requestOptions
			);
			const profileData = await response.json();
			setUserProfile(profileData);
			console.log("Profile data: ", profileData);
		} catch (error) {
			console.log("Error fetching profile data: ", error);
		}
	};


	useEffect(() => {
		getProfile();
	}, []);

	useEffect(() => {
		isUserLoggedIn();
	}, [user]);



	return (
		<AuthContext.Provider
			value={{
				user, setUser,
				signOut,
				isUserLoggedIn,
				getProfile,
				userProfile, setUserProfile,
				token,
				// updateAccount, setUpdateAccount
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};