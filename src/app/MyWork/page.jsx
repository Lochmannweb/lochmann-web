"use client"

import React from 'react'
import StepByStep from '../components/MyWorkComponent/StepByStep';
import styled from '@emotion/styled';
import WorkPageProjects from '@/app/components/WorkPageProjects'
import { MyWorkHeader } from '@/app/data/MyWorkData'
// import { StepByStep } from "@/app/data/MyWorkData"

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const IMGHeader = styled.div({
  width: '95%',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('/glas-bg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  marginBottom: '5rem',
  marginTop: '4rem',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%', 
    // marginTop: '6rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      height: '70vh',
      marginBottom: '10rem',
      marginTop: '6rem',
      },
});

const IMG = styled.div({
  width: '95%',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('/header-dbg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '5rem',
    width: '95%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      // height: '160vh',
      },
});

const Header = styled.div({
  textAlign: 'center',
  justifySelf: 'center',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '0rem',
    width: '85%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '9rem',
  },
});

const Title = styled.div({
  fontFamily: 'fantasy',
  transform: 'uppercase',
  fontSize: '30px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '55px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '100px',
  },
});

const Subheader = styled.div({
  color: 'gray',
  fontFamily: 'emoji',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '80%',
    fontSize: '20px',
  },
});

// const Container = styled.div({
//   justifySelf: 'center',
//   padding: '1rem',
//   textAlign: 'center',
//   [`@media (min-width: ${breakpoints.md})`]: {
//   },
//   [`@media (min-width: ${breakpoints.lg})`]: {
//     // marginTop: '1rem',
//   },
// });

const ProcessTitle = styled.div({
  justifySelf: 'center',
  textAlign: 'center',
  fontFamily: 'emoji',
  fontSize: '29px',
  textTransform: 'uppercase',
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '50px',
    marginBottom: '2rem',
    marginTop: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '80px',
  },
});

const ProcessSubheader = styled.div({
  justifySelf: 'center',
  color: 'gray',
  marginBottom: '2rem',
  fontFamily: 'emoji',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginBottom: '5rem',
    fontSize: '20px',
  },
});

const Button = styled.div({
  marginTop: '2rem',
  borderRadius: '20px',
  textAlign: 'center',
  fontSize: '15px',
  color: 'black',
  width: '40%',
  justifySelf: 'center',
  backgroundColor: 'white',
  marginBottom: '5rem',
  textTransform: 'uppercase',
  fontFamily: 'emoji',
  ':hover': {
    borderColor: 'white',
    borderWidth: 'thin',
    background: 'black',
    color: 'white',
  },
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '3rem',
      width: '25%',
      padding: '0.3rem',
      fontSize: '15px',
      width: '20%',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '15%',
      fontSize: '20px',
      marginBottom: '10rem',
      },
  });

const ProjectsTitle = styled.div({
  justifySelf: 'center',
  fontFamily: 'emoji',
  fontSize: '30px',
  // marginTop: '1rem',
  textTransform: 'uppercase',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '80px',
  },
});

const Aboutpage = () => {

    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Supabase ANON KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <>
    <IMGHeader>
      <Header>
          <Title>{MyWorkHeader.title}</Title> 
          {/* <Subheader>{MyWorkHeader.subheader}</Subheader> */}
      </Header>
    </IMGHeader>

    <IMG>
        <ProcessTitle>{MyWorkHeader.processTitle}</ProcessTitle>
        {/* <ProcessSubheader>{MyWorkHeader.processSubheader}</ProcessSubheader> */}
        <StepByStep />
    </IMG>  
    <Button><a href="/Contact">Get In Touch</a></Button>

    <IMGHeader>
      <ProjectsTitle>{MyWorkHeader.projectTitle}</ProjectsTitle>
      <WorkPageProjects />
    </IMGHeader>
    </>
  )
}

export default Aboutpage