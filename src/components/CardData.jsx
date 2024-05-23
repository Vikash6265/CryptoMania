import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const CardData = ({coin}) => {


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className='cardColor' sx={{border:'2px solid grey',borderRadius:'10px',paddingBlock:'10px'}}>
        
        <CardMedia id='cardImg' component="img" sx={{height:'200px',objectFit:'contain',paddingBlock:'15px'}} image={coin?.large}/>

        <CardContent>
            <Typography variant='h5' align='center' sx={{fontWeight:'550',color:'#6C0345'}}>{coin?.name}</Typography>
        </CardContent>

        <CardActions>
           
             <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Link to={`/coin/${coin.id}`}>
                  <Button variant='outlined' style={{fontWeight:'600'}}>Learn More</Button>
                </Link>
                <Link to={`/coin/${coin.id}`}>
                  <Button variant='contained' style={{width:'90px',marginLeft:'10px'}}>$ {Math.floor(coin.data.price_change_percentage_24h.usd)}</Button>
                </Link>
           
             </Box>
           
        </CardActions>

      </Card>
    </Grid>
  )
}

export default CardData;
