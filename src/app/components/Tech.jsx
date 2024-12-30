"use client"

import React from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';
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
        marginTop: '103rem',
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
})

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
    fontSize: '40px',
    color: 'white',
    fontFamily: 'Fantasy',
    width: '54%',
  },
})

const Content = styled.div({
  display: 'grid',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
  },
})

const Expertise = styled.div({
  display: 'grid',
  gap: '2rem',
  padding: '2rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '5rem',
    marginTop: '-1rem',
    display: 'grid',
    // gap: '5rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    padding: '0rem',
    // display: 'flex',
    // gap: '5rem',
  },
})

const ExpertiseContent = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '1rem',
  },
})

const ExpertiseContentText = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
})

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
    
  }
});

function App() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        <ExpertiseContent>
          <img src="/react-icon.svg" alt="svg" width={30} />
          <ExpertiseContentText>{TechData.Kode.title}</ExpertiseContentText>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/spline.png" alt="png" width={30}  />
          <ExpertiseContentText>{TechData.Ani.title}</ExpertiseContentText>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="js-icon.svg" alt="svg" width={30} />
          <ExpertiseContentText>{TechData.Js.title}</ExpertiseContentText>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/tailwind-css.svg" alt="svg" width={35} />
          <ExpertiseContentText>{TechData.TW.title}</ExpertiseContentText>
        </ExpertiseContent>
      </Expertise>
      </Content>

    </Container>
    <Button><a href="/About">See More</a></Button>
    </>
  );
}

export default App;



{/* <>
{(!isMobile && 
  <img className="border-borderColor brightness-50 border-2 m-auto rounded-xl md:mt-10" src="/work-header-dbg.jpg" alt="bg" width={2000} /> 
)}

{(isTablet && 
  <IMG>
  <img className="rounded-2xl" src="/work-header-mbg.png" alt="mobil" /> 
  </IMG>
)}


<Container>
  <HeaderContent>
    <Title>{TechData.title}</Title>
    <Subheader>
      <span>{TechData.subheader}</span> <br />
      <span>{TechData.subheader2}</span>
    </Subheader>
  </HeaderContent>
  <Expertise>
    <ExpertiseContent>
      <img src="/react-icon.svg" alt="svg" width={60} />
      <ExpertiseContentText>{TechData.Kode.title}</ExpertiseContentText>
    </ExpertiseContent>

    <ExpertiseContent>
      <img src="/spline.png" alt="png" width={60}  />
      <ExpertiseContentText>{TechData.Ani.title}</ExpertiseContentText>
    </ExpertiseContent>

    <ExpertiseContent>
      <img src="js-icon.svg" alt="svg" width={50} />
      <ExpertiseContentText>{TechData.Js.title}</ExpertiseContentText>
    </ExpertiseContent>

    <ExpertiseContent>
      <img src="/tailwind-css.svg" alt="svg" width={60} />
      <ExpertiseContentText>{TechData.TW.title}</ExpertiseContentText>
    </ExpertiseContent>
  </Expertise>
</Container>
<Button><a href="/About">See All Services</a></Button>
</> */}
