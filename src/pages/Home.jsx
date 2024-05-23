import { Container, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchall } from '../features/coin/coinSlice'
import CardData from '../components/CardData'


const Home = () => {

  const {coins} = useSelector((state)=>state.coins);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {user,isLoading,isError} = useSelector((state)=>state.auth);

  useEffect(()=>{
   if(!user)
    {
     navigate("/LogIn");
    }

    dispatch(fetchall());

  },[user]);

  if(isLoading || coins.length === 0 || !coins)
  {
    return(
      <Container sx={{padding:"70px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  }

  if(isError)
  {
    return(
      <Container sx={{padding:'80px 0px'}}>
        <Typography variant='h4' align='center'>Something Went Wrong!</Typography>
      </Container>
    )
  }


  return (
    <>
      <Typography className='main' variant='h4' align='center' sx={{color:'#EEEEEE'}}>Trending Crypto Coin</Typography>
       
      <Grid container spacing={3} sx={{marginTop:'20px'}}>
        {
          coins.map((coin) => <CardData key={coin.item.coin_id} coin={coin.item}/>)
        }
      </Grid>

    </>
  )
}

export default Home;
