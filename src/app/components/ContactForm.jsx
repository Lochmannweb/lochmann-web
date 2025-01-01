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
  borderColor: 'borderColor',
  borderWidth: 'thin',
  justifySelf: 'center',
  marginTop: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      height: '80vh',
      marginTop: '15rem',
      },
});

const Container = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    marginTop: '153rem',
    position: 'absolute',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '208rem',
      width: '80%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      marginTop: '263rem',
    },
  });
  
const Title = styled.div({
  marginBottom: '1rem',
  fontSize: '13px',
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
    fontSize: '60px',
  },
});

function ContactForm() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {(!isMobile && 
    <IMG>
      <img className="border-borderColor rounded-xl lg:h-full brightness-50" src="/header-contact-form-dbg.jpg" alt="bg" width={2000} /> 
    </IMG>
    )}

    {(isTablet && 
      <IMG>
      <img className="rounded-2xl" src="/work-header-mbg.png" alt="mobil" width={1000} /> 
      </IMG>
    )}

    <Container>
        <Title>{HomePageContactFormular.title}</Title>
        <ContentContainer>
            <Content>{HomePageContactFormular.header} <br /> <span className='text-lg md:text-3xl'>{HomePageContactFormular.subheader}</span></Content>
            <ContactFormular />
        </ContentContainer>
    </Container>
    </>
  )
}

export default ContactForm