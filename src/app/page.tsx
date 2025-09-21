
import React from 'react'
import Header from './components/Header'
import Box from '@mui/material/Box'

const Page = () => {

  return (
    <>
    <Box
      component="img"
      src="/bg.jpg"
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.2)"
      }}
    />
      <Header />
    </> 
  )
}

export default Page