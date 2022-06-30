import { createContext, useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

	const token = getToken();

	const [user, setUser] = useState(false);
	const [userProfile, setUserProfile] = useState(null);
	const [error, setError] = useState(null);
	const redirectTo = useNavigate();


	const isUserLoggedIn = () => {
		console.log(token);
		if (token) {
			setUser(true);
			console.log("OK: User is logged in");
			redirectTo("/my-account")
		} else {
			setUser(false);
			console.log("WARNING: User is NOT logged in");
		}
	};


	const signOut = () => {
		localStorage.removeItem("token");
		setUser(false);
		redirectTo("/");
		console.log("WARNING: User signed out");
	};


	const getProfile = async () => {
		const token = getToken();
		const myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
		};
		try {
			const response = await fetch(
				"http://localhost:5000/api/user/updateUser",
				requestOptions
			);
			const result = await response.json();
			console.log("result", result);
			setUserProfile({
				email: result.email,
				userName: result.userName,
				avatarPicture: result.avatarPicture,
			});
		} catch (error) {
			console.log("error gettin profile", error);
			setError("login first ");
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
			value={{ user, setUser, signOut, isUserLoggedIn, userProfile, setUserProfile, token }}>
			{props.children}
		</AuthContext.Provider>
	);
};