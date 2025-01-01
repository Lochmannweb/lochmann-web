import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
    md: '768px', 
    lg: '1024px',
  };

  const IMG = styled.div({
    width: '95%',
    borderRadius: '10px',
    borderColor: '#6b6b6b',
    borderWidth: 'thin',
    backgroundImage: `url(' /header-feedback-dbg.jpg')`,
    justifySelf: 'center',
    backgroundSize: 'cover',
    marginTop: '5rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      width: '95%',
      },
      [`@media (min-width: ${breakpoints.lg})`]: {
        width: '95%',
        height: '70vh',
        },
  });

  const Container = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
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
      fontSize: '40px',
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
      fontSize: '25px',
      marginBottom: '3rem', 
    },
  });

  const Content = styled.div({
    color: 'white',
    display: 'grid',
    gap: '1.2rem',
    marginTop: '0rem',
    marginBottom: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      gap: '1rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      justifyContent: 'center',
      gap: '3rem',
    },
  });
  
  const FeedBackContainer = styled.div({
    display: 'grid',
    color: 'white',
    textAlign: 'start',
    borderColor: '#6b6b6b',
    borderWidth: 'thin',
    borderRadius: '15px',
    backgroundImage: `url('/header-feedback-dbg.jpg')`,
    backgroundSize: 'cover',
    width: '90%',
    justifySelf: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const FeedBackContentTtitle = styled.div({
    textAlign: 'start',  
    fontSize: '20px',
    marginBottom: '-0.5rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '25px',
    },
  });

  const FeedbackContent = styled.div({
    fontSize: '13px',
    color: 'gray',
    marginTop: '1rem',
     [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '18px',
      paddingRight: '5rem',
    },
  })

function Feedback() {
      const theme = useTheme();
      const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {/* {(!isMobile && 
      <IMG>
        <img className="rounded-xl lg:h-full brightness-50" src="/header-feedback-dbg.jpg" alt="bg" width={2000} /> 
      </IMG>
    )}

    {(isTablet && 
      <IMG>
        <img className="rounded-2xl" src="/feedback-header-mbg.png" alt="mobil" width={1000} /> 
      </IMG>
    )} */}
    <IMG>
      <Container>
        <div>
          <Title>{FeedbackData.Title}</Title>
          <Header>{FeedbackData.Header}</Header>
          <Subheader>{FeedbackData.Subheader}</Subheader>
        </div>
        <Content>
          <FeedBackContainer>
            <div className='p-5 mt-5 md:w-2/6 lg:w-1/4'>
              <img className='md:m-0 mb-5' src="/settings.svg" alt="svg" width={60} />
              <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Tech.title}</FeedBackContentTtitle> 
              <FeedbackContent>{FeedbackData.Tech.feedback}</FeedbackContent>
            </div>
          </FeedBackContainer>

          <FeedBackContainer>
            <div className='p-5 mt-5 md:w-2/6 lg:w-1/4'>
              <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
              <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Feedback.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Feedback.feedback}</FeedbackContent>
            </div>
          </FeedBackContainer>

          <FeedBackContainer>
            <div className='p-5 mt-5 md:w-2/6 lg:w-1/4'>
              <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
              <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Offer.title}</FeedBackContentTtitle>
              <FeedbackContent>{FeedbackData.Offer.feedback}</FeedbackContent>
            </div>
          </FeedBackContainer>
        </Content>
      </Container>
    </IMG>
    </>
  )
}

export default Feedback