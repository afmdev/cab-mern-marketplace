import { createContext, useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(false);
	const redirectTo = useNavigate();


	const isUserLoggedIn = () => {
		const token = getToken();
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


	useEffect(() => {
		isUserLoggedIn();
	}, [user]);



	return (
		<AuthContext.Provider
			value={{ user, setUser, signOut, isUserLoggedIn }}>
			{props.children}
		</AuthContext.Provider>
	);
};