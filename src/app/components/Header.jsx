import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import "@fontsource/keania-one";

const breakpoints = {
  sm: '699px',
  md: '700px', 
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
  width: '100%',
  // borderRadius: '10px',
  // borderColor: '#1c1c1c',
  // borderWidth: 'thin',
  backgroundImage: `url('/test.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  justifySelf: 'center',
  // marginTop: '4rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    // width: '95%',
    // backgroundSize: 'contain',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    // width: '95%',
    // height: '70vh',
    // marginTop: '6rem',
    },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '2rem',
  justifySelf: 'center',
  paddingTop: '10rem',
  marginBottom: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifySelf: 'center',
    textAlign: 'center',
    paddingTop: '10rem',
    marginBottom: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '3rem',
    marginBottom: '5rem',
  },
});

const HeaderTitle = styled.div({
  fontSize: '35px',
  textAlign: 'center',
  marginBottom: '0.5rem',
  lineHeight: '2rem',
  fontFamily: 'Fantasy',
  // Animation
  opacity: '0',
  animation: 'fadeUp 1s ease-in-out forwards',
  ...fadeUp,

  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
    lineHeight: '5.5rem',
    marginTop: '-2rem',
    fontFamily: 'Fantasy',
  },

  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '100px',
    lineHeight: '3rem',
    marginTop: '2rem',
    fontFamily: 'Fantasy',
  },
});


const Subheader = styled.div({
  fontSize: '35px',
  textAlign: 'center',
  marginBottom: '0.5rem',
  lineHeight: '2rem',
  fontFamily: 'Fantasy',

  // Animation
  opacity: '0', 
  animation: 'fadeUp 1s ease-in-out forwards',
  animationDelay: '1s',
  ...fadeUp,

  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
    lineHeight: '5.5rem',
    marginTop: '-2rem',
  },

  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '100px',
    lineHeight: '3rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  }
});


const ContentContainer = styled.div({
  display: 'grid',
  gap: '1rem', 
  lineHeight: '0rem',
  // [`@media (min-width: ${breakpoints.lg})`]: {
  //   marginBotom: '5rem',
  // },
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
    font-size: 20px;
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
    font-size: 20px;
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
    font-size: 20px;
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
  fontSize: '13px',
  textAlign: 'center',
  marginTop: '8rem',
  marginBottom: '2rem',
  background: 'white',
  borderRadius: '25px',
  justifySelf: 'center',
  width: '40%',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '35%',
    marginTop: '5rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      marginTop: '6rem',
      },
});

export default function Header() {

  return (
    <>
    <IMG>
      <Container>
          <HeaderTitle>{ForsideData.subheader}</HeaderTitle>
          <Subheader>{ForsideData.subheader2}</Subheader>
          <ContentContainer>
            <Content1>{ForsideData.content}</Content1>
            <Content2>{ForsideData.content2}</Content2>
            <Content3>{ForsideData.content3}</Content3>
          </ContentContainer>
          <Button><a  href="/Contact">GET IN TOUCH</a></Button>
      </Container>
    </IMG>
    </>
  );
}
