import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button, Typography } from "@mui/material";

export default function MobileHeroSection() {
  return (
    <Box sx={{ mt: 2 }}>
      {/* Top row: image | text (stacks on mobile) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "460px 1fr" }, // 1 column on mobile
          alignItems: "center",
          gap: { xs: 2, md: 2 },
        }}
      >
        {/* Portrait with abstract shape */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: 300, md: 460 }, // smaller on mobile
            mx: { xs: "auto", md: 0 }, // center on mobile
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
            <Image
              src="/IMG_9245.jpg"
              alt="Portrait"
              width={150}
              height={150}
              style={{ display: "block", width: "100%", height: "auto" }}
              priority
            />
          </Box>
        </Box>

        {/* Headline + subcopy */}
        <Box sx={{ pr: { md: 2 }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 36 },
              color: "black",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Hey Housing Seekers{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </Typography>

          {/* underline accent */}
          <Box
            sx={{
              mt: 1,
              mb: 2,
              height: 5,
              width: 180,
              borderRadius: 999,
              backgroundColor: "#ffb000",
              mx: { xs: "auto", md: 0 }, // center underline on mobile
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: 14, md: 22 },
              color: "#222",
              maxWidth: 760,
              mx: { xs: "auto", md: 0 },
            }}
          >
            We&apos;re Milan & Andrei. We&apos;re two Software Developers turned
            Start-up Founders, Housing Experts, here to help you move to the
            Netherlands,{" "}
            <Box
              component="span"
              sx={{ fontWeight: 700, textDecoration: "underline" }}
            >
              more securily, accessibly & stress-free
            </Box>
            .
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
