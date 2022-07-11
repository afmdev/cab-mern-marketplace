import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from './context/ProductsContext'
import { AuthContextProvider } from "./context/authContext";
import { OrdersContextProvider } from "./context/ordersContext";

import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import MainMenu from './components/MainMenu';

import BottomNavigation from './components/BottomNavigation';

import ViewHome from './views/ViewHome';
import ViewProductSingle from './views/ViewProductSingle'
import ViewRegisterLogin from './views/ViewRegisterLogin'
import ViewMyAccount from './views/ViewMyAccount'
import ViewMyAccountEdit from './views/ViewMyAccountEdit'
import ViewMyOrders from './views/ViewMyOrders'




function App() {
	return (
		<div className="Home">
			<AuthContextProvider>
				<ProductsContextProvider>
					<OrdersContextProvider>
						<TopBar />
						<SearchBar />
						<MainMenu />
						<BottomNavigation />

						<Routes>
							<Route path="/" element={<ViewHome />} />
							<Route path="/product/:slug/" element={<ViewProductSingle />} />
							<Route path="/access/" element={<ViewRegisterLogin />} />
							<Route path="/my-account/" element={<ViewMyAccount />} />
							<Route path="/my-account/edit" element={<ViewMyAccountEdit />} />
							<Route path="/my-orders" element={<ViewMyOrders />} />
							{/* <Route path="no-logged" element={<ViewNoLogged />} />
					<Route path="*" element={<NoMatch />} /> */}

						</Routes>
						<BottomNavigation />
					</OrdersContextProvider>
				</ProductsContextProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
