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

const Title = styled.div({
  fontSize: '30px',
  margin: 'auto',
  display: 'contents',
  transform: 'uppercase',
  fontFamily: 'Emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
  },
});

const Container = styled.div({
  margin: 'auto',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '0rem',
    marginBottom: '10rem',
    gap: '10rem',
  },
});

const Content = styled.div({
  fontSize: '15px',
  color: 'gray',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '76%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '40%',
  },
});

const ContentSubheder = styled.div({
  color: 'white',
  fontSize: '15px',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
    fontSize: '15px',
  },
});


const MyStory = () => {

  return (
    <>
    <Container>
      <Title>{UXUIData.UXUI.title}</Title>
      <Content>
        {UXUIData.UXUI.content1} <br /> <br />
        {UXUIData.UXUI.content2} <br /> <br />
        {UXUIData.UXUI.content3} <br /> <br />
        {UXUIData.UXUI.content4}
      </Content>
    </Container>
    </>
  )
}

export default MyStory
