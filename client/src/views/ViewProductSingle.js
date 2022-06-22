import React from 'react'
import ProductSingle from '../components/ProductSingle';
import { useParams } from 'react-router-dom'


function ViewProductSingle() {
	const slug = useParams()
	return (
		<div className="ViewSingleProduct">
			<ProductSingle />
		</div>
	);
}
export default ViewProductSingle


