"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AutoSlideshow from "./AutoSlideShow";

export default function AboutMobileContent() {
  return (
    <Box sx={{ mt: 2, mb: 6, px: 1 }}>
      {/* ===== My Journey (stacked) ===== */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        {/* Image collage (top) */}

        {/* Copy */}
        <Box sx={{ textAlign: "left", px: 1 }}>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "black",
              lineHeight: 1.15,
            }}
          >
            Our Journey from{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, textDecoration: "underline" }}
            >
              Students
            </Box>{" "}
            to{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 900,
                textDecoration: "underline",
                textDecorationThickness: 6,
                color: "black",
                textDecorationColor: "#ffb000",
              }}
            >
              Student Housing Experts
            </Box>
          </Typography>

          <Typography
            sx={{ mt: 2, color: "#222", lineHeight: 1.7, fontSize: 16 }}
          >
            Started helping students with finding housing in 2024, when we
            started posting Social Media interviews with students in Groningen.
            We spent all our free time offer free valuable tips and advice to
            hundreds of students every month.
          </Typography>

          <Typography
            sx={{ mt: 1.5, color: "#222", lineHeight: 1.7, fontSize: 16 }}
          >
            Our growth so far is because we desperately want to make a change in
            the lives of the students who want to start their studies in the
            Netherlands.
          </Typography>
        </Box>

        <AutoSlideshow />
      </Box>

      {/* ===== Quick Facts (card) ===== */}
      <Box
        sx={{
          bgcolor: "#FFEACC",
          borderRadius: 3,
          p: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 800,
            color: "black",
            letterSpacing: "-0.02em",
          }}
        >
          Hey, we're{" "}
          <Box component="span" sx={{ textDecoration: "underline" }}>
            Milan & Andrei
          </Box>{" "}
          👋
        </Typography>

        <Typography
          sx={{ mt: 1.5, fontSize: 14, lineHeight: 1.6, color: "#222" }}
        >
          We&apos;re two Software Engineers turned Start-up Founders, Housing
          Experts, here to help you with moving to the Netherlands, more
          securily, accessibly & stress-free!
        </Typography>

        <Typography
          sx={{ mt: 3, fontSize: 20, fontWeight: 700, color: "black" }}
        >
          Quick Facts{" "}
          <Box component="span" sx={{ fontWeight: 800 }}>
            About Us
          </Box>
        </Typography>

        {/* single column bullets on mobile */}
        <Box
          sx={{
            mt: 2,
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: 1.75,
          }}
        >
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • The project started because of a very simple reason. As great
            friends, meeting in our first year of university, we have both lived
            terrible housing experiences in that year. Milan moved 5 times in
            the span of 10 months, moving from home to home, never knowing what
            will come next. On the other hand, Andrei had a terrible start to
            his journey, as he had to bear the costs of living in a hotel for
            the first month. In that time living of 5 euro salads to spear some
            money.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • The informational content our pages and website will take into
            account the entire journey of a student from the early phases of
            getting accepted to study in the Netherlands, up until already
            living here and wanting to find a new rental, apply for allowances,
            and many more.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • When it comes to our background, both of us love pretty much the
            same things. As juniors engineers we both seek the opportunity to
            build in the future our own application for finding housing more
            accessibly by students. Together with that aiming to help over 1000
            students find housing in 2025.
          </Typography>
        </Box>
      </Box>

      {/* Subscribe card */}
      <Box
        sx={{
          mt: { xs: 3, md: 7 },
          backgroundColor: "#fff7f0",
          borderRadius: 20,
          p: { xs: 3, md: 4 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            alignItems: "center",
            gap: { xs: 2, md: 5 },
          }}
        >
          {/* Left: title + social proof */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: 22, md: 38 },
                fontWeight: 300,
                color: "black",
              }}
            >
              Join our
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 30, md: 52 },
                fontWeight: 800,
                lineHeight: 1,
                color: "black",
              }}
            >
              Database
            </Typography>

            <Typography sx={{ mt: 2, color: "#444", fontSize: 12 }}>
              Join a growing community of more than 1000 students and rental
              prices already registered in the Netherlands.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                mt: 1,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <Typography sx={{ color: "#666", fontSize: 12 }}>
                50+ reviews ★★★★★
              </Typography>
            </Box>
          </Box>

          {/* Right: input + button */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, minWidth: 0 }}>
            <Typography sx={{ color: "#444", mb: 1.5, fontSize: 12 }}>
              Join the database where students share what they pay for housing
              in the Netherlands — see real rental prices and share your own.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                background: "#fff",
                borderRadius: 5,
                p: 1,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
                width: "100%", // 👈 keep inside parent
                flexWrap: { xs: "wrap", sm: "nowrap" }, // 👈 allow wrap on tiny screens
              }}
            >
              <MailOutlineIcon sx={{ ml: 1, flexShrink: 0 }} />

              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  minWidth: 0, // 👈 lets input shrink
                  border: "none",
                  outline: "none",
                  fontSize: 12,
                  padding: "12px 8px",
                  background: "transparent",
                  color: "black",
                }}
              />

              <Button
                variant="contained"
                sx={{
                  flexShrink: 0,
                  borderRadius: 999,
                  fontSize: 12,
                  px: { xs: 1, md: 2 },
                  py: 1,
                  textTransform: "none",
                  fontWeight: 700,
                  backgroundColor: "#ffb000",
                  color: "black",
                  "&:hover": { backgroundColor: "#e6a000" },
                  width: { xs: "100%", sm: "auto" }, // 👈 full-width when wrapped
                  mt: { xs: 0, sm: 0 }, // spacing when wrapped
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Typography sx={{ mt: 1, fontSize: 8, color: "#777" }}>
              By submitting this form, you’ll be signed up to our free
              newsletter. You can opt-out any time. And you will receive an
              email about joining the rental database.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
