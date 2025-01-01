import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  md: '768px',
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
  width: '92%',
  borderRadius: '15px',
  borderColor: '#6b6b6b',
  borderWidth: 'thin',
  justifySelf: 'center',
  marginTop: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    height: '80vh',
  },
});

const Container = styled.div({
  display: 'grid',
  marginTop: '61rem',
  justifySelf: 'center',
  position: 'absolute',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '97rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '133rem',
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
  fontSize: '15px',
  color: 'gray',
  textTransform: 'uppercase',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '70px',
    color: 'white',
    fontFamily: 'Fantasy',
    textAlign: 'start',
    width: '45%',
  },
});

const Content = styled.div({
  display: 'grid',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
  },
});

const Expertise = styled.div({
  display: 'grid',
  gap: '2rem',
  padding: '2rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '5rem',
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

const ExpertiseContent1 = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  opacity: 0;
  margin-left: -4rem;
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 1s; 

  ${fadeInFromRight}

  @media (min-width: ${breakpoints.md}) {
    gap: 1rem;
  }
`;

const ExpertiseContent2 = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  opacity: 0;
  margin-left: -8rem;
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 2s; 

  ${fadeInFromRight}

  @media (min-width: ${breakpoints.md}) {
    gap: 1rem;
  }
`;

const ExpertiseContent3 = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  opacity: 0;
  margin-left: -13rem;
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 3s; 

  ${fadeInFromRight}

  @media (min-width: ${breakpoints.md}) {
    gap: 1rem;
  }
`;

const ExpertiseContentText = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
  },
});

const Button = styled.div({
  padding: '0.5rem',
  borderRadius: '20px',
  textAlign: 'center',
  fontSize: '15px',
  width: '30%',
  justifySelf: 'center',
  marginTop: '1rem',
  color: 'black',
  backgroundColor: 'white',
  fontWeight: 'bold',
  ':hover': {
    background: 'gray',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    margin: 'auto',
    width: '20%',
    marginBottom: '8rem',
    marginTop: '-2rem',
    width: '40%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    borderRadius: '25px',
    marginTop: '3rem',
    fontSize: '20px',
  },
});

function App() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      {(!isMobile && 
        <IMG>
          <img className="rounded-2xl lg:h-full brightness-50" src="/header-expertise-dbg.jpg" alt="mobil" width={2000} /> 
        </IMG>
      )}
      {(isTablet && 
        <IMG>
          <img className="rounded-2xl" src="/tech-header-mbg.png" alt="mobil" /> 
        </IMG>
      )}
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
      <Button><a href="/About">See More</a></Button>
    </>
  );
}

export default App;
