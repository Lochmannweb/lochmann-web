"use client"

import { StepByStep } from "@/app/data/MyWorkData"
import React from 'react'
import styled from '@emotion/styled';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
    display: 'grid',
    gap: '2rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
      gap: '4rem',
  },
    [`@media (min-width: ${breakpoints.lg})`]: {
      gap: '2rem',
    },
});

const Box = styled.div({
  backgroundColor: '#000000a3',
  borderColor: 'gray',
  borderRadius: '10px',
  borderWidth: 'thin',
  justifySelf: 'center',
  display: 'grid',
  gap: '2rem',
  padding: '1rem',
  width: '100%',
  alignItems: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    // gridTemplateColumns: '1fr 1fr',
    width: '70%',
    display: 'flex',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // width: '70%',
  },
});

const Title = styled.div({
  fontSize: '20px',
  margin: 'auto',
  textAlign: 'start',
  color: 'white',
  fontFamily: 'emoji',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '25px',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '25px',
      },
});

const Content = styled.div({
    fontSize: '15px',
    textAlign: 'start',
    width: '90%',
    color: 'gray',
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      fontSize: '16px',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '16px',
      },
  });

const Aboutpage = () => {

  return (
    <>
    <Container>
        <Box>
          <img src="/chat.svg" alt="" width={60}/>
          <div>
            <Title>{StepByStep.contact.title}</Title>
            <Content>{StepByStep.contact.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/contract.svg" alt="" width={60} />
          <div>
            <Title>{StepByStep.tilbudKontrakt.title}</Title>
            <Content>{StepByStep.tilbudKontrakt.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/blueprint.svg" alt="" width={60} />
          <div>
            <Title>{StepByStep.planlægning.title}</Title>
            <Content>{StepByStep.planlægning.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/file.svg" alt="" width={60} />
          <div>
            <Title>{StepByStep.preview.title}</Title>
            <Content>{StepByStep.preview.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/coding.svg" alt="" width={60} /> 
          <div>
            <Title>{StepByStep.develop.title}</Title>
            <Content>{StepByStep.develop.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/checklist.svg" alt="" width={60} />
          <div>
              <Title>{StepByStep.test.title}</Title>
              <Content>{StepByStep.test.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/launch.svg" alt="" width={60} /> 
          <div>
            <Title>{StepByStep.lancing.title}</Title>
            <Content>{StepByStep.lancing.content}</Content>
          </div>
        </Box>

        <Box> 
          <img src="/maintenance.svg" alt="" width={60} />
          <div>
              <Title>{StepByStep.maintenance.title}</Title>
              <Content>{StepByStep.maintenance.content}</Content>
          </div>
        </Box>
    </Container>  
    </>
  )
}

export default Aboutpage