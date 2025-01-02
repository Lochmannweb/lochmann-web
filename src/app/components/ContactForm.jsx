import React from 'react'
import styled from '@emotion/styled';
import ContactFormular from '@/app/components/ContactFormular'
import { HomePageContactFormular } from '@/app/data/ContactFormular'

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
  };

const IMG = styled.div({
  width: '95%',
  marginTop: '5rem',
  borderRadius: '10px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  backgroundImage: `url('/header-contact-form-dbg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '8rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      height: '70vh',
      marginTop: '10rem',
      },
});

const Container = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
      padding: '1rem',
      width: '100%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '80%',
    },
  });
  
const Title = styled.div({
  marginBottom: '1rem',
  fontSize: '13px',
  marginTop: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // textAlign: 'start',
    fontSize: '20px',
  },
});

const ContentContainer = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      marginTop: '4rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      gap: '6rem',
    },
  });

const ContentHeader = styled.div({
  fontSize: '25px',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'start',
    fontSize: '40px',
    fontFamily: 'fantasy',
    transform: 'uppercase',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
    lineHeight: '4rem',
  },
});

const Subheader = styled.div({
  fontSize: '20px',
  lineHeight: '1rem',
  marginBottom: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'start',
    fontSize: '20px',
    lineHeight: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '30px',
    lineHeight: '4rem',
  },
});

function ContactForm() {

  return (
    <>
    <IMG>
      <Container>
          <Title>{HomePageContactFormular.title}</Title>
          <ContentContainer>
            <div>
              <ContentHeader>{HomePageContactFormular.header}</ContentHeader>
              <Subheader>{HomePageContactFormular.subheader}</Subheader>
            </div>
            <ContactFormular />
          </ContentContainer>
      </Container>
    </IMG>
    </>
  )
}

export default ContactForm