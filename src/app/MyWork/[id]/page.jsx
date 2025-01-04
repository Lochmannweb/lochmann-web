'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import styled from '@emotion/styled';

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px',
};

const IMG = styled.div({
  width: '95%',
  borderRadius: '10px',
  borderColor: '#1c1c1c',
  borderWidth: 'thin',
  backgroundImage: `url('/header-dbg.jpg')`,
  backgroundSize: 'cover',
  justifySelf: 'center',
  marginTop: '3.5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '95%',
    marginTop: '6rem',
    // height: '230vh',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '95%',
      // height: '10vh',
      },
});

const Container = styled.div({
  display: 'grid',
  padding: '1rem',
  gap: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ContentBox = styled.div({
  display: 'grid',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr',
    width: '90%',
    justifySelf: 'center',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
    },
});

const ContentContainer = styled.div({
  display: 'grid',
  gap: '1rem',  
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr',
    width: '90%',
    justifySelf: 'center', 
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      },
});

const Title = styled.div({
  transform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'fantasy',
  fontSize: '30px',
  marginTop: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '80px',
  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ContentTitle = styled.div({
  fontSize: '25px',
  fontFamily: 'emoji',
  textTransform: 'uppercase',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '40px',
  },
});

const Box = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ContentBoxTitle = styled.div({
  textTransform: 'uppercase',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ContentBoxContent = styled.div({
  color: 'gray',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
  },
});

const Button = styled.div({
  position: 'absolute',
  borderRadius: '25px',
  width: '50%',
  right: '0',
  backgroundColor: 'white',
  color: 'black',
  textAlign: 'center',
  marginTop: '1rem',
  marginRight: '1rem',
  textTransform: 'uppercase',
    ':hover': {
    borderColor: 'white',
    borderWidth: 'thin',
    background: 'black',
    color: 'white',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '0.3rem',
    width: '30%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    marginTop: '1rem',
    marginRight: '3rem',
  },
});

const Load = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

export default function ImageAndDataPage({ params }) {
  const [fetchError, setFetchError] = useState(null);
  const [selectedLW, setSelectedLW] = useState(null);
  // const [selectedHeaderImage, setSelectedHeaderImage] = useState(null);
  // const [selectedMobileHeaderImage, setSelectedMobileHeaderImage] = useState(null);
  // const [selectedPrototypeImage, setSelectedPrototypeImage] = useState(null);
  const [selectedWebImage, setSelectedWebImage] = useState(null);
  const [loadingLW, setLoadingLW] = useState(false);

  useEffect(() => {
    console.log("Fetching data for:", params.id);
    const imageBaseName = params.id.split('.')[0].trim();
  
    const fetchData = async () => {
      try {
        // Hent _WEB billedet
        const { data: webData, error: webError } = await supabase.storage
          .from('LochmannWeb')
          .download(`${imageBaseName}_WEB`);
          console.log('Fetching LW data:', imageBaseName);
  
        if (webError) throw webError;
        console.error('Web error:', webError);
        setSelectedWebImage(URL.createObjectURL(webData));
        console.log('Web Data:', webData);
  
        // Hent LW data
        setLoadingLW(true);
        const { data: lwData, error: lwError } = await supabase
          .from('LW')
          .select('*')
          .ilike('title', `%${imageBaseName}%`); // virker kun med CGC
  
        if (lwError) throw lwError;
  
        if (lwData && lwData.length > 0) {
          setSelectedLW(lwData[0]);
          console.log('LW Data:', lwData);
        } else {
          console.warn('Ingen LW data fundet for:', imageBaseName);
          setSelectedLW(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchError('Kunne ikke hente data.');
      } finally {
        setLoadingLW(false);
      }
    };
  
    fetchData();
  }, [params.id]);


  return (
    <>
    <IMG>
    {selectedLW && (
    <Container>
      <Title>{selectedLW.title || 'Formål ikke tilgængeligt'}</Title>

      <ContentBox>
        <ContentTitle>{selectedLW.formål}</ContentTitle>
        <div>
          <ContentBoxContent>{selectedLW.formåldescription}</ContentBoxContent>
        </div>
      </ContentBox>

      <ContentContainer>
        <ContentTitle>{selectedLW.design}</ContentTitle>
        <Box>
          <ContentBoxContent>{selectedLW.designdescription}</ContentBoxContent>

          <div>
            <ContentBoxTitle>{selectedLW.designcolor}</ContentBoxTitle>
            <ContentBoxContent>{selectedLW.designcolorcontent}</ContentBoxContent>
          </div>

          <div>
            <ContentBoxTitle>{selectedLW.designnavigation}</ContentBoxTitle>
            <ContentBoxContent>{selectedLW.designnavigationcontent}</ContentBoxContent>
          </div>

          <div>
            <ContentBoxTitle>{selectedLW.designsektioner}</ContentBoxTitle>
            <ContentBoxContent>{selectedLW.designsektionhome}</ContentBoxContent>
            <ContentBoxContent>{selectedLW.designsektionabout}</ContentBoxContent>
            <ContentBoxContent>{selectedLW.designsektioninfo}</ContentBoxContent>
            <ContentBoxContent>{selectedLW.designsektionkontakt}</ContentBoxContent> <br />
            <ContentBoxTitle>{selectedLW.designimages}</ContentBoxTitle>
            <ContentBoxContent>{selectedLW.designimagescontent}</ContentBoxContent> <br />
            <ContentBoxTitle>{selectedLW.designtypo}</ContentBoxTitle>
            <ContentBoxContent>{selectedLW.designtypocontent}</ContentBoxContent> <br />
            <ContentBoxTitle>{selectedLW.designicon}</ContentBoxTitle>
            <ContentBoxContent>{selectedLW.designiconcontent}</ContentBoxContent>
          </div>
        </Box>
      </ContentContainer>

      <ContentBox>
        <ContentTitle>{selectedLW.websitename}</ContentTitle>
        <Content><img src={selectedWebImage} alt={`${params.id}_WEB`} width={1000} /></Content>
      </ContentBox>
    </Container>
    )}
    </IMG>
    {selectedLW && (
      <Button>
          <a href={selectedLW.websitelink} target="_blank" rel="noopener noreferrer">{selectedLW.websitebutton}</a>
      </Button>
    )}
  </>
  );
}
