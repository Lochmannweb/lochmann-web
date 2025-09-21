import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Header() {
  return (
    <Box style={{ position: "relative" }}>
      <Typography  
        position={"absolute"}
        fontSize={{ xs: "2rem", sm: "3rem", md: "4rem" }}
        textTransform={"uppercase"}
        lineHeight={{ xs: "2rem", sm: "3.5rem" }}
        left={{ xs: "0", sm: "1rem",}}
        top={{ xs: "20rem", sm: "20rem", md: "20rem" }}
        textAlign={"center"}
        fontFamily={"fantasy"}
        zIndex={5}
        px={{ xs: "1rem", md: "15rem" }}
      >
        Unique web design tailored for modern digital solutions
      </Typography>

      {/* mobil */}
      {/* <Box display={{ sm: "none" }} >
            <embed
              src="https://my.spline.design/nexbotrobotcharacterconcept-KZz2xsYWgEaSw2EeHqo5MSpa/"
              style={{ 
                // marginTop: "-2rem", 
                zIndex: 1,       
                width: "100%", 
                height: "767px",
                position: "relative",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 100px), calc(100% - 200px) calc(100% - 100px), calc(100% - 200px) 100%, 0 100%"
              }}
            />
      </Box> */}
      {/* desktop */}
      <Box>
        <embed
          // src="https://my.spline.design/nexbotrobotcharacterconcept-KZz2xsYWgEaSw2EeHqo5MSpa/"
          src="https://my.spline.design/nexbotrobotcharacterconcept-InGTmeodj4qBMtl9ZvDa11PF/"
          style={{ 
            marginTop: "-2rem", 
            zIndex: 1,       
            width: "100%", 
            height: "767px",
            position: "relative",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 100px), calc(100% - 200px) calc(100% - 100px), calc(100% - 200px) 100%, 0 100%"
          }}
        />
      </Box>
    </Box>
  );
}
