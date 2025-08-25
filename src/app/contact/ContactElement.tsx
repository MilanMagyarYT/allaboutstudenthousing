"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Link as MUILink,
} from "@mui/material";

export default function ContactElement() {
  const accent = "#ffb000";
  const EMAIL = "findstudenthousingnl@gmail.com";

  return (
    <Box
      sx={{ background: "#FFF4E4", minHeight: "50vh", py: { xs: 4, md: 8 } }}
    >
      <Container maxWidth="lg">
        {/* Intro + Quick Links */}
        <Box sx={{ maxWidth: 920, mx: "auto", mb: 4 }}>
          <Typography sx={{ fontSize: 18, color: "#111", mb: 1 }}>
            Hey Friends 👋
          </Typography>
          <Typography sx={{ color: "#333", lineHeight: 1.7, mb: 3 }}>
            Whether you’ve got a question about our resources, you’d like to
            collaborate, or you just want to get in touch, our inbox is always
            open. We love hearing from students and newcomers — feel free to
            drop us a message 🙂
          </Typography>

          <Typography
            sx={{
              fontSize: 28,
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
            sx={{ pl: 3, color: "#111", lineHeight: 1.8, mb: 4 }}
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

        {/* Contact Card (no form) */}
        <Box
          sx={{
            maxWidth: 920,
            mx: "auto",
            background: "#fff",
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 800,
              color: "#111",
              mb: 2,
              letterSpacing: "-0.01em",
            }}
          >
            Contact us
          </Typography>

          <Typography sx={{ color: "#333", mb: 2 }}>
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
            sx={{
              backgroundColor: accent,
              color: "#111",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: 999,
              px: 6,
              py: 1.5,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#e6a000", boxShadow: "none" },
              mt: 1,
            }}
          >
            Email us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
