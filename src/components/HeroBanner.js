import React from 'react'
import {Box, Button,  Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/hero-1.jpg'


const HeroBanner = () => {
  return (
    <Box
    sx={{ mt: {lg: '212px', xs: '70px'}, 
        ml: {sm: '50px'}
    }}
    position='relative' p='20px'
    >
        <Typography color='#0096FF'
        fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mt='20px' mb='10px'
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={3}
        >
            check out the most effective exercises
        </Typography>
        <Button variant='contained' href='#exercises'
        sx={{padding: '10px'}}
        >
            Explore Exercise
        </Button>
        <Typography
        fontWeight={600}
        color='#0096FF'
        fontSize='200px'
        mt='25px'
        sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}
        }}
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner