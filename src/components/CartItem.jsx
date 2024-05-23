import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from '../features/cart/cartSlice';


const CartItem = ({coin}) => {

  const dispatch = useDispatch();

  const handleRemove = (id)=>{
    dispatch(removeCart(id));
  };

  return (
    <Card sx={{margin:'10px 0px'}}>

      <CardContent>
        <Typography variant='h5' gutterBottom sx={{fontWeight:'600'}}>{coin?.name}</Typography>
        <Typography variant='h6' gutterBottom sx={{fontWeight:'550'}}> ${coin?.market_data.current_price.usd}</Typography>
        <Button variant='contained' fullWidth color='error' sx={{marginTop:'10px',fontWeight:'600'}} size='small' onClick={()=>handleRemove(coin.id)}>Remove</Button>
      </CardContent>

    </Card>
  )
}

export default CartItem;
