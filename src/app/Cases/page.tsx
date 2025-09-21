"use client"

import { Divider, Link, Typography } from "@mui/material"
import Box from "@mui/material/Box"

export default function CasesPage() {
  return (
    <Box 
      sx={{ 
        position: "absolute",
        alignSelf: "anchor-center",
        textAlign: "center",
        top: "3rem",
      }}>
        <Box>
          <Box
            component="img"
            src="/cases/case-ss.png"
            sx={{
              width: { xs: "80%", sm: "60%" },
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "opacity(1)",
            }}
          />
            <Box py={2} display={{ xs: "grid", sm: "flex" }} justifyContent={"space-between"} alignItems={"center"} width={{ xs: "80%", sm: "60%" }} justifySelf={"anchor-center"}>
              <Link 
                href="https://secondswing.vercel.app/" 
                fontSize={{ xs: "0.5rem", sm: "0.75rem" }} 
                fontWeight={"500"} 
                textAlign={"start"}
                letterSpacing={"0.2rem"} 
                textTransform={"uppercase"} 
                fontFamily={"sans-serif"}
                sx={{ 
                    color: "white", 
                    textDecoration: "none",
                    "&:hover": { color: "#2fc913" }
                }}
                >
                  Second Swing - 
              </Link>
              <Typography textAlign={"start"} fontSize={{ xs: "0.5rem", sm: "0.75rem" }}  fontWeight={"500"} letterSpacing={"0.2rem"} textTransform={"uppercase"}>Online E-commerce application</Typography>
            </Box>
            <Divider sx={{ borderBottom: "1px solid white", width: { xs: "80%", sm: "60%" }, justifySelf: "anchor-center" }}/>
        </Box>
    </Box>
  )
}
