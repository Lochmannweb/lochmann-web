"use client"

import React from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';
import styled from '@emotion/styled';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
    padding: '1rem',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4rem',
    marginTop: '0rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      width: '96%',
      justifySelf: 'center',
    },
  });

const Title = styled.div({
    fontSize: '15px',
  });

const CustomerInformation = () => {

  return (
    <>
      <Container> 
        <div>
          <Title>{CustomerInformationsData.contact.title}</Title>
          <Title>{CustomerInformationsData.contact.content}</Title>
        </div>
  
        <div>
          <Title>{CustomerInformationsData.about.title}</Title>
        </div>
      </Container>
    </>
  );
}

export default CustomerInformation;
