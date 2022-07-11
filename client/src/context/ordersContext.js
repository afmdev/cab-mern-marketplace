import { createContext, useContext, useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./authContext";



export const OrdersContext = createContext();
export const OrdersContextProvider = (props) => {

	const { userProfile } = useContext(AuthContext)

	const token = getToken();

	const [userOrders, setUserOrders] = useState()
	const [ordersTotal, setOrdersTotal] = useState()

	const userId = userProfile?._id

	// const fetchOrders = () => {
	// 	fetch("http://localhost:5000/api/orders/" + userId)
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			console.log("ordersContext: ", data.data.length)
	// 			setOrdersTotal(data.data.length)
	// 			setUserOrders(data.data)
	// 		})
	// 		.catch((error) => {
	// 			// setError(error)
	// 		})
	// }

	const fetchOrders = async () => {
		const myHeaders = new Headers();
		myHeaders.append("Authorization", `Bearer ${token}`);
		const requestOptions = {
			method: "GET",
			headers: myHeaders,
		};
		try {
			const response = await fetch("http://localhost:5000/api/orders/" + userId,
				requestOptions
			);
			const data = await response.json();
			console.log("ordersContext: ", data.data.length)
			setOrdersTotal(data.data.length)
			setUserOrders(data.data)
		} catch (error) {
			console.log("Error fetching profile data: ", error);
		}
	};


	console.log("orderContext", userOrders)


	useEffect(() => {
		fetchOrders()
	}, [userId])


	return (
		<OrdersContext.Provider value={{
			fetchOrders,
			userOrders, setUserOrders,
			ordersTotal, setOrdersTotal
		}}>
			{props.children}
		</OrdersContext.Provider>
	)
}