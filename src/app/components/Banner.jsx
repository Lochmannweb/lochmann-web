'use client';

import React from 'react';
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'flex',
  gap: '1rem',
  margin: 'auto',
  textAlign: 'center',
  lineHeight: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '2rem',
    gap: '5rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '2rem',
   },
});

const Title = styled.div({
  fontSize: '13px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '25px',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '18px',
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
