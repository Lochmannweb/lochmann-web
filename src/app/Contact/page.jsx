import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider'

function page() {
  return (
    <>
      <Box 
        display={"grid"} 
        gridTemplateColumns={"1fr 1fr 1fr"} 
        color="white" 
        position={"absolute"} 
        justifySelf={"center"}
        alignItems={"anchor-center"}
        height={"100vh"}
        width={{ sm: "50%" }}
        >
        <Typography 
          fontSize={{ xs: "2.5rem", md: "4rem" }} 
          textTransform={"uppercase"} 
          padding={{ xs: "1rem" }} 
          lineHeight={{ xs: "2.5rem", md: "4rem" }}>
            Get in touch
        </Typography>

        <Divider style={{ background: "white", height: "15vh", width: "1px", justifySelf: "center" }} />

        <Box padding={"1rem"} display={"grid"} gap={"1rem"} width={{ xs: "none", sm: "100%" }}>
          <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem" }}>E-mail: <span style={{ color: "gray" }}>Lochmannweb@gmail.com</span></Typography>
          <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem" }}>Discord: <span style={{ color: "gray" }}>Lochmann25</span></Typography>
          <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem" }}>Insta: <span style={{ color: "gray" }}>Lochmannweb </span></Typography>
        </Box>
      </Box>
    </>
  )
}

export default page