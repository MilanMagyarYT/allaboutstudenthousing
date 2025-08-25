"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function ToDoListResourcePage() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const triggerDownload = () => {
    // Triggers download of /public/todolist.pdf
    if (!downloadRef.current) return;
    downloadRef.current.href = "/todolist.pdf";
    downloadRef.current.download = "todolist.pdf";
    downloadRef.current.click();
  };

  const onSubmit = async () => {
    // TODO: save `email` to your DB / ESP here (no validation by design)
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email, tag: "email-template" }) });

    setUnlocked(true);
    triggerDownload();
  };

  const accent = "#ffb000";

  return (
    <Box sx={{ mt: 6, mb: 10 }}>
      {/* ===== Section 1: Hero (title + short intro + right image) ===== */}
      <Box
        sx={{
          // center the whole section in the page
          maxWidth: 1100, // tweak to taste (e.g. 1040 / 1140)
          mx: "auto",
          px: { xs: 1, md: 2 },

          display: "grid",
          // use fixed-ish tracks so the grid doesn't expand to full width
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 700px) minmax(0, 360px)", // ~70/30 feel
          },
          alignItems: "center",
          gap: { xs: 3, md: 8 },
        }}
      >
        {/* LEFT: text */}
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            sx={{
              fontSize: { xs: 34, md: 56 },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "black",
              lineHeight: 1.05,
              mb: 2,
            }}
          >
            Student Housing To-Do List
          </Typography>

          <Typography
            sx={{
              color: "#222",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              // remove this if you set track width above; or keep but <= left track
              maxWidth: { md: 700 },
            }}
          >
            Searching for housing in the Netherlands is stressful — but with the
            right structure and daily routine, you can massively improve your
            chances of securing a place. We created this step-by-step To-Do List
            that walks you through preparation, daily applications, viewings,
            and finalizing your rental. Think of it as your housing action plan
            to go from zero to contract in under 30 days.
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
              maxWidth: 360, // don't blow up the 300px asset
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

      {/* ===== Section 2: Deep dive (two blocks, full width) ===== */}
      <Box
        sx={{
          bgcolor: "#FFEACC",
          borderRadius: 3,
          p: 6,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          mt: { xs: 4, md: 8 },
          ml: 10,
          mr: 10,
          display: "grid",
          gap: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 28 },
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
              pl: 3, // indent bullets
              color: "#222",
              lineHeight: 1.8,
              fontSize: { xs: 16, md: 18 },
              "& li": { mb: 1 }, // space between bullets
            }}
          >
            <li>
              A <strong>4-phase framework</strong> that covers the entire
              housing journey: preparation, daily applications, viewings, and
              securing the room.
            </li>
            <li>
              A <strong>daily routine checklist</strong> (morning, midday,
              afternoon) so you never miss opportunities.
            </li>
            <li>
              Key reminders to <strong>avoid scams</strong>, ask the right
              questions, and follow up effectively.
            </li>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 28 },
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
            Print it out or keep it open on your phone. Tick off each item as
            you go — from preparing your documents and accounts, to applying
            daily, to handling viewings and contracts. By following this
            checklist consistently, you’ll maximize your speed, stay organized,
            and secure housing faster in the Netherlands’ competitive rental
            market.
          </Typography>
        </Box>
      </Box>

      {/* ===== Section 3: Email → Download ===== */}
      <Box
        sx={{
          mt: { xs: 5, md: 7 },
          backgroundColor: "#fff7f0",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          ml: 10,
          mr: 10,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 26, md: 32 },
            fontWeight: 800,
            color: "black",
            mb: 1,
          }}
        >
          Get Your Free To-Do List PDF
        </Typography>
        <Typography sx={{ color: "#444", mb: 2 }}>
          Enter your email below to unlock the Housing To-Do List (PDF). This
          resource will keep you accountable and structured during your housing
          search. You’ll also receive occasional tips on how to avoid scams and
          make the process less stressful.
        </Typography>

        {!unlocked ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: "#fff",
              borderRadius: 999,
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
          We’ll email you helpful housing tips occasionally. You can opt out any
          time.
        </Typography>

        {/* Hidden anchor used to trigger the file download */}
        <a ref={downloadRef} style={{ display: "none" }} />
      </Box>
    </Box>
  );
}
