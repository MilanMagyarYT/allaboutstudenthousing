"use client";

import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import AboutMenuBar from "./AboutMenuBar";
import MobileAboutMenuBar from "./MobileAboutMenuBar";
import AboutDesktopContent from "./AboutDesktopContent";
import AboutMobileContent from "./AboutMobileContent";

export default function About() {
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });

  return (
    <div className="homepage-background">
      <Container maxWidth="xl" className="container">
        {!phoneViewActive ? <AboutMenuBar /> : <MobileAboutMenuBar />}
        {!phoneViewActive ? <AboutDesktopContent /> : <AboutMobileContent />}
      </Container>
    </div>
  );
}
