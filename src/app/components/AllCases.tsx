"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Link from "next/link"

const slides = [
  {
    buttonText: "VIEW",
    background: "/cases/ss.png",
    href: "https://secondswing.vercel.app/",        
  },
  {
    buttonText: "VIEW 2",
    background: "/cases/ss.png",
    href: "https://secondswing.vercel.app/",
  }
]

function AllCases() { 
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Box sx={{ position: "absolute", right: "2rem", marginTop: "-21rem" }}>
      <Box
        sx={{
          position: "relative",
          width: 320,
          height: 300,
          borderRadius: 2,
          overflow: "hidden",
          backgroundImage: `url('${slides[activeSlide].background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }} />

        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            padding: 3,
            color: "white",
          }}
        >
          {/* VIEW-knap med slide-specifikt href */}
          <Link href={slides[activeSlide].href} passHref legacyBehavior>
            <Button
              component="a"
              variant="contained"
              sx={{
                width: "fit-content",
                backgroundColor: "white",
                position: "absolute",
                right: "1rem",
                bottom: "15rem",
                "&:hover": { backgroundColor: "lightgray" },
                color: "black",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 1,
                textTransform: "none",
              }}
            >
              {slides[activeSlide].buttonText}
            </Button>
          </Link>
        </Box>

        {/* Pagination dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 20,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveSlide(index)}
              sx={{
                width: 8,
                height: 8,
                backgroundColor: "white",
                borderRadius: "50%",
                opacity: activeSlide === index ? 1 : 0.5,
                cursor: "pointer",
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 0.8 },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default AllCases
