import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from './context/ProductsContext'

import { AuthContextProvider } from "./context/authContext";
import { OrdersContextProvider } from "./context/ordersContext";

import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch'

import BottomNavigation from './components/BottomNavigation';

import ViewHome from './views/ViewHome';
import ViewProductSingle from './views/ViewProductSingle'
import ViewRegisterLogin from './views/ViewRegisterLogin'
import ViewMyAccount from './views/ViewMyAccount'
import ViewMyAccountEdit from './views/ViewMyAccountEdit'
import ViewMyOrders from './views/ViewMyOrders'
import ViewProductAdd from './views/ViewProductAdd'
import ViewMyLikes from './views/ViewMyLikes'




function App() {
	return (
		<div className="Home" >
			<AuthContextProvider>
				<ProductsContextProvider>
					<OrdersContextProvider>
						<TopBar />
						<SearchBar />
						<MainMenu />
						<Routes>
							<Route path="/" element={<ViewHome />} />
							<Route path="/product/:slug/" element={<ViewProductSingle />} />
							<Route path="/access/" element={<ViewRegisterLogin />} />
							<Route path="/my-account/" element={<ViewMyAccount />} />
							<Route path="/my-account/edit" element={<ViewMyAccountEdit />} />
							<Route path="/my-orders" element={<ViewMyOrders />} />
							<Route path="/my-likes" element={<ViewMyLikes />} />
							<Route path="/add-product" element={<ViewProductAdd />} />
							<Route path="*" element={<NoMatch />} />


						</Routes>
						<Footer />
						<BottomNavigation />
					</OrdersContextProvider>
				</ProductsContextProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
