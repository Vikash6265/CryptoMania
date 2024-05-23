import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logInUser } from '../features/auth/authSlice';

const LogIn = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {user,message,isLoading,isError} = useSelector((state)=>state.auth);

  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const {email,password} = formData;

  const handChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(logInUser(formData));
    // console.log(formData);
  };

  useEffect(()=>{
    if(user)
    {
      navigate("/");
    }

    if(isError || message)
    {
      toast.error(message);
    }
  },[user,isError,message]);

  if(isLoading)
  {
    return(
      <Container sx={{padding : "70px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  };

  return (
   <Card sx={{border:"1px solid gray",width:'700px',borderRadius:'13px'}}>
    <CardContent>
      <Typography variant='h5' align='center' sx={{paddingBlock:"15px"}}>LogIn Here</Typography>
      <form onSubmit={handleSubmit}>
        <TextField variant='outlined' label="Enter Email..." name='email' onChange={handChange} sx={{margin:"7px 0px"}} fullWidth/>
        <TextField variant='outlined' label="Password..." name='password' onChange={handChange} sx={{margin:"7px 0px"}} fullWidth/>
        <Button variant='contained' fullWidth color='success' type='submit' onChange={handChange} sx={{margin:"9px 0px",borderRadius:'5px'}}>Save</Button>
      </form>
    </CardContent>
   </Card>

  )
}

export default LogIn;
