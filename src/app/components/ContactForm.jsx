import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import ContactFormular from '@/app/components/ContactFormular';
import { HomePageContactFormular } from '@/app/data/ContactFormular';

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
  backgroundImage: `url('/header-dbg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '8rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '97%',
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

const Title = styled.div(({ isVisible }) => ({
  fontSize: '13px',
  marginTop: '1rem',
  fontFamily: 'emoji',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
  },
}));

const ContentContainer = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    marginTop: '4rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    gap: '6rem',
  },
});

const ContentHeader = styled.div(({ isVisible }) => ({
  fontSize: '25px',
  fontFamily: 'fantasy',
  textTransform: 'uppercase',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'start',
    fontSize: '40px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '60px',
    lineHeight: '4rem',
  },
}));

const Subheader = styled.div(({ isVisible }) => ({
  fontSize: '15px',
  color: 'gray',
  lineHeight: '1rem',
  marginBottom: '2rem',
  fontFamily: 'emoji',
  opacity: isVisible ? '1' : '0',
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 1s ease, transform 1s ease',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'start',
    fontSize: '20px',
    lineHeight: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '22px',
    lineHeight: '4rem',
  },
}));

function ContactForm() {
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
          <Title isVisible={isInView}>{HomePageContactFormular.title}</Title>
          <ContentContainer>
            <div>
              <ContentHeader isVisible={isInView}>{HomePageContactFormular.header}</ContentHeader>
              <Subheader isVisible={isInView}>{HomePageContactFormular.subheader}</Subheader>
            </div>
            <ContactFormular />
          </ContentContainer>
        </Container>
      </IMG>
    </>
  );
}

export default ContactForm;
