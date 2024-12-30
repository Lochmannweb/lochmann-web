import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

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
  [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '0.5rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifySelf: 'center',
    textAlign: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const HeaderTitle = styled.div({
  fontSize: '30px',
  textAlign: 'center',
  marginBottom: '1rem',
  lineHeight: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
    lineHeight: '4rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '100px',
    lineHeight: '5.5rem',
    },
});

const ContentContainer = styled.div({
  display: 'grid',
  gap: '1rem', 
  lineHeight: '0rem',
});

const Content = styled.div({
  fontSize: '12px',
  textAlign: 'center',
  color: 'gray',
  [`@media (min-width: ${breakpoints.md})`]: {
    margin: 'auto',
    textAlign: 'center',
    width: '90%',
    fontSize: '20px',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      margin: 'auto',
      textAlign: 'center',
      width: '100%',
      fontSize: '20px',
      lineHeight: '0.5rem',
      },
});

// const HighlightedText = styled.span({ 
//   backgroundImage: 'linear-gradient(90deg, #fff, #A100FF)',
//   WebkitBackgroundClip: 'text',
//   color: 'transparent',
//   backgroundClip: 'text',
// });

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // const highlightWords = ["elevate", "your", "website"]; 
  // const subheaderText = ForsideData.subheader.split(" ").map((word, index) => {
  //   const cleanWord = word.replace(/[.,!?]/g, ""); 
  //   return highlightWords.includes(cleanWord) ? (
  //     <HighlightedText key={index}>{word}</HighlightedText>
  //   ) : (
  //     word
  //   );
  // }).reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
    {(!isMobile && 
      <img className="border-borderColor brightness-50 border-2 m-auto rounded-xl md:mt-10" src="/bg-header.jpg" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <IMG>
      <img className="rounded-2xl" src="/bg.jpg" alt="mobil" /> 
      </IMG>
    )}
      <Container className="absolute">
          <HeaderTitle>{ForsideData.subheader} <br />{ForsideData.subheader2}</HeaderTitle>
          <ContentContainer>
            <Content>{ForsideData.content}</Content>
            <Content>{ForsideData.content2}</Content>
            <Content>{ForsideData.content3}</Content>
          </ContentContainer>
          <a className="text-black text-center mt-8 bg-white rounded-xl m-auto w-44 hover:bg-gray" href="/Contact">GET IN TOUCH</a>
      </Container>
    </>
  );
}
