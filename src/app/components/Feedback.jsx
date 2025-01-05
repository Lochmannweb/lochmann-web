import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import "@fontsource/keania-one";

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const IMG = styled.div({
  width: '92%',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('/klipper-bg.jpg')`,
  justifySelf: 'center',
  backgroundSize: 'cover',
  marginTop: '5rem',
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
  justifySelf: 'center',
  textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '1rem',
  },
});

const Title = styled.div(({ isVisible }) => ({
  fontSize: '13px',
  textAlign: 'center',
  borderRadius: '0px',
  marginTop: '0.5rem',
  fontFamily: 'emoji',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    marginTop: '0rem',
  },
}));

const Header = styled.div(({ isVisible }) => ({
  fontSize: '30px',
  textAlign: 'center',
  marginBottom: '0.5rem',
  fontFamily: 'fantasy',
  textTransform: 'uppercase',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
  },
}));

const Subheader = styled.div(({ isVisible }) => ({
  textAlign: 'center',
  fontSize: '15px',
  padding: '2rem',
  marginTop: '-3rem',
  fontFamily: 'emoji',
  color: 'gray',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
}));

const Content = styled.div({
  color: 'white',
  display: 'grid',
  gap: '1.2rem',
  marginTop: '0rem',
  marginBottom: '1rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    width: '95%',
    gap: '1rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '6rem',
  },
});

const FeedBackContainer = styled.div({
  display: 'grid',
  color: 'white',
  textAlign: 'start',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  borderRadius: '15px',
  backgroundImage: `url('/klipper-black-bg.jpg')`,
  width: '90%',
  justifySelf: 'center',
  padding: '2rem',
});

const FeedBackContentTtitle = styled.div({
  textAlign: 'start',  
  fontSize: '20px',
  marginBottom: '-0.5rem',
  fontFamily: 'fantasy',
});

const FeedbackContent = styled.div({
  fontSize: '13px',
  color: 'gray',
  marginTop: '1rem',
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
});

function Feedback() {
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
          <div>
            <Title isVisible={isInView}>{FeedbackData.Title}</Title>
            <Header isVisible={isInView}>{FeedbackData.Header}</Header>
            <Subheader isVisible={isInView}>{FeedbackData.Subheader}</Subheader>
          </div>
          <Content>
            <FeedBackContainer>
              <img src="/nanotechnology.svg" alt="svg" width={60} />
              <FeedBackContentTtitle>{FeedbackData.Tech.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Tech.feedback}</FeedbackContent>
            </FeedBackContainer>

            <FeedBackContainer>
              <img src="/chat_1.svg" alt="svg" width={60} />
              <FeedBackContentTtitle>{FeedbackData.Feedback.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Feedback.feedback}</FeedbackContent>
            </FeedBackContainer>

            <FeedBackContainer>
              <img src="/lowest-price.svg" alt="svg" width={60} />
              <FeedBackContentTtitle>{FeedbackData.Offer.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Offer.feedback}</FeedbackContent>
            </FeedBackContainer>
          </Content>
        </Container>
      </IMG>
    </>
  );
}

export default Feedback;
