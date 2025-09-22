import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function page() {
  return (
    <Box>
          
      <Box>
        <Typography 
          position={"absolute"} 
          top={{ xs: "8rem", sm: "13.5rem", md: "15rem" }} 
          paddingLeft={{ xs: "1rem", md: "15%" }}
          zIndex={5} 
          color="gray" 
          textTransform={"uppercase"}
          fontFamily={"sans-serif"}
          fontSize={"0.9rem"}
          >
            Line Lochmann Møller
        </Typography>
        <Typography 
          position={"absolute"} 
          top={{ xs: "9.5rem", sm: "15rem", md: "17rem"  }}  
          paddingLeft={{ xs: "1rem", md: "15%" }}
          zIndex={5} 
          color="white" 
          fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
          lineHeight={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
          letterSpacing={6}
          fontFamily={"sans-serif"}
          textTransform={"uppercase"}
          >
            Full stack developer <br /> UX / UI Designer
        </Typography>
        <Box position={"absolute"} top={{ xs: "17rem", sm: "20rem", md: "25rem"  }} paddingLeft={{ xs: "1rem", md: "15%" }} zIndex={5} >
          {/* <Typography fontSize={"0.7rem"} color="gray" borderBottom={{ xs: "1px solid lightgray", sm: "none" }} marginBottom={"0.5rem"}>Specifications</Typography> */}
          <Box display={{ xs: "grid", md: "flex" }}>
            <Typography fontSize={"0.9rem"} borderRight={{ md: "1px solid white" }} paddingRight={{ md: "1rem" }}>SQL</Typography> 
            <Typography fontSize={"0.9rem"} borderRight={{ md: "1px solid white" }} paddingRight={{ md: "1rem" }} paddingLeft={{ md: "1rem" }} color="gray">Python</Typography> 
            <Typography fontSize={"0.9rem"} borderRight={{ md: "1px solid white" }} paddingRight={{ md: "1rem" }} paddingLeft={{ md: "1rem" }} >HTML</Typography> 
            <Typography fontSize={"0.9rem"} borderRight={{ md: "1px solid white" }} paddingRight={{ md: "1rem" }} paddingLeft={{ md: "1rem" }} color="gray">CSS</Typography> 
            <Typography fontSize={"0.9rem"} borderRight={{ md: "1px solid white" }} paddingRight={{ md: "1rem" }} paddingLeft={{ md: "1rem" }} >Typescript</Typography> 
            <Typography fontSize={"0.9rem"} paddingRight={{ md: "1rem" }} paddingLeft={{ md: "1rem" }} color="gray">Database</Typography> 
          </Box>
        </Box>
      </Box>

      {/* Mobil version */}
      <Box
        component="img"
        src="/profile.png"
        position={"relative"}
        left={{ xs: "-16rem", md: "50rem" }}
        height={"100vh"}
        display={{ xs: "flex" }}
        sx={{ filter: "brightness(0.5)" }}
      />


      {/* desktop version */}
      {/* <Typography
        variant="h1"
        display={{ xs: "none", md: "flex" }}
        sx={{
          fontSize: { xs: "20vw", md: "21vw" },
          fontWeight: 900,
          letterSpacing: { xs: "-0.5rem", sm: "-1rem", md: "-2rem" },
          top: {  xs: "-1rem", sm: "-3rem", md: "-5rem"},
          textTransform: "uppercase",
          backgroundImage: `url("/profile.png")`,
          backgroundSize: "100%",
          backgroundPositionY: { xs: "-20vh", sm: "-27rem", md: "-42rem" },
          backgroundRepeat: "no-repeat",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          },
        }}
      >
        LOCHMANN
      </Typography> */}
    </Box>
  )
}

export default page