'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import "@fontsource/keania-one";

const breakpoints = {
  sm: '699px',
  md: '700px', 
  lg: '1024px', 
};

const Nav = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Container = styled.div({
  display: 'flex', 
  justifyContent: 'space-between',
  padding: '1rem',
  width: '100%',
  top: '0',
  position: 'fixed',
  backgroundColor: 'black',
  zIndex: '50',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderTopColor: 'black',
    top: '0', 
    bottom: '', 
    height: '4rem',
    alignItems: 'center',
    padding: '2rem',
  },
});

const OpenMenu = styled.div({
  transform: props => (props.menuOpen ? 'translateX(0)' : 'translateX(100%)'),
  transition: 'transform 0.3s ease',
  position: 'fixed',
  left: 0,
  padding: '1rem',
  width: '100%',
  paddingBottom: '30rem',
  backgroundColor: 'black',
  zIndex: '50',
  [`@media (min-width: ${breakpoints.md})`]: {
    top: '0',
    bottom: '',
    height: '10rem',
    display: 'grid',
    alignItems: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    top: '0',
    gap: '1rem',
    bottom: '',
    right: '19rem',
    width: '35%',
    height: '3.5rem',
    borderRadius: '50px',
    left: 'inherit',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '2.5rem',
  },
});


const Links = styled.div({
  display: 'grid',
  marginBottom: '20px',
  gap: '10px',
  marginTop: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '30px',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    display: 'flex',
    gap: '30px',
    marginTop: '0.8rem',
    marginBottom: '0.8rem',
  },
});

const OpenMenuLogoAndIcon = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const LinksContainer = styled.div({
  display: 'flex',
  backgroundColor: 'black',
  [`@media (min-width: ${breakpoints.md})`]: {
    background: 'linear-gradient(0deg, #4d3d39, #ffffff00)',
    justifyContent: 'center',
    borderRadius: '25px',
    width: '45%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    background: 'linear-gradient(0deg, #4d3d39, #ffffff00)',
    justifyContent: 'center',
    borderRadius: '25px',
    width: '25%',
  },
});


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('Menu state changed to:', !menuOpen); 
  };

  return (
    <>
   {/* Desktop version */}
    {(!isMobile &&
        <Nav>
          <Container>
            <div className='flex gap-2 items-center'>
            {(
              <div>
                <Image
                  src="/logo.png"
                  alt="profile"
                  width={25}
                  height={25}
                />
              </div>
            )}
              <a className='hover:text-hover-menu md:text-xs' href="/" prefetch={false}>LOCHMANNWEB</a>
            </div>
  
            <LinksContainer>
                <ul>
                  <Links>
                    <a className='hover:text-hover-menu md:text-xs' href="/About" prefetch={false}>JOURNEY</a>
                    <a className='hover:text-hover-menu md:text-xs' href="/MyWork" prefetch={false}>PROCESS TO PROJECT</a>
                    <a className='hover:text-hover-menu md:text-xs' href="/Services" prefetch={false}>SERVICES</a>
                  </Links>
                </ul>
            </LinksContainer>

            <div>
              <a className='hover:text-hover-menu md:text-xs' href="/Contact" prefetch={false}>CONTACT</a>
            </div>
          </Container>
        </Nav>
      )}

    
    {/* Mobil version */}
      {(!!isTablet &&
        <Nav>
          <Container>
            <div className='flex gap-2 items-center'>
            {(
              <div>
                <Image
                  src="/logo.png"
                  alt="profile"
                  width={25}
                  height={25}
                />
              </div>
            )}
              <a className='hover:text-hover-menu md:text-sm' href="/" prefetch={false}>LOCHMANNWEB</a>
            </div>
  
            <div className='flex items-center'>
              <button className="grid gap-1" onClick={toggleMenu}>
                <div className="decoration-white w-16 ml-auto"><hr /></div>
                <div className="decoration-white w-10 ml-auto"><hr /></div>
                <div className="decoration-white w-5 ml-auto"><hr /></div>
              </button>
            </div>
          </Container>
        </Nav>
      )}

      {/* Open Menu */}
      {menuOpen && (
        <OpenMenu menuOpen={menuOpen}>
            <OpenMenuLogoAndIcon>
            <div className='flex gap-2 items-center'>
              {(
                <div>
                  <Image
                    src="/logo.png"
                    alt="profile"
                    width={25}
                    height={25}
                  />
                </div>
              )}
              <a className='md:text-sm' href="/" prefetch={false}>LOCHMANNWEB</a>
            </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill='white'
                    height={25}
                    width={25}
                    onClick={toggleMenu}
                  >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                  </svg>
                </div>
            </OpenMenuLogoAndIcon>
            <LinksContainer>
                <ul>
                  <Links>
                    <a className=' hover:text-hover-menu md:text-sm' href="/About" prefetch={false}>Journey</a>
                    <a className=' hover:text-hover-menu md:text-sm' href="/Services" prefetch={false}>Services</a>
                    <a className=' hover:text-hover-menu md:text-sm' href="/MyWork" prefetch={false}>Process To Project</a>
                    <a className=' hover:text-hover-menu md:text-sm' href="/Contact" prefetch={false}>Contact</a>
                    <a className=' hover:text-hover-menu md:text-sm' href="https://www.instagram.com/lochmannweb" prefetch={false}>Instagram</a>
                  </Links>
                </ul>
            </LinksContainer>
        </OpenMenu>
      )}
    </>
  );
}

export default App;
