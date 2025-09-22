import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Header() {
  return (
    <Box style={{ position: "relative" }}>
      <Box position={"absolute"} width={"100%"} height={"100vh"} >
        <Typography  
          className="montserrat-uniquifier"
          position={"absolute"}
          fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
          padding={{ xs: "1rem" }}
          textTransform={"uppercase"}
          lineHeight={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
          justifySelf={"anchor-center"}
          alignSelf={"anchor-center"}
          textAlign={"center"}
          fontFamily={"Montserrat, sans-serif"}
          zIndex={5}
        >
          Unique web design <br /> tailored for modern digital solutions
        </Typography>
      </Box>

      <Box>
        <embed
          // src="https://my.spline.design/nexbotrobotcharacterconcept-KZz2xsYWgEaSw2EeHqo5MSpa/"
          // src="https://my.spline.design/nexbotrobotcharacterconcept-InGTmeodj4qBMtl9ZvDa11PF/"
          // src="https://my.spline.design/claritystream-QTwRXLLyyKicDE1BRNwRTLCQ/"
          src="https://my.spline.design/retrofuturismbganimation-Papb8cnkSKD6lTBqMPF6yqmb/"
          style={{ 
            marginTop: "-2rem", 
            zIndex: 1,       
            width: "100%", 
            height: "100vh",
            // position: "relative",
            // clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 100px), calc(100% - 200px) calc(100% - 100px), calc(100% - 200px) 100%, 0 100%"
          }}
        />
      </Box>
    </Box>
  );
}
