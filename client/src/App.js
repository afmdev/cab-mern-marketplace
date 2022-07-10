import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from './context/ProductsContext'
import { AuthContextProvider } from "./context/authContext";
import { OrdersContextProvider } from "./context/ordersContext";

import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import MainMenu from './components/MainMenu';
import TopSlider from './components/TopSlider';
import MyAccount from './components/MyAccount';

import ViewHome from './views/ViewHome';
import ViewProductSingle from './views/ViewProductSingle'
import ViewRegisterLogin from './views/ViewRegisterLogin'
import ViewMyAccount from './views/ViewMyAccount'
import ViewMyAccountEdit from './views/ViewMyAccountEdit'




function App() {
	return (
		<div className="Home">
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
							{/* <Route path="no-logged" element={<ViewNoLogged />} />
					<Route path="*" element={<NoMatch />} /> */}

						</Routes>
					</OrdersContextProvider>
				</ProductsContextProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
