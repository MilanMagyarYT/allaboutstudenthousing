"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Link as MUILink,
} from "@mui/material";

export default function MobileContactElement() {
  const accent = "#ffb000";
  const EMAIL = "findstudenthousingnl@gmail.com";

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" }, // mobile only
        background: "#FFF4E4",
        minHeight: "50vh",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        {/* Intro + Quick Links */}
        <Box sx={{ mx: "auto", mb: 3 }}>
          <Typography sx={{ fontSize: 16, color: "#111", mb: 0.5 }}>
            Hey Friends 👋
          </Typography>

          <Typography
            sx={{
              color: "#333",
              lineHeight: 1.6,
              fontSize: 14.5,
              mb: 2.5,
            }}
          >
            Whether you’ve got a question about our resources, you’d like to
            collaborate, or you just want to get in touch, our inbox is always
            open. We love hearing from students and newcomers — feel free to
            drop us a message 🙂
          </Typography>

          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 800,
              color: "#111",
              mb: 1,
              letterSpacing: "-0.01em",
            }}
          >
            Quick Links
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 3,
              color: "#111",
              lineHeight: 1.7,
              fontSize: 14.5,
              mb: 3,
            }}
          >
            <li>
              If you’re looking for our socials:{" "}
              <MUILink
                component={NextLink}
                href="https://www.youtube.com/@allaboutstudenthousingnl"
                underline="always"
                sx={{ color: "#444", textDecorationColor: accent }}
              >
                YouTube
              </MUILink>
              ,{" "}
              <MUILink
                component={NextLink}
                href="https://www.instagram.com/allaboutstudenthousing.nl/"
                underline="always"
                sx={{ color: "#444", textDecorationColor: accent }}
              >
                Instagram
              </MUILink>
              ,{" "}
              <MUILink
                component={NextLink}
                href="https://www.linkedin.com/company/find-student-housing-nl/"
                underline="always"
                sx={{ color: "#444", textDecorationColor: accent }}
              >
                LinkedIn
              </MUILink>
            </li>
            <li>
              Check the{" "}
              <MUILink
                component={NextLink}
                href="/resources/email-template"
                underline="always"
                sx={{ color: "#444", textDecorationColor: accent }}
              >
                Email Template
              </MUILink>{" "}
              and{" "}
              <MUILink
                component={NextLink}
                href="/resources/to-do-list"
                underline="always"
                sx={{ color: "#444", textDecorationColor: accent }}
              >
                Housing To-Do List
              </MUILink>
              .
            </li>
            <li>
              Add your rent to the{" "}
              <MUILink
                component={NextLink}
                href="/database"
                underline="always"
                sx={{ color: "#444", textDecorationColor: accent }}
              >
                Student Housing Database
              </MUILink>
              .
            </li>
          </Box>
        </Box>

        {/* Contact Card */}
        <Box
          sx={{
            background: "#fff",
            borderRadius: 3,
            p: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 26,
              fontWeight: 800,
              color: "#111",
              mb: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            Contact us
          </Typography>

          <Typography sx={{ color: "#333", mb: 2, fontSize: 14.5 }}>
            Need help or have a question? Email us at{" "}
            <MUILink
              href={`mailto:${EMAIL}`}
              underline="always"
              sx={{
                color: "#111",
                textDecorationColor: accent,
                fontWeight: 700,
              }}
            >
              {EMAIL}
            </MUILink>
            .
          </Typography>

          <Button
            component="a"
            href={`mailto:${EMAIL}`}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: accent,
              color: "#111",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: 999,
              py: 1.25,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#e6a000", boxShadow: "none" },
            }}
          >
            Email us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
