'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
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
  backgroundColor: '#080505',
  zIndex: '50',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderTopColor: 'black',
    top: '0', 
    bottom: '', 
    height: '6rem',
    alignItems: 'center',
    padding: '3rem',
  },
});

const OpenMenu = styled.div({
  transform: props => (props.menuOpen ? 'translateX(0)' : 'translateX(100%)'),
  transition: 'transform 0.3s ease',
  position: 'fixed',
  left: 0,
  marginTop: '-3.5rem',
  padding: '1rem',
  width: '100%',
  paddingBottom: '15px',
  backgroundColor: 'black',
  zIndex: '50',
  [`@media (min-width: ${breakpoints.md})`]: {
    top: '0',
    gap: '1rem',
    bottom: '',
    right: '16rem',
    width: '35%',
    height: '3.5rem',
    borderRadius: '50px',
    left: 'inherit',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '2.5rem',
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
  paddingBottom: '20px',
  gap: '10px',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    paddingTop: '1rem',
    gap: '30px',
    // alignItems: 'center',
  },
});

const OpenMenuLogoAndIcon = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const LinksContainer = styled.div({
  display: 'flex',
  // justifySelf: 'center',
  // textAlign: 'center',
  // marginTop: '2rem',
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
              <a className='hover:text-hover-menu' href="/" prefetch={false}>LOCHMANNWEB</a>
            </div>
  
            <LinksContainer>
                <ul>
                  <Links>
                    <a className='hover:text-hover-menu' href="/About" prefetch={false}>JOURNEY</a>
                    <a className='hover:text-hover-menu' href="/Services" prefetch={false}>SERVICES</a>
                    <a className='hover:text-hover-menu' href="/MyWork" prefetch={false}>PROCESS TO PROJECT</a>
                    <a className='hover:text-hover-menu' href="/Contact" prefetch={false}>CONTACT</a>
                  </Links>
                </ul>
            </LinksContainer>
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
              <a className='hover:text-hover-menu' href="/" prefetch={false}>LOCHMANNWEB</a>
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
              <a className='' href="/" prefetch={false}>LOCHMANNWEB</a>
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
                    <a className='text-lg md:text-lg hover:text-hover-menu' href="/About" prefetch={false}>Journey</a>
                    <a className='text-lg md:text-lg hover:text-hover-menu' href="/Services" prefetch={false}>Services</a>
                    <a className='text-lg md:text-lg hover:text-hover-menu' href="/MyWork" prefetch={false}>Process To Project</a>
                    <a className='text-lg md:text-lg hover:text-hover-menu' href="/Contact" prefetch={false}>Contact</a>
                    <a className='text-lg md:text-lg hover:text-hover-menu' href="https://www.instagram.com/lochmannweb" prefetch={false}>Instagram</a>
                  </Links>
                </ul>
            </LinksContainer>
        </OpenMenu>
      )}
    </>
  );
}

export default App;
