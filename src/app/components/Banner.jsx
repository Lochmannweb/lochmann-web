'use client';

import React from 'react';
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  gap: '0rem',
  margin: 'auto',
  textAlign: 'center',
  lineHeight: '2rem',
  // marginTop: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '1rem',
    display: 'flex',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    padding: '2rem',
    fontSize: '20px',
   },
});

function App() {

  return (
    <>
    <Container>
      <p>Built From Scratch</p>
      <p>Redesign</p>
      <p>Branding</p>
      <p>Online Shop</p>
    </Container>
    </>
  );
}

export default App;
