
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { Link, useLocation, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Skeleton } from '@mui/material';


function ProductSingle(props) {
	const { slug } = useParams();
	const location = useLocation();

	const [products, setProducts] = useState(null)
	const [loader, setLoader] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState([])


	const fetchData = () => {
		fetch("http://localhost:5000/api/items/" + slug)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const myData = data
				setProducts(data)
				setFilter(myData)
				setLoader(false)
			})
			.catch((error) => {
				setError(error)
			})
	}

	const element = products?.data[0]

	const sale = products?.data[0].sale


	useEffect(() => {
		fetchData()
	}, [])


	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={2}
			columns={16}
		>
			{/* {loader && <div className="loader">Loading...</div>} */}
			{error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
			<Grid item xs={6} style={{ display: 'flex', justifyContent: 'end' }}>

				{element ?
					(
						<img src={element.picture} alt={element.itemName} width="365px" />
					) : (
						<Skeleton
							variant="rectangular"
							animation="wave"
							width={365}
							height={487} />
					)
				}

			</Grid>
			<Grid item xs={6} style={{ display: 'flex', justifyContent: 'start' }}>
				{element ? (
					<Box>
						<Grid>
							<Typography variant="headline" component="h1">
								{element.itemName}
							</Typography>
						</Grid>
						<Grid>
							<Typography variant="paragraph" component="p">
								{element.shortDesc}
							</Typography>
						</Grid>
						<Grid>
							<Typography variant="paragraph" component="p">

								{sale === "0" ?
									(<div>€{element.price}</div>)
									:
									(<div>€{element.sale} €{element.price}</div>)
								}


							</Typography>
						</Grid>
					</Box>

				) : (
					<Box sx={{ width: '100%' }}>
						<Skeleton />
						<Skeleton animation="wave" />
						<Skeleton animation={false} />
					</Box>
				)



				}
			</Grid>
		</Grid>
	);
}

export default ProductSingle
