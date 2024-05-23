import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Cart = () => {

    const {cartItems} = useSelector((state)=>state.cart);

    const total = cartItems.reduce((p,c)=>{    // reduce funct. me dependency 0 lakana pdta he
        return p + c.market_data.current_price.usd;
    },0);


  return (
    <Container sx={{padding:'20px 0px'}}>
        <Typography variant='h5'  sx={{paddingBlock:'20px',color:'navy',fontWeight:'600'}} align='center'>Your Cart Items {<ArrowRightAltIcon sx={{fontSize:'20px'}}/>}</Typography>

        <Grid container spacing={8}>
            <Grid item sm={12} md={8}>
              {
                cartItems.map((coin) => {
                    return <CartItem key={coin.id} coin={coin}/>
                })
              }
            </Grid>

            <Grid item sm={12} md={4}>

            <Card sx={{margin:'10px 0px'}}>
              <CardContent>
                <Typography variant='h5' sx={{fontWeight:'600'}}>Your Total : </Typography>
                <Typography variant='h4' sx={{padding:'15px 0px'}} gutterBottom> ${total.toFixed(2)} </Typography>
                <Button variant='contained' color='info'>Pay Now</Button>
              </CardContent>
            </Card>

            </Grid>
        </Grid>

    </Container>
  )
}

export default Cart;
