"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import { ServicesData } from '@/app/data/ServicesData'

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const IMG = styled.div({
  width: '92%',
  padding: '1rem',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('/glas-bg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  marginBottom: '5rem',
  marginTop: '3.5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '6rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      padding: '1rem',
      marginTop: '6rem',
      },
});

const Container = styled.div({
  // padding: '1rem',
  top: '4rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginBottom: '0rem',
  },
})

const Header = styled.div({
    marginBottom: '5rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {

    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '70%',
    },
  })

const Title = styled.div({
  fontFamily: 'fantasy',
  fontSize: '30px',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '80px',
  },
})

const Subheader = styled.div({
  textAlign: 'center',
  color: 'gray',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '20px',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '20px',
    },
  })

const Content = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
    },
  })
const ContentTitle = styled.div({
    fontSize: '30px',
    justifySelf: 'center',
    // transform: 'uppercase',
    fontFamily: 'emoji',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '40px',
    },
  })


const ContentSubheader = styled.div({
    fontSize: '15px',
    textAlign: 'center',
    color: 'gray',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '20px',
    },
  })

const ContentContainer = styled.div({
    display: 'grid',
    gap: '1rem',
    marginTop: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        gridTemplateColumns: '1fr 1fr',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
  })

const DesignContainer = styled.div({
    display: 'grid',
    color: 'white',
    textAlign: 'start',
    borderColor: '#1c1c1c',
    borderWidth: 'thin',
    borderRadius: '15px',
    background: 'black',
    backgroundSize: 'cover',
    width: '100%',
    justifySelf: 'center',
    padding: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  })

const DesignContainerTtitle = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
    },
  })

const DesignContainerContent = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
    },
  })
  
const Aboutpage = () => {

  return (
    <>
    <IMG>
        <Header>
            <Title>SERVICES</Title>
            <Subheader>{ServicesData.subheader}</Subheader>
        </Header>
    </IMG>

    <IMG>
      <Container>
        <Content>
            <ContentTitle>{ServicesData.UXUI.title}</ContentTitle>
            <ContentSubheader>{ServicesData.UXUI.subheader}</ContentSubheader>
            <ContentSubheader>{ServicesData.UXUI.subheader2}</ContentSubheader>
            <ContentSubheader>{ServicesData.UXUI.subheader3}</ContentSubheader>
            <ContentSubheader>{ServicesData.UXUI.subheader4}</ContentSubheader>
            <ContentContainer>
                <DesignContainer>
                    <img className='md:m-0' src="/settings.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle> 
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>

                <DesignContainer>
                    <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
            </ContentContainer>
        </Content>
      </Container>
    </IMG>

    <IMG>
      <Container>
        <Header>
            <ContentTitle>{ServicesData.Programmering.title}</ContentTitle>
            <ContentSubheader>{ServicesData.Programmering.subheader}</ContentSubheader>
        </Header>
        <Content>
            <ContentContainer>
                <DesignContainer>
                    <img className='md:m-0' src="/settings.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle> 
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>

                <DesignContainer>
                    <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>

                <DesignContainer>
                    <img className='md:m-0' src="/chat_1.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
                
                <DesignContainer>
                    <img className='md:m-0' src="/lowest-price.svg" alt="svg" width={60} />
                    <DesignContainerTtitle className=' md:text-xl md:mt-5'>Title</DesignContainerTtitle>
                    <DesignContainerContent>Text</DesignContainerContent>
                </DesignContainer>
            </ContentContainer>
        </Content>
      </Container>
    </IMG>
    </>
  )
}

export default Aboutpage