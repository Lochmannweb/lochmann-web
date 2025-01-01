"use client"

import React from 'react'
import Header from './components/Header'
import Tech from './components/Tech'
import styled from '@emotion/styled';
import Feedback from '@/app/components/Feedback'
import Projects from '@/app/components/Projects'
import ContactForm from '@/app/components/ContactForm'
import Banner from '@/app/components/Banner'

const Container = styled.div({
  display: 'grid',
  paddingBottom: '50px',
  gap: '0px',
});

const Page = () => {

  return (
    <Container> 
      <Header/>
      {/* <Banner /> */}
      <Projects/>
      <Tech/>
      <Feedback/>
      <ContactForm />
    </Container> 
  )
}

export default Page