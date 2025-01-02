'use client';

import React from 'react';
import styled from '@emotion/styled';

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const Container = styled.div({
  display: 'flex',
  gap: '1rem',
  margin: 'auto',
  textAlign: 'center',
  lineHeight: '2rem',
  marginTop: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '2rem',
    marginTop: '0rem',
    gap: '3rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    gap: '5rem',
    marginTop: '0rem',
   },
});

const Title = styled.div({
  fontSize: '13px',
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '18px',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
   },
});


function App() {

  return (
    <>
    <Container>
      <Title>BUILT FROM SCRATCH</Title>
      <Title>REDESIGN</Title>
      <Title>BRANDING</Title>
      <Title>ONLINE SHOP</Title>
    </Container>
    </>
  );
}

export default App;
