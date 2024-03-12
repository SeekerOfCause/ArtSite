"use client";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import GalleryCard from "./gallery-card";

export default function Gallery() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const images = require.context("../../public/mockArt");

  const boxes = [
    "gerald_ford.webp",
    "infinity_box.webp",
    "karnak_temple.webp",
    "tooth_decay.webp",
  ];

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Paintings" />
        <Tab label="Boxes" />
      </Tabs>

      {value ? (
        <Box
          display="flex"
          flexWrap="wrap"
          gap="2rem"
          paddingTop="3rem"
          justifyContent="space-around"
        >
          {boxes.map((box, index) => {
            return <GalleryCard url={box} key={index} />;
          })}
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}
