"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Link as MUILink,
} from "@mui/material";

export default function MobileJobsElement() {
  const accent = "#ffb000";
  const EMAIL = "findstudenthousingnl@gmail.com";

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        background: "#FFF4E4",
        minHeight: "50vh",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        {/* Intro */}
        <Box sx={{ mx: "auto", mb: 3 }}>
          <Typography sx={{ fontSize: 22, color: "#111", mb: 0.5 }}>
            Join Our Team 👋
          </Typography>
          <Typography sx={{ color: "black", lineHeight: 1.6, fontSize: 16 }}>
            Flexible, friendly, and mission-driven. We’re always keen to meet
            people who want to help students find housing faster.
          </Typography>
        </Box>

        {/* “Open to” bullets */}
        <Box
          sx={{
            background: "#fff",
            borderRadius: 3,
            p: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 800,
              color: "#111",
              mb: 1,
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            What we’re open to
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 3,
              color: "#111",
              lineHeight: 1.7,
              fontSize: 14.5,
              mb: 0,
            }}
          >
            <li>
              Content & Community — video editing, research, social, writing,
              community support
            </li>
            <li>
              Product & Tech — no-code ops, data wrangling, simple dashboards,
              tooling
            </li>
            <li>
              Partnerships — outreach, student groups, universities, landlords,
              agencies
            </li>
            <li>
              Operations — email support, process docs, templates, lightweight
              CRM
            </li>
            <li>
              <strong>We accept anyone</strong> who’s positive, proactive, and
              keen to learn. No “perfect CV” needed.
            </li>
          </Box>
        </Box>

        {/* CTA Card */}
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
              fontSize: 24,
              fontWeight: 800,
              color: "#111",
              mb: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Apply via Email
          </Typography>

          <Typography sx={{ color: "#333", mb: 2, fontSize: 14.5 }}>
            Email a short intro + CV/portfolio (optional) to{" "}
            <MUILink
              href={`mailto:${EMAIL}?subject=Job%20Application`}
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
            href={`mailto:${EMAIL}?subject=Job%20Application`}
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
            Email your application
          </Button>

          <Typography sx={{ color: "#666", fontSize: 12.5, mt: 1.5 }}>
            Subject: <strong>Job Application — Your Name — Area</strong>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
