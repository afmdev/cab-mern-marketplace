import React from 'react';
import ViewHome from './views/ViewHome';
import { ProductsContextProvider } from './context/ProductsContext'

function App() {
	return (
		<div className="Home">
			<ProductsContextProvider>
				<ViewHome />
			</ProductsContextProvider>
		</div>
	);
}

export default App;
