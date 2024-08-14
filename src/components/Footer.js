import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made By ❤️ <a href="https://www.linkedin.com/in/omkar-aher/" target="_blank"
        rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Omkar Aher</a> </Typography>    
  </Box>
);

export default Footer;         
