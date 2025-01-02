import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';
import "@fontsource/keania-one";

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

// Keyframe for fading in from the right
const fadeInFromRight = `
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const IMG = styled.div({
  width: '95%',
  borderRadius: '10px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  backgroundImage: `url('/test.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  marginTop: '5rem',
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
  marginTop: '1rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '-2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const HeaderContent = styled.div({
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '4rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    padding: '4rem',
    width: '60%',
  },
});

const Title = styled.div({
  fontSize: '13px',
  textAlign: 'center',
  borderRadius: '0px',
  marginBottom: '0rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'center',
    borderRadius: '0px 70px',
    borderColor: '#A100FF',
    fontSize: '20px',
  },
});

const Header = styled.div({
  fontSize: '30px',
  textAlign: 'center',
  borderRadius: '0px',
  marginBottom: '-0.5rem',
  fontFamily: 'Emoji',
  textTransform: 'uppercase',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'center',
    borderRadius: '0px 70px',
    borderColor: '#A100FF',
    fontSize: '40px',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
  },
});

const Subheader = styled.div({
  textAlign: 'center',  
  fontSize: '30px',
  color: 'white',
  textTransform: 'uppercase',
  fontFamily: 'fantasy',
  marginTop: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    color: 'white',
    fontFamily: 'Fantasy',
    textAlign: 'start',
    width: '67%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '70px',
    color: 'white',
    fontFamily: 'Fantasy',
    textAlign: 'start',
    marginTop: '0rem',
  },
});

const Content = styled.div({
  display: 'grid',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    padding: '2rem',
  },
});

const Expertise = styled.div({
  display: 'grid',
  gap: '2rem',
  padding: '2rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '1rem',
    display: 'grid',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    padding: '0rem',
  },
});

// Applying fade-in from the right with delay
const ExpertiseContent = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  opacity: 0;
  animation: fadeInRight 1s ease-out forwards; 

  ${fadeInFromRight}

  @media (min-width: ${breakpoints.md}) {
    gap: 1rem;
  }
`;

const ExpertiseContent1 = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  opacity: '0',
  marginLeft: '0rem',
  animation: 'fadeInRight 1s ease-out forwards',
  animationDelay: '1s', 
  ...fadeInFromRight,
  [`@media (min-width: ${breakpoints.md})`]: {
    gap: '1rem',
    marginLeft: '-4rem',
  }
});

const ExpertiseContent2 = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  opacity: '0',
  marginLeft: '0rem',
  animation: 'fadeInRight 1s ease-out forwards',
  animationDelay: '2s', 

  ...fadeInFromRight,

  [`@media (min-width: ${breakpoints.md})`]: {
    marginLeft: '-8rem',
    gap: '1rem',
  }
});

const ExpertiseContent3 = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  opacity: '0',
  marginLeft: '0rem',
  animation: 'fadeInRight 1s ease-out forwards',
  animationDelay: '3s', 

  ...fadeInFromRight,

  [`@media (min-width: ${breakpoints.md})`]: {
    marginLeft: '-13rem',
    gap: '1rem',
  }
});

const ExpertiseContentText = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
  },
});

const Button = styled.div({
  // padding: '0.5rem',
  borderRadius: '20px',
  textAlign: 'center',
  fontSize: '15px',
  width: '30%',
  justifySelf: 'center',
  marginTop: '1rem',
  color: 'black',
  backgroundColor: 'white',
  // fontWeight: 'bold',
  ':hover': {
    background: 'gray',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    margin: 'auto',
    width: '25%',
    marginTop: '2rem',
    width: '25%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    borderRadius: '25px',
    marginTop: '3rem',
    fontSize: '20px',
  },
});

function App() {

    // Using Intersection Observer to trigger the animation when it comes into view
    const [isInView, setIsInView] = useState(false);
    const expertiseRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Start the animation
        }
      }, {
        threshold: 0, // Trigger when the element is 50% in the viewport
      });
  
      if (expertiseRef.current) {
        observer.observe(expertiseRef.current);
      }
  
      return () => {
        if (expertiseRef.current) {
          observer.unobserve(expertiseRef.current);
        }
      };
    }, []);

  return (
    <>
    <IMG>
      <Container>
        <HeaderContent>
          <Title>{TechData.title}</Title>
          <Header>{TechData.header}</Header>
        </HeaderContent>

        <Content>
          <Subheader>
            <span>{TechData.subheader}</span>
          </Subheader>

          <Expertise>
            <ExpertiseContent ref={expertiseRef} className={isInView ? 'in-view' : ''}>
              <img src="/react-icon.svg" alt="svg" width={60} />
              <ExpertiseContentText>{TechData.Kode.title}</ExpertiseContentText>
            </ExpertiseContent>

            <ExpertiseContent1 ref={expertiseRef} className={isInView ? 'in-view' : ''}>
              <img src="/spline.png" alt="png" width={60} />
              <ExpertiseContentText>{TechData.Ani.title}</ExpertiseContentText>
            </ExpertiseContent1>

            <ExpertiseContent2 ref={expertiseRef} className={isInView ? 'in-view' : ''}>
              <img src="js-icon.svg" alt="svg" width={60} />
              <ExpertiseContentText>{TechData.Js.title}</ExpertiseContentText>
            </ExpertiseContent2>

            <ExpertiseContent3 ref={expertiseRef} className={isInView ? 'in-view' : ''}>
              <img src="/tailwind-css.svg" alt="svg" width={65} />
              <ExpertiseContentText>{TechData.TW.title}</ExpertiseContentText>
            </ExpertiseContent3>
          </Expertise>
        </Content>
      </Container>
      </IMG>
      <Button><a href="/About">See More</a></Button>
    </>
  );
}

export default App;
