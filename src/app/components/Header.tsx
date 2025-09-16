import React from "react";

export default function Header() {
  const mobileSize = "70vh";
  const DesktopSize = "885px";

  return (
    <>
      <embed
        src="https://my.spline.design/nexbotrobotcharacterconcept-vbQChpTsbMVyEQBoIuOhonls/"
        style={{ 
          marginTop: "-5.5rem", 
          zIndex: "1", 
          width: "100%", 
          height: mobileSize ? DesktopSize : DesktopSize, 
          // position: "relative"
        }}
      />
      <div style={{ width: "18vh", height: "3rem", backgroundColor: "black", position: "absolute", right: "0", marginTop: "-4rem" }} />
    </>
  );
}
