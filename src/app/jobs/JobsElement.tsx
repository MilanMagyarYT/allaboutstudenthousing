"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Link as MUILink,
} from "@mui/material";

export default function JobsElement() {
  const accent = "#ffb000";
  const EMAIL = "findstudenthousingnl@gmail.com";

  return (
    <Box
      sx={{ background: "#FFF4E4", minHeight: "60vh", py: { xs: 4, md: 8 } }}
    >
      <Container maxWidth="lg">
        {/* Intro */}
        <Box sx={{ maxWidth: 920, mx: "auto", mb: 4 }}>
          <Typography sx={{ fontSize: 32, color: "#111", mb: 1 }}>
            Join Our Team 👋
          </Typography>
          <Typography
            sx={{ color: "black", lineHeight: 1.7, mb: 3, fontSize: 18 }}
          >
            If you’re looking for a role with flexibility, autonomy, and real
            impact on thousands of students moving to the Netherlands, you’re in
            the right place. We’re almost always on the lookout for{" "}
            <strong>smart, kind, curious people</strong> to help us build
            content and products that make housing simpler and more accessible.
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: 920,
            mx: "auto",
            mb: 4,
            background: "#fff",
            borderRadius: 3,
            p: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 800,
              color: "#111",
              mb: 1,
              letterSpacing: "-0.01em",
            }}
          >
            What we’re open to
          </Typography>

          <Box
            component="ul"
            sx={{ pl: 3, color: "#111", lineHeight: 1.8, mb: 4 }}
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
              fontSize: { xs: 26, md: 36 },
              fontWeight: 800,
              color: "#111",
              mb: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            Apply via Email
          </Typography>

          <Typography sx={{ color: "#333", mb: 2 }}>
            Send a short intro, your CV or portfolio (if you have one), and the
            kind of work you’d like to do to{" "}
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

          <Typography sx={{ color: "#666", fontSize: 14, mb: 2 }}>
            Helpful subject line:{" "}
            <strong>“Job Application — [Your Name] — [Area]”</strong>
          </Typography>

          <Button
            component="a"
            href={`mailto:${EMAIL}?subject=Job%20Application`}
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
            Email your application
          </Button>

          <Box sx={{ mt: 2 }}>
            <Typography sx={{ color: "#666", fontSize: 14 }}>
              P.S. If you don’t see a role that fits, email us anyway. We shape
              roles around great people.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
