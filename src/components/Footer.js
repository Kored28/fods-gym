import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="60px" bgcolor="#0096FF">
    <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '18px' } }} mt="21px" textAlign="center" pb="20px">Made by Kored Designs</Typography>
  </Box>
);

export default Footer;