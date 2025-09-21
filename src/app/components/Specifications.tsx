
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import CssIcon from "@mui/icons-material/Css"; // hypothetical, use SvgIcon if needed
import HtmlIcon from "@mui/icons-material/Html"; // hypothetical
import PythonIcon from "@mui/icons-material/Adb"; // substitute for Python
import SqlIcon from "@mui/icons-material/Storage";

const specs = [
  { title: "TS", description: "Typescript", feature: "Safety", icon: <CodeIcon sx={{ color: "lime" }} /> },
  { title: "TS", description: "Typescript", feature: "Safety", icon: <CodeIcon sx={{ color: "lime" }} /> },
  { title: "TS", description: "Typescript", feature: "Safety", icon: <CodeIcon sx={{ color: "lime" }} /> },
  { title: "CSS", description: "CSS", feature: "Styling", icon: <CssIcon sx={{ color: "lime" }} /> },
  { title: "HTML", description: "HTML", feature: "Markup", icon: <HtmlIcon sx={{ color: "lime" }} /> },
  { title: "Python", description: "Python", feature: "Scripting", icon: <PythonIcon sx={{ color: "lime" }} /> },
  { title: "SQL", description: "SQL", feature: "Database", icon: <SqlIcon sx={{ color: "lime" }} /> },
];

export default function Specifications() {
  // Example: check if screen is small
  const isSmallScreen = "600px";

  return (
    <Box sx={{ p: 4, marginTop: "-24.5rem" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gap: 2, // space between items
            width: "45vh"
          }}
        >
            <Typography variant="h6" sx={{ mb: 2, color: "gray", alignSelf: "end", fontSize: "0.9rem" }}>
                Specifications
            </Typography>
          {specs.map((spec, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "#ffffff0f",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "white" }}>
                {spec.title}
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "0.7rem" }}>{spec.description}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: -1.5 }}>
                <Typography sx={{ color: "white", fontSize: "1rem" }}>{spec.feature}</Typography>
                {spec.icon}
              </Box>
            </Box>
          ))}
        </Box>
    </Box>
  );
}
