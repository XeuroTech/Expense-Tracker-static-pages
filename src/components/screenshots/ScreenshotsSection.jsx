"use client";

import { useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import ScreenshotCard from "./ScreenshotCard";
import screenshots from "../../data/screenshots";

export default function ScreenshotsSection() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (direction) => {
    scrollerRef.current?.scrollBy({
      left: direction * 260,
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="screenshots"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Insides"
          title="A closer look inside the app"
          subtitle="Swipe through the core screens of AI Expense Tracker, right in your pocket."
        />
      </Container>

      <Box sx={{ position: "relative" }}>
        {/* Left/right scroll buttons — desktop only, mobile relies on swipe */}
        <IconButton
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll screenshots left"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            position: "absolute",
            left: 12,
            top: "42%",
            zIndex: 2,
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: "divider",
            "&:hover": { bgcolor: "background.default" },
          }}
        >
          <ChevronLeftRoundedIcon />
        </IconButton>
        <IconButton
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll screenshots right"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            position: "absolute",
            right: 12,
            top: "42%",
            zIndex: 2,
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: "divider",
            "&:hover": { bgcolor: "background.default" },
          }}
        >
          <ChevronRightRoundedIcon />
        </IconButton>

        <Box
          ref={scrollerRef}
          sx={{
            display: "flex",
            gap: { xs: 3, md: 4 },
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            px: { xs: 3, sm: 5, md: 8 },
            py: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {screenshots.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <ScreenshotCard {...item} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
