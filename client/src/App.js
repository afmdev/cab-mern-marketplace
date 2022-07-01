import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from './context/ProductsContext'

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
			<ProductsContextProvider>
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
			</ProductsContextProvider>
		</div>
	);
}

export default App;
