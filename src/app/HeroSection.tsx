/* Place this inside your desktop branch, right under the header Box */

import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box sx={{ mt: 6 }}>
      {/* Top row: image left, text right */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "460px 1fr" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Portrait with abstract shape */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 460,
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              background:
                "radial-gradient(60% 60% at 40% 40%, rgba(255,176,0,0.25), rgba(255,176,0,0))",
              transform: "rotate(-8deg)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              borderRadius: "999px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          >
            {/* Replace src with your cutout */}
            <Image
              src="/hero-portrait.png"
              alt="Portrait"
              width={300}
              height={300}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>
        </Box>

        {/* Headline + subcopy */}
        <Box sx={{ pr: { md: 2 } }}>
          <Typography
            sx={{
              fontSize: { xs: 40, md: 72 },
              color: "black",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Hey Housing Seekers
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </Typography>

          {/* underline accent */}
          <Box
            sx={{
              mt: 1,
              mb: 3,
              height: 8,
              width: 180,
              borderRadius: 999,
              backgroundColor: "#55cfe6",
            }}
          />

          <Typography
            sx={{ fontSize: { xs: 18, md: 22 }, color: "#222", maxWidth: 760 }}
          >
            We are Milan & Andrei. The two of us, moved to the Netherlands
            3-years ago for our studies, but never imagined what would await us.
            From living illegally, in hotels, and even on friends couches, we
            went through it all, reason for why we started this project!{" "}
            <Box
              component="span"
              sx={{ fontWeight: 700, textDecoration: "underline" }}
            >
              Aimed for students with the help of students by students.
            </Box>
            .
          </Typography>
        </Box>
      </Box>

      {/* Subscribe card */}
      <Box
        sx={{
          mt: { xs: 5, md: 7 },
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
            gap: { xs: 3, md: 5 },
          }}
        >
          {/* Left: title + social proof */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 38 },
                fontWeight: 300,
                color: "black",
              }}
            >
              Join our
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 38, md: 52 },
                fontWeight: 800,
                lineHeight: 1,
                color: "black",
              }}
            >
              Database
            </Typography>

            <Typography sx={{ mt: 2, color: "#444" }}>
              Join a growing community of more than 1000 students and rental
              prices already registered in the Netherlands.
            </Typography>

            {/* small avatars / stars (optional) */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <Typography sx={{ color: "#666" }}>50+ reviews ★★★★★</Typography>
            </Box>
          </Box>

          {/* Right: input + button */}
          <Box>
            <Typography sx={{ color: "#444", mb: 2 }}>
              Join the database where students share what they pay for housing
              in the Netherlands — see real rental prices and share your own.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                background: "#fff",
                borderRadius: 999,
                p: 1,
                alignItems: "center",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
              }}
            >
              <MailOutlineIcon sx={{ ml: 2 }} />
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 16,
                  padding: "12px 8px",
                  background: "transparent",
                  color: "black",
                }}
                onChange={() => {
                  console.log("ciao");
                }}
              />
              <Button
                variant="contained"
                sx={{
                  mr: 1,
                  borderRadius: 999,
                  px: 3.5,
                  py: 1.25,
                  textTransform: "none",
                  fontWeight: 700,
                  backgroundColor: "#ffb000",
                  color: "#111",
                  "&:hover": { backgroundColor: "#e6a000" },
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Typography sx={{ mt: 1.5, fontSize: 12, color: "#777" }}>
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
