"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function FreeResourceTemplate(props) {
  const {
    // Section 1 (hero)
    title = "Resource Title",
    intro = "Short one-liner explaining what this resource is and why it's useful.",
    heroImageSrc = "/hero.png",
    heroImageAlt = "Resource preview",
    // Section 2 (deep dive)
    block1Title = "Subtitle One",
    block1Body = "A few sentences describing part one of the resource.",
    block2Title = "Subtitle Two",
    block2Body = "A few sentences describing part two of the resource.",
    // Section 3 (email → download)
    resourceName = "Download",
    downloadHref = "/files/resource.pdf", // file path you host in /public or a signed URL
    onSubmitEmail, // optional async (email) => Promise<void> to hit your API/ESP
    accent = "#ffb000", // brand accent
  } = props;

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [toast, setToast] = useState({ open: false, msg: "", sev: "success" });

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async () => {
    if (!validEmail(email)) {
      setToast({
        open: true,
        msg: "Please enter a valid email.",
        sev: "error",
      });
      return;
    }
    try {
      setSubmitting(true);
      if (onSubmitEmail) await onSubmitEmail(email); // e.g. POST to your backend/ESP
      setUnlocked(true);
      setToast({
        open: true,
        msg: "Thanks! Your download is ready.",
        sev: "success",
      });
    } catch (e) {
      setToast({
        open: true,
        msg: "Something went wrong. Please try again.",
        sev: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ mt: 4, mb: 10 }}>
      {/* ===== Section 1: Hero (title + copy + image) ===== */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
          alignItems: "center",
          gap: { xs: 3, md: 8 },
          p: { xs: 0, md: 0 },
        }}
      >
        {/* Left: text */}
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
            {title}
          </Typography>

          <Typography
            sx={{
              color: "#222",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              maxWidth: 720,
            }}
          >
            {intro}
          </Typography>
        </Box>

        {/* Right: image with soft accent blob */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 220, md: 360 },
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(70% 70% at 65% 60%, ${accent}33, transparent)`,
              borderRadius: 6,
            }}
          />
          <Box
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* ===== Section 2: Deep dive (two blocks, full width) ===== */}
      <Box sx={{ mt: { xs: 4, md: 8 }, display: "grid", gap: 3 }}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 28 },
              fontWeight: 800,
              color: "black",
              mb: 1,
            }}
          >
            {block1Title}
          </Typography>
          <Typography
            sx={{
              color: "#222",
              lineHeight: 1.8,
              fontSize: { xs: 16, md: 18 },
            }}
          >
            {block1Body}
          </Typography>
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
            {block2Title}
          </Typography>
          <Typography
            sx={{
              color: "#222",
              lineHeight: 1.8,
              fontSize: { xs: 16, md: 18 },
            }}
          >
            {block2Body}
          </Typography>
        </Box>
      </Box>

      {/* ===== Section 3: Email → Download CTA ===== */}
      <Box
        sx={{
          mt: { xs: 5, md: 7 },
          backgroundColor: "#fff7f0",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
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
          {resourceName}
        </Typography>
        <Typography sx={{ color: "#444", mb: 2 }}>
          Enter your email to unlock the download.
        </Typography>

        {/* Email capture row (wraps on tiny screens) */}
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
              onClick={handleSubmit}
              disabled={submitting}
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
              {submitting ? "Submitting…" : "Submit"}
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Button
              component="a"
              href={downloadHref}
              download
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
              Download
            </Button>
          </Box>
        )}

        <Typography sx={{ mt: 1.5, fontSize: 12, color: "#777" }}>
          We’ll send you the resource and occasional helpful updates. You can
          opt out any time.
        </Typography>
      </Box>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={toast.sev}
          onClose={() => setToast({ ...toast, open: false })}
          variant="filled"
        >
          {toast.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
