import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios';
import { Card, CardContent, Typography, CardMedia, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const ProductDetails = () => {

  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const params = useParams();
  useEffect(() =>{
    getProductDetails();
  },[])

  const getProductDetails = async () => {
    await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`).then((result) => {
      if(result?.data){
        setProduct(result.data);
        setLoader(false);
      }
    }).catch(() =>{

    })
  }
  if(loader){
    return (
      <Box sx={{ display: 'flex'}} className="loader-box">
            <CircularProgress />
        </Box>
    )
  }
  return (
    <div className='main-info'>  
        <Card sx={{ display: 'flex'  }}>
      <CardMedia
        component="img"
        sx={{height: 300 }}
        image = {product?.images && (
          product?.images[2]
          )}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className="details-box">
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className="details-title">
          {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" className="details-desc">
          {product.description}
          </Typography>
          <Typography variant="subtitle1" color="red" component="div" className="details-price">
          ${product.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
        </Box>
      </Box>
    </Card>
    </div>
  )
}

export default ProductDetails