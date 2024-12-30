"use client"

import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const IMG = styled.div({
  width: '92%',
  borderRadius: '15px',
  borderColor: 'borderColor',
  borderWidth: 'thin',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '10rem',
  padding: '2rem',
  position: 'absolute',
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      padding: '2rem',
      marginTop: '5rem',
      },
      [`@media (min-width: ${breakpoints.lg})`]: {
        margin: 'auto',
        padding: '2rem',
        marginTop: '5rem',
        },
});

const HeaderContent = styled.div({
  alignContent: 'start',
  marginTop: '10rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    // marginTop: '-11rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // marginTop: '-11rem',
  },
})

const Title = styled.div({
  fontSize: '30px',
  fontFamily: '"Keania One", sans-serif',
  borderBottomColor: '#A100FF',
  borderWidth: 'thin',
  textAlign: 'start',
  borderRadius: '0px',
  marginBottom: '1rem',

  // scroll animation text
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '50% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '0px 100px',
    textAlign: 'center',
    borderColor: '#A100FF',
    fontSize: '40px',
  },
});

const ImageGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  justifyContent: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem',
    marginTop: '-2rem',
    width: '45%',
    justifySelf: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // display: 'flex',
    // gap: '1rem',
    // marginBottom: '3rem',
    // marginTop: '-2rem',
  },
});

const Button = styled.div({
  backgroundColor: 'white',
  fontSize: '15px',
  color: 'black',
  margin: 'auto',
  width: '100%',
  padding: '0.3rem',
  borderRadius: '50px',
  textAlign: 'center',
  marginTop: '3rem',
  color: 'white',
  filter: 'drop-shadow(0 0 0.75rem #A100FF)',
  backgroundImage: 'linear-gradient(90deg, black, #A100FF)',
  fontFamily: '"Keania One", sans-serif',
  ':hover': {
    backgroundImage: 'linear-gradient(180deg, black, #A100FF)',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '0.5rem',
    fontSize: '20px',
    width: '40%',
    marginTop: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '28%',
    padding: '0.5rem',
    borderRadius: '15px',
    marginTop: '1rem',
  },
});


function LatestProjects() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {(!isMobile && 
      <img className="border-borderColor brightness-50 border-2 m-auto rounded-xl md:mt-10" src="/bg-header.jpg" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <IMG>
      <img className="rounded-2xl" src="/bg.jpg" alt="mobil" /> 
      </IMG>
    )}
    <Container>
      <HeaderContent>
        <Title>{RecentWorkData.title}</Title>
      </HeaderContent>
      <ImageGrid>
        <img src="/foofest-desktop.png" alt="png" width={500} />
        <img src="/cgc-desktop.png" alt="png" width={500} />
      </ImageGrid>
      <Button><a href="/MyWork">{RecentWorkData.button}</a></Button> 
    </Container>
    </>
  );
}

export default LatestProjects;
