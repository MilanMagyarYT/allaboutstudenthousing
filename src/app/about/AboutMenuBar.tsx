import { Box, Button, Link, Typography } from "@mui/material";
import "./AboutPage.css";
import FreeResourcesDropdown from "../FreeResourcesDropdown";

export default function AboutMenuBar() {
  return (
    <Box
      sx={{
        bgcolor: "#FFEACC",
        pl: "1.5rem",
        pt: "1.5rem",
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
            component={Link}
            href="/about"
            sx={{
              minWidth: 100,
              color: "black",
              fontSize: 18,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            About
          </Typography>
          <FreeResourcesDropdown />
          <Typography
            sx={{
              minWidth: 100,
              color: "black",
              fontSize: 18,
              ml: "2rem",
            }}
          >
            30-Day Search Strategy
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
    </Box>
  );
}
