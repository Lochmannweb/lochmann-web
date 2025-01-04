"use client"

// import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { AboutData } from '@/app/data/AboutData'
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  margin: 'auto',
  marginTop: '3rem',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '0rem',
    marginBottom: '10rem',
    gap: '8rem',
  },
});

const Title = styled.div({
  fontSize: '25px',
  // margin: 'auto',
  display: 'contents',
  textTransform: 'uppercase',
  fontFamily: 'Emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
  },
});

const Content = styled.div({
  fontSize: '15px',
  color: '#9b9b9b',
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '80%',
    alignItems: 'center',
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '40%',
  },
});


const MyStory = () => {
  
  return ( 
    <>
    <Container> 
      <Title>{AboutData.title}</Title>
      <Content>
          {AboutData.subheder1} <br /> <br />
          {AboutData.subheder2} <br /> <br />
          {AboutData.subheder3} <br /> <br />
          {AboutData.subheder4}
      </Content>
      </Container>
    </>
  )
}

export default MyStory
