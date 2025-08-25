"use client";

import { Container, useMediaQuery } from "@mui/material";
import EmailTemplateResourcePage from "../EmailTemplateResourcePage";
import AboutMenuBar from "../about/AboutMenuBar";
import MobileAboutMenuBar from "../about/MobileAboutMenuBar";
import MobileEmailTemplateResourcePage from "../MobileEmailTemplateResourcePage";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";

export default function EmailTemplatePage() {
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });

  return (
    <div className="homepage-background">
      <Container maxWidth="xl" className="container">
        {!phoneViewActive ? <AboutMenuBar /> : <MobileAboutMenuBar />}
        {!phoneViewActive ? (
          <EmailTemplateResourcePage />
        ) : (
          <MobileEmailTemplateResourcePage />
        )}
        {!phoneViewActive ? <Footer /> : <MobileFooter />}
      </Container>
    </div>
  );
}
