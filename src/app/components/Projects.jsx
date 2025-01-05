"use client";

import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";
import { useInView } from 'react-intersection-observer';

const breakpoints = {
  sm: '699px',
  md: '700px',
  lg: '1024px',
};

const IMG = styled.div({
  width: '92%',
  marginTop: '5rem',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('wave-red.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '8rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '97%',
    marginTop: '10rem',
  },
});

const Container = styled.div({
  display: 'grid',
  textAlign: 'center',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '-2rem',
    padding: '2rem',
  },
});

const HeaderContent = styled.div({
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    width: '90%',
  },
});

const Title = styled.div(({ isVisible }) => ({
  fontSize: '13px',
  marginBottom: '0rem',
  fontFamily: 'emoji',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '1rem',
  },
}));

const Header = styled.div(({ isVisible }) => ({
  fontSize: '30px',
  borderRadius: '0px',
  marginBottom: '-0.5rem',
  fontFamily: 'fantasy',
  textTransform: 'uppercase',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '0px 100px',
    textAlign: 'center',
    borderColor: '#a100ff',
    fontSize: '50px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
  },
}));

const Content = styled.div(({ isVisible }) => ({
  fontSize: '13px',
  borderRadius: '0px',
  marginBottom: '1rem',
  fontFamily: 'emoji',
  color: 'gray',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
    width: '70%',
    justifySelf: 'center',
  },
}));

const ImageGrid = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '3rem',
    marginBottom: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    gap: '1rem',
  },
});

const ImageBox = styled.div({
  transform: 'translate(0%, 0%)',
  width: '100%',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
    width: '50%',
  },
});

const Button = styled.div({
  backgroundColor: 'white',
  fontSize: '15px',
  color: 'black',
  margin: 'auto',
  width: '40%',
  borderRadius: '50px',
  textAlign: 'center',
  marginTop: '1rem',
  textTransform: 'uppercase',
  fontFamily: 'emoji',
  ':hover': {
    background: 'black',
    borderColor: 'white',
    borderWidth: 'thin',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '25%',
    marginTop: '2rem',
    padding: '0.3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    borderRadius: '25px',
    marginTop: '2rem',
  },
});

function LatestProjects() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <IMG ref={sectionRef}>
        <Container>
          <HeaderContent>
            <Title isVisible={isInView}>{RecentWorkData.title}</Title>
            <Header isVisible={isInView}>{RecentWorkData.header}</Header>
            <Content isVisible={isInView}>{RecentWorkData.content}</Content>
          </HeaderContent>
          <ImageGrid>
            <ImageBox>
              <img src="/cgc-desktop.png" alt="png" />
            </ImageBox>
            <ImageBox>
              <img src="/foofest-desktop.png" alt="png" />
            </ImageBox>
          </ImageGrid>
        </Container>
      </IMG>
      <Button>
        <a href="/MyWork">{RecentWorkData.button}</a>
      </Button>
    </>
  );
}

export default LatestProjects;
