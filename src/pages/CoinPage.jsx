import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchSingle } from '../features/coin/coinSlice';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart } from '../features/cart/cartSlice';


const CoinPage = () => {

    const params = useParams();
    const dispatch = useDispatch();

    const {coin,isLoading,isError} = useSelector((state)=>state.coins);

    useEffect(()=>{
        dispatch(fetchSingle(params.id));
    },[]);

    const handleAdd = (cartItem) =>{
      dispatch(addToCart(cartItem));
    }

    if(isLoading || !coin)
    {
       return (
        <Container sx={{padding:'50px 0px'}}>
           <LinearProgress/>
        </Container> 
       );
    }

    if(isError)
    {
        return(
            <Container sx={{padding:'50px 0px'}}>
               <Typography variant='h4'>Something Went Wrong !</Typography>
            </Container>
        );
    }

  return (
    <Container sx={{padding:'0px 0px'}} maxWidth='xl'>
        <Typography variant='h4' align='center' sx={{color:'#DDE6ED',fontWeight:'550'}}>Coin : {coin?.name}</Typography>

        <Card sx={{margin:'20px 0px'}}>
            <CardMedia  image={coin?.image.large} sx={{minHeight:'380px',objectFit:'cover'}}/>

            <CardContent>
              <Typography variant='h5' sx={{margin:'20px 0px',fontWeight:'550',color:'darkorange'}}>Coin Symbol : {coin?.symbol}</Typography>
              <Typography variant='h4' sx={{margin:'15px 0px'}}>Coin Price : ${coin?.market_data.current_price.usd}</Typography>
              <Typography variant='body' sx={{margin:'20px 0px',color:'grey'}}>Coin Description : {coin?.description.en}</Typography>
            </CardContent>

            <CardActions sx={{paddingBottom:'15px'}}>
                <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'start'}}>
                   <Link to={coin?.links.homepage[0]}>
                      <Button variant='contained' sx={{backgroundColor:'#3A98B9',fontWeight:'550'}} endIcon={<LanguageIcon/>}>Visit Official Website</Button>
                    </Link>
                    <Button variant='contained' sx={{backgroundColor:'#78A083',fontWeight:'550',marginLeft:'10px'}} endIcon={<ShoppingCartIcon/>} onClick={()=>handleAdd(coin)}>Add Cart</Button>
                </Box>
            </CardActions>

        </Card>
    </Container>
  )
}

export default CoinPage;
