"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import UxUiServices from '../components/UxUiServices';
import CodeServices from '../components/CodeServices';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const IMG = styled.div({
  width: '90%',
  borderRadius: '10px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  justifySelf: 'center',
  height: '177.5vh',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    // height: '100vh',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      // height: '140vh',
      },
});

const Container = styled.div({
  padding: '2rem',
  top: '4rem',
  position: 'absolute',
  marginBottom: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '-114rem',
    marginBottom: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '5rem',
    marginBottom: '0rem',
  },
})

const Title = styled.div({
  transform: 'uppercase',
  justifySelf: 'center',
  fontFamily: 'Fantasy',
  fontSize: '30px',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
    marginBottom: '5rem',
  },
})

const Aboutpage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('md')); 
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {isMobile && (
        <IMG>
          <img
            className="rounded-xl lg:h-full brightness-50"
            src="/test-journey-mbg.png"
            alt="bg"
            width={2000}
          />
        </IMG>
      )}
      
      {isTablet && (
        <IMG>
          <img
            className="rounded-xl lg:h-full brightness-50"
            src="/journey-mbg.png"
            alt="bg"
            width={2000}
          />
        </IMG>
      )}

      {isDesktop && (
        <IMG>
          <img
            className="rounded-xl lg:h-full brightness-50"
            src="/header-work-dbg.jpg"
            alt="bg"
            width={2000}
          />
        </IMG>
      )}
      <Container>
          <Title>MY JOURNEY</Title>
          <MyStory />
          <UxUiServices />
          <CodeServices />
      </Container>
    </>
  )
}

export default Aboutpage