"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function AboutDesktopContent() {
  return (
    <Box sx={{ mt: 0, mb: 5 }}>
      {/* ===== Section 1: My Journey (middle) ===== */}
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          alignItems: "center",
          gap: 8,
          mb: 5,
        }}
      >
        {/* Copy (left) */}
        <Box>
          <Typography
            sx={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "black",
              lineHeight: 1.05,
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
            sx={{
              mt: 3,
              color: "#222",
              lineHeight: 1.7,
              fontSize: 18,
              maxWidth: 700,
            }}
          >
            {/* TODO: Replace with your own “journey” paragraph(s) */}
            Started helping students with finding housing in 2024, when we
            started posting Social Media interviews with students in Groningen.
            We spent all our free time offer free valuable tips and advice to
            hundreds of students every month.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#222",
              lineHeight: 1.7,
              fontSize: 18,
              maxWidth: 700,
            }}
          >
            {/* TODO: Replace */} Our growth so far is because we desperately
            want to make a change in the lives of the students who want to start
            their studies in the Netherlands.
          </Typography>
        </Box>

        {/* Image collage (right) */}
        <Box sx={{ position: "relative", minHeight: 520 }}>
          {/* accent lines */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(70% 70% at 65% 60%, rgba(85,207,230,0.15), transparent)",
              borderRadius: 6,
            }}
          />
          <Box
            sx={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 4,
              p: 5,
            }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/IMG_7845.jpg"
                alt=""
                width={420}
                height={260}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                alignSelf: "end",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/IMG_9782.jpg"
                alt=""
                width={320}
                height={220}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
            <Box
              sx={{
                gridColumn: "1 / span 2",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/IMG_9245.jpg"
                alt=""
                width={840}
                height={420}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ===== Section 1: Quick Facts (top) ===== */}
      <Box
        sx={{
          bgcolor: "#FFEACC",
          borderRadius: 3,
          p: 6,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: 48 },
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
          sx={{
            mt: 2,
            fontSize: 22,
            maxWidth: 980,
            lineHeight: 1.5,
            color: "#222",
          }}
        >
          {/* TODO: Replace with your own one-sentence bio */}
          We&apos;re two Software Engineers turned Start-up Founders, Housing
          Experts, here to help you with moving to the Netherlands, more
          securily, accessibly & stress-free!{" "}
          {/* Keep structure; replace content. */}
        </Typography>

        <Typography
          sx={{ mt: 6, fontSize: 24, fontWeight: 700, color: "black" }}
        >
          Quick Facts{" "}
          <Box component="span" sx={{ fontWeight: 800 }}>
            About Us
          </Box>
        </Typography>

        {/* Two-column bullet list */}
        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 6,
            rowGap: 2.5,
          }}
        >
          {/* LEFT COLUMN */}
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • {/* TODO: Replace */} We started our journey in the Netherlands as
            Computer Science students at the University of Groningen in 2022.
            From there, in the first month of our studies at one of our courses,
            we randomly met each other and started bonding because of a terribly
            difficult assignment that Andrei helped Milan with. From that day
            on, we have been inseperable, going through 3 beautiful years
            together.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • {/* TODO: Replace */} The project started because of a very simple
            reason. As great friends, meeting in our first year of university,
            we have both lived terrible housing experiences in that year. Milan
            moved 5 times in the span of 10 months, moving from home to home,
            never knowing what will come next. On the other hand, Andrei had a
            terrible start to his journey, as he had to bear the costs of living
            in a hotel for the first month. In that time living of 5 euro salads
            to spear some money.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • {/* TODO: Replace */} The project first started in February 2024,
            from two ideas. Milan wanted to start a Social Media series doing
            interviews about the experiences of students in the Netherlands,
            while Andrei wanted to dive deeper into his craft, as a son of
            Architects, and planned to work more in the housing space.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • {/* TODO: Replace */} After having an incredible Social Media
            growth, being able to capture authentic human experiences through
            our street interviews, we started helping hundreds of students on a
            monthly basis with the experience of searching for housing in the
            Netherlands offering free help. This turned into the opportunity of
            writing our first eBook teaching students how to find housing in
            under 30 days.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • {/* TODO: Replace */} The informational content our pages and
            website will take into account the entire journey of a student from
            the early phases of getting accepted to study in the Netherlands, up
            until already living here and wanting to find a new rental, apply
            for allowances, and many more.
          </Typography>
          <Typography sx={{ color: "#222", lineHeight: 1.6 }}>
            • {/* TODO: Replace */} When it comes to our background, both of us
            love pretty much the same things. As juniors engineers we both seek
            the opportunity to build in the future our own application for
            finding housing more accessibly by students. Together with that
            aiming to help over 1000 students find housing in 2025.
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
