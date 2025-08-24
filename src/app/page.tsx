"use client";

import Container from "@mui/material/Container";
import "./HomePage.css";
import Menubar from "./MenuBar";
import MobileMenuBar from "./MobileMenuBar";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });

  return (
    <div className="homepage-background">
      <Container maxWidth="xl" className="container">
        {!phoneViewActive ? <Menubar /> : <MobileMenuBar />}
      </Container>
    </div>
  );
}
