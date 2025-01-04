"use client"

// import { AboutData } from "@/app/data/AboutData"
// import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { UXUIData } from '@/app/data/UXUIData'
import Image from 'next/image';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  margin: 'auto',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'start',
    gap: '10rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '0rem',
    marginBottom: '10rem',
    paddingLeft: '2.5rem',
    gap: '25.5rem',
  },
});

const Title = styled.div({
  fontSize: '30px',
  margin: 'auto',
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
    fontSize: '20px',
    // width: '76%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '40%',
  },
});


const MyStory = () => {

  return (
    <>
    <Container>
      <Title>{UXUIData.Kode.title}</Title>
      <Content>
        {UXUIData.Kode.content} <br /> <br />
        {UXUIData.Kode.content2} 
      </Content>
    </Container>
    </>
  )
}

export default MyStory
