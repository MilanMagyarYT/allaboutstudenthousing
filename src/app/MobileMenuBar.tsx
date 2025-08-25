"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./HomePage.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileHeroSection from "./MobileHeroSection";
import { useRouter } from "next/navigation";
import FreeResourcesDropdown from "./FreeResourcesDropdown";

export default function MobileMenubar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Box
      sx={{
        bgcolor: "#FFEACC",
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
          <ListItemButton
            onClick={() => {
              // add analytics here if needed
              router.push("/about");
            }}
          >
            <ListItemText
              primary="About"
              primaryTypographyProps={{ fontSize: 16, color: "black" }}
            />
          </ListItemButton>
          <FreeResourcesDropdown />
          <ListItemButton
            onClick={() => {
              // do stuff (close drawer, log analytics, etc.)
              router.push("https://www.findstudenthousing.nl/");
            }}
          >
            <ListItemText
              primary="30-Day Search Strategy"
              primaryTypographyProps={{ fontSize: 16, color: "black" }}
            />
          </ListItemButton>
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
      <MobileHeroSection />
    </Box>
  );
}
