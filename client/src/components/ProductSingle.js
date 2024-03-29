
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Skeleton } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import ReactStars from 'react-stars';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import serverURL from "../config";



function ProductSingle(props) {

	const { handleAddToCart } = useContext(ProductsContext);


	const images = [
		{
			original: 'https://picsum.photos/id/1018/794/794/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
			description: 'Description Picture 1',
		},
		{
			original: 'https://picsum.photos/id/1015/794/794/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
			description: 'Description Picture 2',
		},
		{
			original: 'https://picsum.photos/id/1019/794/794/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			description: 'Description Picture 3',
		},
		{
			original: 'https://picsum.photos/id/1020/794/794/',
			thumbnail: 'https://picsum.photos/id/1020/250/150/',
			description: 'Description Picture 4',
		},

	];


	const { slug } = useParams();
	const [products, setProducts] = useState(null)

	const fetchData = () => {
		fetch(serverURL + "api/items/" + slug)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const myData = data
				setProducts(data)
			})
			.catch((error) => {
				console.log("An error has been detected", error)
			})
	}

	const element = products?.data[0]
	const sale = products?.data[0].sale
	const salePercentage = ((products?.data[0].price * sale) / 100).toFixed(0);

	useEffect(() => {
		fetchData()
	}, [])


	return (

		<Grid container alignItems="stretch"
			justifyContent="center"
			spacing={5}
			columns={12}
			sx={{ pt: '30px' }}
		>
			<Grid item xs={10.5} sm={8} md={5} lg={4} xl={3} style={{ display: 'flex', justifyContent: 'end', position: 'relative' }}>

				{element ?
					(// <img src={element.picture} alt={element.itemName} width="365px" />
						<>
							{sale === 0 ?
								('')
								:
								(<Box sx={{
									position: 'absolute', display: 'inline-block', zIndex: '999', backgroundColor: '#d32f2f', borderRadius: '100px', p: '10px',
									color: '#fff', top: '22px', right: '-18px', height: '25px', width: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
								}}>
									<Typography variant="paragraph" component="p">
										-{salePercentage}%
									</Typography>
								</Box>
								)
							}
							<ImageGallery
								items={images}
								lazyLoad={true}
								showPlayButton={false}
							/>
						</>
					) : (
						<Skeleton
							variant="rectangular"
							animation="wave"
							width={365}
							height={487} />
					)}

			</Grid>
			<Grid item xs={11} sm={9} md={5} lg={4} xl={3.5} style={{ display: 'flex', justifyContent: 'start' }}>
				{element ? (
					<Box>
						<Grid sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', mb: '10px' }}>
							<ReactStars
								count={5}
								size={24}
								value={element.rate}
								edit={false} />
							<Box sx={{ mt: '6px', ml: '10px' }}>

								{element.rate === "undefined" ? "0 " : element.rate}

								/ 5</Box>
						</Grid>
						<Grid>
							<Typography variant="headline" component="h1" sx={{ mb: '20px' }}>
								{element.itemName}
							</Typography>
						</Grid>

						<Grid>
							<Typography variant="paragraph" component="p" sx={{ mb: '20px' }}>
								{element.longDesc}
							</Typography>
						</Grid>
						<Grid>
							<Box>
								{sale === 0 ?
									(<Typography variant="headline" component="h4" sx={{ mr: '10px', fontSize: '25px' }}>
										€{element.price}
									</Typography>)
									:
									(<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
										<Typography variant="headline" component="h4" sx={{ mr: '10px', fontSize: '25px' }}>
											€{element.sale}
										</Typography>
										<Typography variant="paragraph" component="p" sx={{ mr: '10px', textDecoration: 'line-through', color: '#cfcfcf' }}>
											€{element.price}
										</Typography>
									</Box>
									)
								}
							</Box>
						</Grid>
						<Grid>
							<Stack direction="row" spacing={2}>
								<Button variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={() => handleAddToCart(element)} sx={{ mt: '15px', mb: '70px' }}>
									ADD TO CART
								</Button>

							</Stack>
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
			</Grid >
		</Grid >
	);
}

export default ProductSingle
