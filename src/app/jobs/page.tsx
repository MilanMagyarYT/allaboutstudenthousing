"use client";

import { Container, useMediaQuery } from "@mui/material";
import AboutMenuBar from "../about/AboutMenuBar";
import MobileAboutMenuBar from "../about/MobileAboutMenuBar";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";
import JobsElement from "./JobsElement";
import MobileJobsElement from "./MobileJobsElement";

export default function JobsPage() {
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });

  return (
    <div className="homepage-background">
      <Container maxWidth="xl" className="container">
        {!phoneViewActive ? <AboutMenuBar /> : <MobileAboutMenuBar />}
        {!phoneViewActive ? <JobsElement /> : <MobileJobsElement />}
        {!phoneViewActive ? <Footer /> : <MobileFooter />}
      </Container>
    </div>
  );
}
