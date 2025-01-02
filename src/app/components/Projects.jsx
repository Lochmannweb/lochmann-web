"use client"

import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  backgroundImage: `url('/test.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '8rem', 
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '80%',
      height: '70vh',
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
  marginTop: '1rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    width: '90%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
})

const ImageGrid = styled.div({
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    display: 'flex',
    gap: '1rem',
  },
});

const ImageBox = styled.div({
  transform: 'trasnslate(0%, 0%)',
  width: '90%',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '70%',
  },
});

const ImageScroll = styled.div({
  margin: 'auto',
  position: 'relative',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const Button = styled.div({
  backgroundColor: 'white',
  fontSize: '15px',
  color: 'black',
  margin: 'auto',
  width: '30%',
  // fontWeight: 'bold',
  // padding: '0.3rem',
  borderRadius: '50px',
  textAlign: 'center',
  marginTop: '1rem',
  ':hover': {
    background: 'gray',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    // padding: '0.5rem',
    fontSize: '20px',
    width: '25%',
    marginTop: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    padding: '0.5rem',
    borderRadius: '25px',
    marginTop: '2rem',
  },
});

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

const Title = styled.div({
  fontSize: '13px',
  marginBottom: '0rem',
  opacity: ({ inView }) => (inView ? '1' : '0'),
  animation: ({ inView }) =>
    inView ? 'fadeUp 1s ease-in-out 0.2s forwards' : 'none',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '1rem',
  },
  ...fadeUp
});

const Header = styled.div({
  fontSize: '30px',
  borderRadius: '0px',
  marginBottom: '-0.5rem',
  fontFamily: 'emoji',
  textTransform: 'uppercase',
  opacity: ({ inView }) => (inView ? '1' : '0'),
  animation: ({ inView }) =>
    inView ? 'fadeUp 1s ease-in-out 0.4s forwards' : 'none',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '0px 100px',
    textAlign: 'center',
    borderColor: '#a100ff',
    fontSize: '50px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
  },
  ...fadeUp
});

const Content = styled.div({
  fontSize: '13px',
  borderRadius: '0px',
  marginBottom: '1rem',
  color: 'gray',
  opacity: ({ inView }) => (inView ? '1' : '0'),
  animation: ({ inView }) =>
    inView ? 'fadeUp 1s ease-in-out 0.6s forwards' : 'none',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
    width: '70%',
    justifySelf: 'center',
  },
  ...fadeUp
});


function LatestProjects() {

  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true });

  // gsap.registerPlugin(ScrollTrigger);

  // document.addEventListener("DOMContentLoaded", function () {
  //   const button = document.querySelector("Button");
  //   const lastCard = document.querySelector("ImageScroll");
  //   const pinnedSection = gsap.utils.toArray("ImageGrid");

  //   pinnedSection.forEach((section, index, sections) => {
  //     let img = section.querySelector("ImageBox");
  //     let nextSection = sections[index + 1] || lastCard;
  //     let endScalePoint = `top+=${section.offsetTop - section.offsetTop} top`;

  //     gsap.to(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top top",
  //         end: index === sections.length 
  //         ? `+=${lastCard.offsetHeight / 2}` 
  //         : button.offsetTop - window.innerHeight,
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: 1,
  //       }
  //     });

  //     gsap.fromTo(img, { scale: 1 }, {
  //       scale: 0.5,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top top",
  //         end: endScalePoint,
  //         scrub: 1,
  //       }
  //     });
  //   });
  // });

  return (
    <>
    <IMG>
      <Container>
          <HeaderContent >
            <Title ref={titleRef} inView={titleInView}>{RecentWorkData.title}</Title>
            <Header ref={headerRef} inView={headerInView}>{RecentWorkData.header}</Header>
            <Content ref={contentRef} inView={contentInView}>{RecentWorkData.content}</Content>
          </HeaderContent>
        <ImageGrid>
          <ImageBox><img src="/cgc-desktop.png" alt="png"/></ImageBox>
          <ImageBox><img src="/foofest-desktop.png" alt="png" /></ImageBox>
        </ImageGrid>
      </Container>
      </IMG>
    <Button><a href="/MyWork" >{RecentWorkData.button}</a></Button> 
    </>
  );
}

export default LatestProjects;
