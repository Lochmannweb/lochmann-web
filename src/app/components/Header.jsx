import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Banner from '@/app/components/Banner'

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

// Keyframes for fade-up animation
const fadeUp = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IMG = styled.div({
  width: '90%',
  borderRadius: '10px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      height: '70vh',
      },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '2rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifySelf: 'center',
    textAlign: 'center',
    marginTop: '7rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const HeaderTitle = styled.div({
  fontSize: '35px',
  textAlign: 'center',
  marginBottom: '0.5rem',
  lineHeight: '2rem',
  fontFamily: 'Fantasy',
  textTransform: 'uppercase',

  // Animation
  opacity: '0',
  animation: 'fadeUp 1s ease-in-out forwards',
  ...fadeUp,

  '@media (min-width: 768px)': { // Using breakpoints.md
    fontSize: '80px',
    lineHeight: '5.5rem',
    marginTop: '-2rem',
  },

  '@media (min-width: 1024px)': { // Using breakpoints.lg
    fontSize: '100px',
    lineHeight: '3rem',
    marginTop: '2rem',
  },
});


const Subheader = styled.div`
  font-size: 35px;
  text-align: center;
  margin-bottom: 0.5rem;
  line-height: 2rem;
  font-family: Fantasy;
  text-transform: uppercase;

  // Animation
  opacity: 0; 
  animation: fadeUp 1s ease-in-out forwards;
  animation-delay: 1s;
  ${fadeUp}

  @media (min-width: ${breakpoints.md}) {
    font-size: 80px;
    line-height: 5.5rem;
    margin-top: -2rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 100px;
    line-height: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;


const ContentContainer = styled.div({
  display: 'grid',
  gap: '1rem', 
  lineHeight: '0rem',
});

const Content1 = styled.div`
  font-size: 12px;
  text-align: center;
  color: gray;

  // Animation
  opacity: 0; 
  animation: fadeUp 1.5s ease-in-out forwards;
    animation-delay: 2s;
  ${fadeUp}

  @media (min-width: ${breakpoints.md}) {
    margin: auto;
    line-height: 0.8rem;
    font-size: 25px;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin: auto;
    text-align: center;
    width: 100%;
    font-size: 20px;
    line-height: 0.5rem;
  }
`;

const Content2 = styled.div`
  font-size: 12px;
  text-align: center;
  color: gray;

  // Animation
  opacity: 0; 
  animation: fadeUp 1.5s ease-in-out forwards;
    animation-delay: 4s;
  ${fadeUp}

  @media (min-width: ${breakpoints.md}) {
    margin: auto;
    line-height: 0.8rem;
    font-size: 25px;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin: auto;
    text-align: center;
    width: 100%;
    font-size: 20px;
    line-height: 0.5rem;
  }
`;

const Content3 = styled.div`
  font-size: 12px;
  text-align: center;
  color: white;

  // Animation
  opacity: 0; 
  animation: fadeUp 1.5s ease-in-out forwards;
    animation-delay: 6s;
  ${fadeUp}

  @media (min-width: ${breakpoints.md}) {
    margin: auto;
    line-height: 0.8rem;
    font-size: 25px;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin: auto;
    text-align: center;
    width: 100%;
    font-size: 20px;
    line-height: 0.5rem;
  }
`;

const Button = styled.div({
  color: 'black',
  fontSize: '15px',
  fontFamily: 'Fantasy',
  textAlign: 'center',
  marginTop: '2rem',
  background: 'white',
  borderRadius: '25px',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '20%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      },
});

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {(!isMobile && 
      <IMG>
        <img className="rounded-xl lg:h-full brightness-50" src="/header-dbg.jpg" alt="bg" width={2000} /> 
      </IMG>
    )}

    {(isTablet && 
      <IMG>
        <img className="rounded-xl" src="/test-header.png" alt="mobil" /> 
      </IMG>
    )}
      <Container className="absolute">
          <HeaderTitle>{ForsideData.subheader}</HeaderTitle>
          <Subheader>{ForsideData.subheader2}</Subheader>
          <ContentContainer>
            <Content1>{ForsideData.content}</Content1>
            <Content2>{ForsideData.content2}</Content2>
            <Content3>{ForsideData.content3}</Content3>
          </ContentContainer>
          <Banner />
          <Button>
          <a  href="/Contact">GET IN TOUCH</a>
          </Button>
      </Container>
    </>
  );
}
