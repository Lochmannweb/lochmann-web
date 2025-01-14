import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";
import Project from './Project';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  overflow: 'hidden', 
  position: 'relative', 
  marginTop: '2rem',
  marginBottom: '1rem',
  justifySelf: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifyItems: 'center',
    display: 'grid',
    gap: 'rem',
    marginTop: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    gap: '2rem',
  },
});

function LatestProjects() {
  return (
    <>
      <Container>
          <Project />
      </Container>
    </>
  );
}

export default LatestProjects;
