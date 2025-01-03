import React from 'react'
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
    backgroundImage: `url('/header-feedback-dbg.jpg')`,
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
    [`@media (min-width: ${breakpoints.lg})`]: {
    },
  });

  const Title = styled.div({
    fontSize: '13px',
    textAlign: 'center',
    borderRadius: '0px',
    marginTop: '0.5rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      textAlign: 'center',
      borderColor: '#A100FF',
      borderRadius: '0px 100px',
      fontSize: '20px',
      marginTop: '0rem',
    },
  });

  const Header = styled.div({
    fontSize: '30px',
    fontFamily: 'Emoji',
    textAlign: 'center',
    borderRadius: '0px',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    [`@media (min-width: ${breakpoints.md})`]: {
      textAlign: 'center',
      borderColor: '#A100FF',
      borderRadius: '0px 100px',
      fontSize: '60px',
      marginTop: '0rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '60px',
    },
  });

  const Subheader = styled.div({
    textAlign: 'center',  
    fontSize: '15px',
    padding: '2rem',
    marginTop: '-3rem',
    color: 'gray',
    [`@media (min-width: ${breakpoints.md})`]: {
      textAlign: 'center',  
      fontSize: '20px',
      marginBottom: '3rem', 
    },
  });

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
    backgroundImage: `url('/box.jpg')`,
    width: '90%',
    // height: '13vh',
    justifySelf: 'center',
    padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      // height: '15vh',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      // height: '50vh',
    },
  });

  const FeedBackContentTtitle = styled.div({
    textAlign: 'start',  
    fontSize: '20px',
    marginBottom: '-0.5rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '20px',
    },
  });

  const FeedbackContent = styled.div({
    fontSize: '13px',
    color: 'gray',
    marginTop: '1rem',
     [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '20px',
      // paddingRight: '5rem',
    },
  })

function Feedback() {

  return (
    <>
    <IMG>
      <Container>
        <div>
          <Title>{FeedbackData.Title}</Title>
          <Header>{FeedbackData.Header}</Header>
          <Subheader>{FeedbackData.Subheader}</Subheader>
        </div>
        <Content>
          <FeedBackContainer>
              <img className='md:m-0' src="/settings.svg" alt="svg" width={60} />
              <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Tech.title}</FeedBackContentTtitle> 
              <FeedbackContent>{FeedbackData.Tech.feedback}</FeedbackContent>
          </FeedBackContainer>

          <FeedBackContainer>
              <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
              <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Feedback.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Feedback.feedback}</FeedbackContent>
          </FeedBackContainer>

          <FeedBackContainer>
              <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
              <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Offer.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Offer.feedback}</FeedbackContent>
          </FeedBackContainer>
        </Content>
      </Container>
    </IMG>
    </>
  )
}

export default Feedback