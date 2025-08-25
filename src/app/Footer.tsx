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

export default function Footer() {
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
        pt: { xs: 4, md: 6 },
        pb: { xs: 6, md: 8 },
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "#FFF4E4",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 3 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr 1fr" },
          gap: { xs: 24, md: 6 },
          alignItems: "start",
        }}
      >
        {/* Left: logo, rights, socials */}
        <Box>
          {/* Replace with your logo */}
          <Box sx={{ mb: 1.5, display: "inline-block" }}>
            {/* png/svg path; adjust width/height */}
            <Image
              src="/homepage-logo.png"
              alt="Brand logo"
              width={180}
              height={48}
              style={{ height: "auto", width: "auto", maxWidth: "100%" }}
            />
          </Box>

          <Typography sx={{ color: "#555", mb: 2 }}>
            © 2024 Your Brand. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap" }}>
            {socials.map((s) => (
              <IconButton
                key={s.label}
                aria-label={s.label}
                component={NextLink}
                href={s.href}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#f7cf79ff",
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.12)" },
                  color: "#111",
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>

        {/* Right: 3 link columns */}
        {columns.map((col) => (
          <Box key={col.title}>
            <Typography
              sx={{ fontWeight: 700, mb: 1.5, color: "#111", fontSize: 16 }}
            >
              {col.title}
            </Typography>
            <Stack spacing={1}>
              {col.links.map((l) => (
                <MUILink
                  key={l.label}
                  component={NextLink}
                  href={l.href}
                  underline="always"
                  sx={{
                    color: "#444",
                    fontSize: 15,
                    textDecorationColor: "#ffb000",
                    "&:hover": { color: "#000" },
                  }}
                >
                  {l.label}
                </MUILink>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>

      {/* Mobile-only bottom bar */}
      <Box sx={{ display: { xs: "block", md: "none" }, mt: 4 }}>
        <Divider sx={{ mb: 2 }} />
        <Typography
          sx={{ textAlign: "center", fontSize: 13, color: "#666", px: 2 }}
        >
          Built with love for students moving to the Netherlands.
        </Typography>
      </Box>
    </Box>
  );
}
