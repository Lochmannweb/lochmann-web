"use client"

import { AppBar, Toolbar, Box, Button } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { label: "Cases", href: "/Cases" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ]

  return (
    <AppBar 
      sx={{ backgroundColor: "transparent", boxShadow: "none", py: {xs: 2, sm: "0"}, px: { md: 4}}}
    >
      <Toolbar 
      sx={{
        display: { xs: "grid", sm: "flex" },
        // textAlign: { xs: "start" },
      }}
      >
        {/* Logo / Home */}
        <Link href="/">
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.5rem", sm: "0.75rem" },
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              borderRadius: 0,
              borderBottom: pathname === "/" ? "1px solid white" : "1px solid transparent",
              "&:hover": { borderBottom: "1px solid white", background: "transparent" },
            }}
          >
            LOCHMANNWEB
          </Button>
        </Link>

        {/* Navigation links */}
        <Box 
          sx={{ 
            // display: "flex", 
            margin: { xs: "0", sm: "0 auto" } 
          }}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                sx={{
                  color: "white",
                  right: { xs: 0, sm: "4rem" },
                  fontSize: { xs: "0.5rem", sm: "0.75rem" },
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: 0,
                  borderBottom: pathname === link.href ? "1px solid white" : "1px solid transparent",
                  "&:hover": { borderBottom: "1px solid white", background: "transparent" },
                }}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
