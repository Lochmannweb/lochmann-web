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
    md: '768px', 
    lg: '1024px', 
  };

const IMG = styled.div({
  width: '95%',
  borderRadius: '15px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  justifySelf: 'center',
  marginTop: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      height: '140vh',
      },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '9rem',
  padding: '2rem',
  position: 'absolute',
  textAlign: 'center',
  justifySelf: 'center',
  '.pinned': {
    position: 'sticky',
    top: '5rem',
    zIndex: '10',
  },
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      padding: '2rem',
      marginTop: '35rem',
      },
});

const HeaderContent = styled.div({
  marginTop: '9rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
})

const ImageGrid = styled.div({
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '3rem',
    marginTop: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ImageBox = styled.div({
  top: '50%',
  left: '50%',
  transform: 'trasnslate(0%, 0%)',
  width: '350px',
  height: '300px',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '1000px',
    height: '300px',
    marginBottom: '5rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
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
  fontWeight: 'bold',
  padding: '0.3rem',
  borderRadius: '50px',
  textAlign: 'center',
  marginTop: '1rem',
  ':hover': {
    background: 'gray',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '0.5rem',
    fontSize: '20px',
    width: '40%',
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
  marginBottom: '3rem',
  color: 'gray',
  opacity: ({ inView }) => (inView ? '1' : '0'),
  animation: ({ inView }) =>
    inView ? 'fadeUp 1s ease-in-out 0.6s forwards' : 'none',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '23px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
    width: '70%',
    justifySelf: 'center',
  },
  ...fadeUp
});


function LatestProjects() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    {(!isMobile && 
    <IMG>
      <img className="border-borderColor rounded-xl lg:h-full brightness-50" src="/header-work-dbg.jpg" alt="bg" width={2000} /> 
    </IMG>
    )}

    {(isTablet && 
      <IMG>
      <img className="rounded-2xl" src="/recent-header-mbg.png" alt="mobil" /> 
      </IMG>
    )}
    <Container>
        <HeaderContent >
          <Title ref={titleRef} inView={titleInView}>{RecentWorkData.title}</Title>
          <Header ref={headerRef} inView={headerInView}>{RecentWorkData.header}</Header>
          <Content ref={contentRef} inView={contentInView}>{RecentWorkData.content}</Content>
        </HeaderContent>
      <ImageGrid>
        <ImageBox><img class="card pinned" src="/cgc-desktop.png" alt="png" width={1000} /></ImageBox>
      </ImageGrid>
      <ImageGrid>
        <ImageBox><img class="card pinned" src="/foofest-desktop.png" alt="png" width={1000} /></ImageBox>
      </ImageGrid>
      {/* <ImageScroll>
        <ImageBox><img class="card scroll" src="/cgc-desktop.png" alt="png" width={1000} /></ImageBox>
      </ImageScroll> */}
    </Container>
    <Button><a href="/MyWork" >{RecentWorkData.button}</a></Button> 
    </>
  );
}

export default LatestProjects;
