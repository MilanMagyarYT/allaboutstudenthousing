"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./HomePage.css";
import HeroSection from "./HeroSection";

export default function Home() {
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });
  const [open, setOpen] = useState(false);

  const menuItems = ["About", "Free Resources", "Housing Products"];

  return (
    <div className="homepage-background">
      <Container maxWidth="xl" className="container">
        {!phoneViewActive ? (
          <Box
            sx={{
              bgcolor: "#FFEACC",
              height: "100vh",
              pl: "1.5rem",
              pt: "2.5rem",
              pb: "1.5rem",
              pr: "5rem",
              borderRadius: "20px",
            }}
          >
            {/* Desktop header */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <picture>
                <img
                  src="homepage-logo.png"
                  alt="Home Page Logo"
                  width="300"
                  className="homepage-logo"
                />
              </picture>

              {/* Push menu to the right without hardcoding margin */}
              <Box
                className="menubar-items"
                sx={{ display: "flex", alignItems: "center", ml: "auto" }}
              >
                <Typography
                  sx={{ minWidth: 100, color: "black", fontSize: 18 }}
                >
                  About
                </Typography>
                <Typography
                  sx={{
                    minWidth: 100,
                    color: "black",
                    fontSize: 18,
                    ml: "2rem",
                  }}
                >
                  Free Resources
                </Typography>
                <Typography
                  sx={{
                    minWidth: 100,
                    color: "black",
                    fontSize: 18,
                    ml: "2rem",
                  }}
                >
                  Housing Products
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "#ffb000",
                    fontSize: 18,
                    ml: "2rem",
                    textTransform: "capitalize",
                    px: "2rem",
                    py: "0.35rem",
                    borderRadius: "20px",
                  }}
                >
                  Join Database
                </Button>
              </Box>
            </Box>
            <HeroSection />
          </Box>
        ) : (
          // ----------------- MOBILE VIEW -----------------
          <Box
            sx={{
              bgcolor: "#FFEACC",
              height: "100vh",
              p: "1rem",
              mx: "0.5rem",
              borderRadius: "20px",
            }}
          >
            {/* Mobile header: logo left, hamburger right */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <picture>
                <img
                  src="homepage-logo.png"
                  alt="Home Page Logo"
                  width="225"
                  className="homepage-mobile-logo"
                />
              </picture>

              <IconButton
                aria-label="open menu"
                onClick={() => setOpen(true)}
                sx={{
                  backgroundColor: "#ffb000",
                  borderRadius: "12px",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "#e6a000",
                  },
                }}
                size="large"
              >
                <MenuIcon sx={{ color: "black", fontSize: 28 }} />
              </IconButton>
            </Box>

            {/* Right-side drawer menu */}
            <Drawer
              anchor="right"
              open={open}
              PaperProps={{ sx: { width: "100%", p: 2 } }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mb: 2, // spacing below
                }}
              >
                <IconButton
                  aria-label="close menu"
                  onClick={() => setOpen(false)}
                  sx={{
                    backgroundColor: "#ffb000",
                    borderRadius: "12px",
                    p: 1.5,
                    "&:hover": {
                      backgroundColor: "#e6a000",
                    },
                  }}
                  size="large"
                >
                  <CloseIcon sx={{ color: "black", fontSize: 28 }} />
                </IconButton>
              </Box>

              <List>
                {menuItems.map((text) => (
                  <ListItemButton key={text}>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ fontSize: 16, color: "black" }}
                    />
                  </ListItemButton>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  color: "black",
                  backgroundColor: "#ffb000",
                  textTransform: "capitalize",
                  fontSize: 18,
                  px: "2rem",
                  py: "0.35rem",
                  borderRadius: "20px",
                }}
              >
                Join Database
              </Button>
            </Drawer>
          </Box>
        )}
      </Container>
    </div>
  );
}
