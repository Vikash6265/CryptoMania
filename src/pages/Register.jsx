import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {user,message,isLoading,isError} = useSelector((state)=>state.auth);

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  });

  const {name,email,password,password2} = formData;

  // 1. create state and provide name of formdata
  // 2. create another function to handle changes in setState / state
  // 3. create handlesubmit 

  const handleChange = (e) =>{
    // console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(registerUser(formData));
    // console.log(formData);
  };

  useEffect(()=>{
    if(user){
      navigate("/");
    }

    if(isError || message)
    {
      toast.error(message);
    }
  },[user,message,isError]);

  if(isLoading)
  {
    return(
      <Container sx={{padding:"70px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  }

  return (
    <Card sx={{border:'1px solid gray'}}>
    <CardContent>
        <Typography variant='h5' align='center' sx={{paddingBlock:"15px"}}>Register Here</Typography>
        <form onSubmit={handleSubmit}>
            <TextField variant='outlined' label='Enter Name...' name='name' onChange={handleChange} sx={{margin:"6px 0px"}} fullWidth/>
            <TextField variant='outlined' label='Enter Email...' name='email' onChange={handleChange} sx={{margin:"6px 0px"}} fullWidth/>
            <TextField variant='outlined' label='Enter Password...' name='password' onChange={handleChange} sx={{margin:"6px 0px"}} fullWidth/>
            <TextField variant='outlined' label='Enter Confirm Password...' name='password2' onChange={handleChange} sx={{margin:"6px 0px"}} fullWidth/>
            <Button variant='contained' color='success' type='submit' sx={{margin:"8px 0px"}} fullWidth>Save</Button>
        </form>
    </CardContent>
   </Card>
  )
}

export default Register;
