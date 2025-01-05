import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';

const breakpoints = {
  sm: '699px',
  md: '700px',
  lg: '1024px',
};

// Fælles animationsstil
const animatedStyle = (props) => `
  opacity: ${props.isVisible ? "1" : "0"};
  transform: ${props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 1s ease, transform 1s ease;
`;

const IMG = styled.div({
  width: '92%',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('/t-header.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
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
  display: 'grid',
  marginTop: '1rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '-2rem',
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
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'center',
    borderRadius: '0px 70px',
    borderColor: '#A100FF',
    fontSize: '20px',
  },
});

const Header = styled.div`
  font-size: 30px;
  text-align: center;
  font-family: fantasy;
  ${animatedStyle}

  @media (min-width: ${breakpoints.md}) {
    font-size: 40px;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: 60px;
  }
`;

const Subheader = styled.div`
  text-align: center;
  font-size: 15px;
  color: gray;
  font-family: emoji;
  margin-top: 0rem;
  ${animatedStyle}

  animation-delay: 1s;

  @media (min-width: ${breakpoints.md}) {
    color: white;
    font-size: 40px;
    text-align: start;
    width: 67%;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: 70px;
    text-align: start;
    margin-top: 0rem;
  }
`;


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

const ExpertiseContent = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  ${animatedStyle}

  @media (min-width: ${breakpoints.md}) {
    gap: 1rem;
  }
`;

const ExpertiseContent1 = styled(ExpertiseContent)`
  // animation-delay: 1s;
    @media (min-width: ${breakpoints.md}) {
      margin-left: -4rem;
  }
`;

const ExpertiseContent2 = styled(ExpertiseContent)`
  // animation-delay: 2s;
    @media (min-width: ${breakpoints.md}) {
      margin-left: -9rem;
  }
`;

const ExpertiseContent3 = styled(ExpertiseContent)`
  // animation-delay: -3s;
    @media (min-width: ${breakpoints.md}) {
      margin-left: -15rem;
  }
`;

const ExpertiseContentText = styled.div({
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
  },
});

const Button = styled.div({
  textTransform: 'uppercase',
  borderRadius: '20px',
  textAlign: 'center',
  fontSize: '15px',
  width: '40%',
  justifySelf: 'center',
  marginTop: '1rem',
  fontFamily: 'emoji',
  color: 'black',
  backgroundColor: 'white',
  ':hover': {
    background: 'black',
    borderColor: 'white',
    borderWidth: 'thin',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    padding: '0.3rem',
    margin: 'auto',
    width: '25%',
    marginTop: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    borderRadius: '25px',
    marginTop: '3rem',
    fontSize: '20px',
  },
});

function App() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger animation when 20% of the component is visible
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
            <Title>{TechData.title}</Title>
            <Header isVisible={isInView}>{TechData.header}</Header>
          </HeaderContent>

          <Content>
            <Subheader isVisible={isInView}>
              <span>{TechData.subheader}</span>
            </Subheader>

            <Expertise>
              <ExpertiseContent isVisible={isInView}>
                <img src="/react-icon.svg" alt="svg" width={60} />
                <ExpertiseContentText>{TechData.Kode.title}</ExpertiseContentText>
              </ExpertiseContent>

              <ExpertiseContent1 isVisible={isInView}>
                <img src="/spline.png" alt="png" width={60} />
                <ExpertiseContentText>{TechData.Ani.title}</ExpertiseContentText>
              </ExpertiseContent1>

              <ExpertiseContent2 isVisible={isInView}>
                <img src="js-icon.svg" alt="svg" width={60} />
                <ExpertiseContentText>{TechData.Js.title}</ExpertiseContentText>
              </ExpertiseContent2>

              <ExpertiseContent3 isVisible={isInView}>
                <img src="/tailwind-css.svg" alt="svg" width={65} />
                <ExpertiseContentText>{TechData.TW.title}</ExpertiseContentText>
              </ExpertiseContent3>
            </Expertise>
          </Content>
        </Container>
      </IMG>
      <Button>
        <a href="/About">See More</a>
      </Button>
    </>
  );
}

export default App;
