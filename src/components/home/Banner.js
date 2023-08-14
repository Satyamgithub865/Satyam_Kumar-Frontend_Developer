import React from 'react';
import { Box, Typography, Paper, styled } from '@mui/material';
import { imageUrl1, imageUrl2, bgImg } from '../../utils/constant';

const HideImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Banner = () => {

  return (
    <Box style={{ display: 'flex', justifyContent: 'space-around', marginTop: 30 }}>
      <HideImage>
        <img src={imageUrl2} alt="image1" style={{ width: 180 }} />
      </HideImage>
      <Paper sx={{
        backgroundImage: `url(${bgImg})`, backgroundSize: 'cover',
        backgroundPosition: 'center', textAlign: 'center',
        padding: 10, color: '#FFF', fontWeight: 800
      }}>
        <Typography variant="h4" gutterBottom>
          Welcome to SpaceX App
        </Typography>
        <Typography variant="body1">
          your gateway to the cosmos! Embark on a journey beyond our blue planet and explore the universe like never before.
        </Typography>
      </Paper>
      <HideImage>
        <img src={imageUrl1} alt="image2" style={{ width: 130 }} />
      </HideImage>
    </Box>
  );
};

export default Banner;
