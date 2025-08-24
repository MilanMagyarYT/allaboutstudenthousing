"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export default function AutoSlideshow() {
  // add/remove images here
  const images = [
    { src: "/IMG_7845.jpg", width: 800, height: 500 },
    { src: "/IMG_9782.jpg", width: 800, height: 500 },
    { src: "/IMG_9245.jpg", width: 1200, height: 700 },
  ];

  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, 2000); // 5s per slide
    return () => clearInterval(id);
  }, [images.length]);

  const current = images[i];

  return (
    <Box sx={{ position: "relative" }}>
      {/* background accent */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(70% 70% at 65% 60%, #ffb000, transparent)",
          borderRadius: 3,
        }}
      />
      <Box sx={{ position: "relative", p: 2 }}>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            key={i} // forces re-render on slide change
            src={current.src}
            alt=""
            width={current.width}
            height={current.height}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
