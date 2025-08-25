"use client";

import { Container, useMediaQuery } from "@mui/material";
import AboutMenuBar from "../about/AboutMenuBar";
import MobileAboutMenuBar from "../about/MobileAboutMenuBar";
import ToDoListResourcePage from "../ToDoListResourcePage";
import MobileToDoListResourcePage from "../MobileToDoListResourcePage";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";

export default function ToDoListPage() {
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });

  return (
    <div className="homepage-background">
      <Container maxWidth="xl" className="container">
        {!phoneViewActive ? <AboutMenuBar /> : <MobileAboutMenuBar />}
        {!phoneViewActive ? (
          <ToDoListResourcePage />
        ) : (
          <MobileToDoListResourcePage />
        )}
        {!phoneViewActive ? <Footer /> : <MobileFooter />}
      </Container>
    </div>
  );
}
