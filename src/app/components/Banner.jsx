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
    marginTop: '2rem',
   },
});

const Title = styled.div({
  fontSize: '13px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '18px',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '25px',
   },
});


function App() {

  return (
    <>
    <Container>
      <Title>Built From Scratch</Title>
      <Title>Redesign</Title>
      <Title>Branding</Title>
      <Title>Online Shop</Title>
    </Container>
    </>
  );
}

export default App;
