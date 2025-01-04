"use client"

import React from 'react'
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ContactFormular from '@/app/components/ContactFormular'
import { HomePageContactFormular } from '@/app/data/ContactFormular'

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const IMG = styled.div({
  width: '92%',
  borderRadius: '15px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  justifySelf: 'center',
  backgroundImage: `url('/header-dbg.jpg')`,
  backgroundSize: 'cover',
  marginTop: '4rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '6rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      height: '70vh',
      marginTop: '6rem',
      },
});

const Container = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    paddingTop: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      // marginTop: '208rem',
      width: '80%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      // marginTop: '-36rem',
      marginBottom: '6rem',
    },
  });
  
const Title = styled.div({
  marginBottom: '1rem',
  fontSize: '13px',
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    textAlign: 'start',
    fontSize: '18px',
  },
});

const ContentContainer = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      gap: '10rem',
      marginTop: '4rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      gap: '0rem',
    },
  });

const Content = styled.div({
  fontSize: '25px',
  lineHeight: '1rem',
  fontFamily: 'fantasy',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'start',
    fontSize: '40px',
    lineHeight: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '48px',
  },
});

const SubContent = styled.div({
  fontSize: '20px',
  marginBottom: '1rem',
  color: 'gray',
  fontFamily: 'emoji',
  // lineHeight: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'start',
    fontSize: '25px',
    lineHeight: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '22px',
  },
});

function ContactForm() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    <IMG>
    <Container>
        <Title>{HomePageContactFormular.title}</Title>
        <ContentContainer>
          <div>
            <Content>{HomePageContactFormular.header}</Content>
            <SubContent>{HomePageContactFormular.subheader}</SubContent>
          </div>
          <ContactFormular />
        </ContentContainer>
    </Container>
    </IMG>
    </>
  )
}

export default ContactForm