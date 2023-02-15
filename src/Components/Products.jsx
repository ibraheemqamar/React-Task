import React, { useEffect } from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import { Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';




const Products = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getProducts();
    }, [])
    
    const getProducts = async () => {
    await axios.get("https://api.escuelajs.co/api/v1/products").then((results) => {
        if(results?.data){
            setProducts(results.data);
            setLoader(false);
        }
    }).catch(() =>{

    })
    }
    if (loader){
        return(
            <Box sx={{ display: 'flex'}} className="loader-box">
            <CircularProgress />
        </Box>
        )
    }
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2}} >
        {products.map((prod,i) => { 
            return(
                <Grid item sm={6} xs={12} md={4} className="main-card" key={i}>
                    <Link to= {`/ProductDetails/${prod.id}`}>
                    <Card >
                        <CardMedia className="product-img"
                        component="img"
                            sx={{ height: 200 }}
                            image={prod.images[2]}
                        />
                        <CardContent className="card-content">
                            <Typography gutterBottom variant="h5" component="div" className='product-title'>
                             {prod.title}
                            </Typography>
                            <Typography variant="body2" color="red" className="product-price">
                            ${prod.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontSize="10" className="product-desc">
                            {prod.description}
                             </Typography>
                        </CardContent>
                    </Card>
                    </Link>

                </Grid>

            )

        })}
  </Grid>
  )
}

export default Products