"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Link as MUILink,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function MobileFooter() {
  const socials = [
    {
      label: "YouTube",
      icon: <YouTubeIcon />,
      href: "https://www.youtube.com/@allaboutstudenthousingnl",
    },
    {
      label: "Instagram",
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/allaboutstudenthousing.nl/",
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/company/find-student-housing-nl/",
    },
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/profile.php?id=61558033202199",
    },
  ];

  const columns: { title: string; links: { label: string; href: string }[] }[] =
    [
      {
        title: "More",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Jobs", href: "/jobs" },
          //{ label: "My Account", href: "/account" },
        ],
      },
      {
        title: "Free Content",
        links: [
          { label: "Database", href: "/database" },
          //{/* label: "Articles & Guides", href: "/articles" */},
          {
            label: "Podcast",
            href: "https://youtu.be/-li7RpqNC-U?si=a2WvvGRCskYEmyaSt",
          },
          {
            label: "Videos",
            href: "https://www.youtube.com/@allaboutstudenthousingnl/videos",
          },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "Email Template", href: "email-template" },
          { label: "To-Do List", href: "/to-do-list" },
          {
            label: "30-Day Search Strategy",
            href: "https://www.findstudenthousing.nl/",
          },
        ],
      },
    ];

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 10 },
        pt: { xs: 3, md: 6 },
        pb: { xs: 6, md: 8 },
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "#FFF4E4",
      }}
    >
      {/* ===== Mobile (xs–sm) ===== */}
      <Box sx={{ display: { xs: "block", md: "none" }, px: 2 }}>
        {/* Logo */}
        <Box sx={{ textAlign: "center", mb: 1.5, transform: "scale(0.80)" }}>
          <Image
            src="/homepage-logo.png"
            alt="Brand logo"
            width={200}
            height={56}
            style={{ height: "auto", width: "auto", maxWidth: "100%" }}
          />
        </Box>

        {/* Copyright */}
        <Typography
          sx={{ textAlign: "center", fontSize: 14, color: "#666", mb: 2 }}
        >
          © 2024 All About Student Housing Netherlands.
          <br />
          All rights reserved.
        </Typography>

        {/* Socials row */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1.5}
          sx={{ flexWrap: "wrap", mb: 3 }}
        >
          {socials.map((s) => (
            <IconButton
              key={s.label}
              aria-label={s.label}
              component={NextLink}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#f7cf79ff",
                color: "#111",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.04)",
                "&:hover": { backgroundColor: "#EDE7E1" },
              }}
            >
              {s.icon}
            </IconButton>
          ))}
        </Stack>

        {/* Link groups (centered, underlined) */}
        <Box sx={{ maxWidth: 520, mx: "auto" }}>
          {columns.map((col, i) => (
            <Box key={col.title} sx={{ mb: 3.5 }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#111",
                  fontSize: 16,
                  mb: 1.5,
                }}
              >
                {col.title}
              </Typography>

              <Stack spacing={1.25} sx={{ alignItems: "center" }}>
                {col.links.map((l) => (
                  <MUILink
                    key={l.label}
                    component={NextLink}
                    href={l.href.startsWith("/") ? l.href : `/${l.href}`}
                    underline="always"
                    sx={{
                      color: "#4A4A4A",
                      fontSize: 16,
                      textDecorationColor: "#f7cf79ff",
                      "&:hover": { color: "#000" },
                    }}
                  >
                    {l.label}
                  </MUILink>
                ))}
              </Stack>

              {/* section divider line */}
              {i < columns.length - 1 && <Divider sx={{ mt: 1 }} />}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
