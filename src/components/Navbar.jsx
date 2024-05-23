import { AppBar, Badge, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../features/auth/authSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

  const {user} = useSelector((state)=>state.auth);
  const {cartItems} = useSelector((state)=>state.cart);

  const dispatch = useDispatch();

  const handlelogOut = () =>{
    dispatch(logOutUser());
  }

  return (
    <AppBar sx={{backgroundColor:'#40679E'}}>
        <Toolbar>
            <Typography variant='h5'flexGrow={1}>
              <Link to={"/"}>CryptoMania</Link>
            </Typography>
        
           {
             !user ? (
              <>
                <Link to={"/LogIn"}>
                  <Button variant='contained' sx={{backgroundColor:'darkcyan',border:'1px solid gold',fontWeight:'600'}}>LogIn</Button>
                </Link>
            
                <Link to={"/Register"}>
                  <Button variant='contained' sx={{backgroundColor:'peru',border:'1px solid gold',margin:"0px 5px",fontWeight:'600'}}>Register</Button>
                </Link>
              </>
            )
            :
            (
              <>
                <Link to={'/cart'}>
                  <Badge badgeContent={cartItems.length} sx={{margin:'0px 15px'}} color='error'>
                    <Button id='cartBtn' variant='contained' sx={{backgroundColor:'#9AC8CD',color:'#35374B',fontWeight:'600'}} endIcon={<ShoppingCartIcon/>}>Cart</Button>
                  </Badge>
                </Link>
                <Button id='logBtn' variant='contained' sx={{backgroundColor:'#B99470',fontWeight:'600',color:'#00224D'}} onClick={handlelogOut}>LogOut</Button>
              </>
            )
           }
            
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;