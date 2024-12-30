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
  width: '95%',
  borderRadius: '15px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  justifySelf: 'center',
  marginTop: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      height: '75vh',
      },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '9rem',
  padding: '2rem',
  position: 'absolute',
  textAlign: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      padding: '2rem',
      marginTop: '41rem',
      },
});

const HeaderContent = styled.div({
  marginTop: '9rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
})

const Title = styled.div({
  fontSize: '13px',
  marginBottom: '0rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
    marginTop: '1rem',
  },
});

const Header = styled.div({
  fontSize: '30px',
  borderRadius: '0px',
  marginBottom: '-0.5rem',
  fontFamily: 'emoji',
  textTransform: 'uppercase',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '0px 100px',
    textAlign: 'center',
    borderColor: '#A100FF',
    fontSize: '50px',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
  },
});

const Content = styled.div({
  fontSize: '13px',
  borderRadius: '0px',
  marginBottom: '3rem',
  color: 'gray',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '23px',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '70%',
    justifySelf: 'center',
  },
});

const ImageGrid = styled.div({
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const Button = styled.div({
  backgroundColor: 'white',
  fontSize: '15px',
  color: 'black',
  margin: 'auto',
  width: '30%',
  fontWeight: 'bold',
  padding: '0.3rem',
  borderRadius: '50px',
  textAlign: 'center',
  marginTop: '1rem',
  ':hover': {
    background: 'gray',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '0.5rem',
    fontSize: '20px',
    width: '40%',
    marginTop: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    padding: '0.5rem',
    borderRadius: '25px',
    marginTop: '2rem',
  },
});


function LatestProjects() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {(!isMobile && 
    <IMG>
      <img className="border-borderColor rounded-xl lg:h-full brightness-50" src="/header-work-dbg.jpg" alt="bg" width={2000} /> 
    </IMG>
    )}

    {(isTablet && 
      <IMG>
      <img className="rounded-2xl" src="/recent-header-mbg.png" alt="mobil" /> 
      </IMG>
    )}
    <Container>
      <HeaderContent>
        <Title>{RecentWorkData.title}</Title>
        <Header>{RecentWorkData.header}</Header>
        <Content>{RecentWorkData.content}</Content>
      </HeaderContent>
      <ImageGrid>
        <img src="/cgc-desktop.png" alt="png" width={1000} />
      </ImageGrid>
    </Container>
    <Button><a href="/MyWork" >{RecentWorkData.button}</a></Button> 
    </>
  );
}

export default LatestProjects;
