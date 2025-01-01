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
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // marginTop: '0rem',
    marginBottom: '10rem',
    // width: '90%',
    gap: '20rem',
  },
});

const Title = styled.div({
  fontSize: '30px',
  margin: 'auto',
  display: 'contents',
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
  color: 'gray',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignItems: 'center',
    width: '54%',
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
