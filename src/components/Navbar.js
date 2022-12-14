import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{gap: {sm: '100px', xs:'20px'}, mt: {sm: '10px', xs: '10px'}, justifyContent: 'none', px: '20px'}}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{  height:'70px', margin: '0 20px'}} sx={{Width: {lg: '150px', sm: '100px', xs: '50px'}}} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='20px'
        alignItems='flex-end'
      >
        <Link to='/' style={{textDecoration: 'none', color:'#3A1212', borderBottom:'3px solid #0096FF'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color:'#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar