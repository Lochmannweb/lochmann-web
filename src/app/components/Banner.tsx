
import React from 'react';

export default function App() {
  return (
    <>
      <h1 
        style={{ 
          textAlign: 'center',
          padding: '1rem',
          position: 'relative',
          zIndex: '1',
          fontSize: '2rem',
          marginTop: '2rem',
          fontFamily: 'auto',
          lineHeight: '25px',
        }}>
          LOCHMANNWEB <br />
          <p style={{ fontSize: "9px", fontWeight: "block", color: "gray" }}>( LOW )</p>
        </h1>
        <p 
          style={{ 
            justifyItems: 'center', 
            backgroundColor: "#ffffff0d", 
            marginTop: '20rem', 
            color: "white", 
            zIndex: '1', 
            position: 'absolute', 
            display: "flex",
            justifySelf: "center",
            borderRadius: '1rem',
            padding: '4rem 3rem',
            filter: 'drop-shadow(2px 4px 6px black)',
          }}>
          Creating something new - coming soon!
        </p>
    </>
  );
}

