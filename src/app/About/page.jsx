"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import UxUiServices from '../components/UxUiServices';
import CodeServices from '../components/CodeServices';

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const IMG = styled.div({
  width: '95%',
  borderRadius: '10px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  backgroundImage: `url('/header-work-dbg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      // height: '70vh',
      },
});

const Container = styled.div({
  padding: '2rem',
  top: '4rem',
  // position: 'absolute',
  marginBottom: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    // marginTop: '-114rem',
    marginBottom: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // marginTop: '5rem',
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

  return (
    <>
    <IMG>
      <Container>
          <Title>MY JOURNEY</Title>
          <MyStory />
          <UxUiServices />
          <CodeServices />
      </Container>
    </IMG>
    </>
  )
}

export default Aboutpage