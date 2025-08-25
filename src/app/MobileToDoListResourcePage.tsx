"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function MobileToDoListResourcePage() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const triggerDownload = () => {
    if (!downloadRef.current) return;
    downloadRef.current.href = "/emailtemplate.pdf";
    downloadRef.current.download = "emailtemplate.pdf";
    downloadRef.current.click();
  };

  const onSubmit = async () => {
    // TODO: save `email` to your DB / ESP here
    setUnlocked(true);
    triggerDownload();
  };

  const accent = "#ffb000";

  return (
    <Box sx={{ mt: 3, mb: 10 }}>
      {/* ===== Section 1: Hero (title + intro + image) ===== */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, md: 2 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 700px) minmax(0, 360px)",
          },
          alignItems: "center",
          gap: { xs: 3, md: 8 },
        }}
      >
        {/* LEFT: text */}
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            sx={{
              fontSize: { xs: 30, md: 56 },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "black",
              lineHeight: 1.08,
              mb: 2,
            }}
          >
            Email Template for Landlords
          </Typography>

          <Typography
            sx={{
              color: "#222",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              maxWidth: { md: 700 },
            }}
          >
            Finding housing in the Netherlands can be overwhelming, especially
            for international students and newcomers. A professional,
            well-structured email is often the difference between getting a
            reply or being ignored. That’s why we’ve created ready-to-use Email
            Templates to help you introduce yourself, follow up, and even
            negotiate rent with landlords and housing agencies — so you can
            stand out and save time.
          </Typography>
        </Box>

        {/* RIGHT: image card */}
        <Box sx={{ position: "relative", order: { xs: 1, md: 2 } }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2, md: 3 },
              mx: { xs: "auto", md: 0 },
              maxWidth: 360,
              background: "#fff8",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: 3,
                background:
                  "radial-gradient(70% 70% at 65% 60%, rgba(255,176,0,.2), transparent)",
                zIndex: -1,
              },
            }}
          >
            <Image
              src="/to-do-list-hero.png"
              alt="Email template preview"
              width={300}
              height={300}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxWidth: 300,
                objectFit: "contain",
              }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* ===== Sections 2 & 3 side-by-side on desktop, stacked on mobile ===== */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          mt: { xs: 4, md: 8 },
          px: { xs: 2, md: 2 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" }, // ~70/30
          gap: { xs: 2.5, md: 4 },
          alignItems: "start",
        }}
      >
        {/* ===== Section 2: Deep dive ===== */}
        <Box
          sx={{
            bgcolor: "#FFEACC",
            borderRadius: 3,
            p: { xs: 2.5, md: 6 },
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 20, md: 28 },
                fontWeight: 800,
                color: "black",
                mb: 1,
              }}
            >
              What’s inside
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: { xs: 2, md: 3 },
                color: "#222",
                lineHeight: 1.8,
                fontSize: { xs: 16, md: 18 },
                "& li": { mb: 1 },
              }}
            >
              <li>
                A step-by-step breakdown of the{" "}
                <strong>perfect housing email structure</strong> (intro,
                personal info, lifestyle, guarantors, closing).
              </li>
              <li>
                <strong>Real-life successful email examples</strong> from
                students who secured housing.
              </li>
              <li>
                A copy-and-paste <strong>blueprint template</strong> that you
                can instantly personalise for your own applications.
              </li>
            </Box>
          </Box>

          <Box sx={{ mt: { xs: 2.5, md: 4 } }}>
            <Typography
              sx={{
                fontSize: { xs: 20, md: 28 },
                fontWeight: 800,
                color: "black",
                mb: 1,
              }}
            >
              How to use
            </Typography>
            <Typography
              sx={{
                color: "#222",
                lineHeight: 1.8,
                fontSize: { xs: 16, md: 18 },
              }}
            >
              We’ve tested and refined these emails across dozens of
              applications. The structure shows landlords that you’re reliable,
              respectful, and serious about renting. By following this proven
              format, you increase your chances of getting replies and
              invitations to viewings — even in a competitive Dutch housing
              market.
            </Typography>
          </Box>
        </Box>

        {/* ===== Section 3: Email → Download ===== */}
        <Box
          sx={{
            backgroundColor: "#fff7f0",
            borderRadius: 3,
            p: { xs: 2.5, md: 4 },
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            textAlign: "center",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, md: 32 },
              fontWeight: 800,
              color: "black",
              mb: 1,
            }}
          >
            Get Your Free PDF Template
          </Typography>
          <Typography sx={{ color: "#444", mb: 2 }}>
            Enter your email below to unlock the Email Template for Landlords
            (PDF). You’ll also receive occasional tips on how to avoid scams,
            secure viewings, and make your housing search less stressful.
          </Typography>

          {!unlocked ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                background: "#fff",
                borderRadius: 5,
                p: 1,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
                width: "100%",
                maxWidth: 560,
                mx: "auto",
                flexWrap: "wrap",
              }}
            >
              <MailOutlineIcon sx={{ ml: 1, flexShrink: 0 }} />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  border: "none",
                  outline: "none",
                  fontSize: 16,
                  padding: "12px 8px",
                  background: "transparent",
                  color: "black",
                }}
              />
              <Button
                onClick={onSubmit}
                variant="contained"
                sx={{
                  flexShrink: 0,
                  borderRadius: 999,
                  px: 3,
                  py: 1.1,
                  textTransform: "none",
                  fontWeight: 700,
                  backgroundColor: accent,
                  color: "black",
                  "&:hover": { backgroundColor: "#e6a000" },
                  width: { xs: "100%", sm: "auto" },
                  mt: { xs: 1, sm: 0 },
                }}
              >
                Submit
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                onClick={triggerDownload}
                variant="contained"
                sx={{
                  borderRadius: 999,
                  px: 4,
                  py: 1.25,
                  textTransform: "none",
                  fontWeight: 800,
                  backgroundColor: accent,
                  color: "black",
                  "&:hover": { backgroundColor: "#e6a000" },
                }}
              >
                Download again
              </Button>
            </Box>
          )}

          <Typography sx={{ mt: 1.5, fontSize: 12, color: "#777" }}>
            We’ll email you helpful housing tips occasionally. You can opt out
            any time.
          </Typography>

          <a ref={downloadRef} style={{ display: "none" }} />
        </Box>
      </Box>
    </Box>
  );
}
