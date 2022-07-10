import { createContext, useContext, useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./authContext";



export const OrdersContext = createContext();
export const OrdersContextProvider = (props) => {

	const { userProfile } = useContext(AuthContext)


	const [userOrders, setUserorders] = useState()
	const [ordersTotal, setOrdersTotal] = useState()

	const userId = userProfile?._id

	const fetchOrders = () => {
		fetch("http://localhost:5000/api/orders/" + userId)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("ordersContext: ", data.data.length)
				setOrdersTotal(data.data.length)
			})
			.catch((error) => {
				// setError(error)
			})
	}


	useEffect(() => {
		fetchOrders()
	}, [userId])


	return (
		<OrdersContext.Provider value={{
			fetchOrders,
			userOrders, setUserorders,
			ordersTotal, setOrdersTotal
		}}>
			{props.children}
		</OrdersContext.Provider>
	)
}