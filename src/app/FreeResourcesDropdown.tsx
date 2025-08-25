"use client";

import { useState } from "react";
import {
  Box,
  Popover,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRouter } from "next/navigation";

export default function FreeResourcesDropdown() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const phoneViewActive = useMediaQuery("(max-width:1200px)", { noSsr: true });

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setOpen(false);
      return;
    }
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <>
      {/* Trigger (place this inline in your menubar items row) */}
      <Box
        onClick={handleToggle}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          cursor: "pointer",
          userSelect: "none",
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle(e as any);
          }
        }}
      >
        {!phoneViewActive ? (
          <Typography sx={{ color: "black", fontSize: 18 }}>
            Free Resources
          </Typography>
        ) : (
          <Typography sx={{ color: "black", ml: 2, fontSize: 16 }}>
            Free Resources
          </Typography>
        )}
        <ExpandMoreIcon fontSize="small" sx={{ color: "black" }} />
      </Box>

      {/* Dropdown */}
      <Popover
        open={open}
        anchorEl={anchorEl} // 👈 anchor to trigger
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1, // small offset below trigger
              borderRadius: 3,
              p: 3,
              width: 360,
              boxShadow: "0 12px 40px rgba(0,0,0,0.16)",
            },
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            mb: 2,
            pb: 1,
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          Browse by topic:
        </Typography>

        <List sx={{ py: 0 }}>
          <ListItemButton
            onClick={() => {
              setOpen(false);
              router.push("/email-template");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Email Template"
              primaryTypographyProps={{ fontSize: 16 }}
            />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setOpen(false);
              router.push("/to-do-list");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="To Do List"
              primaryTypographyProps={{ fontSize: 16 }}
            />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
}
