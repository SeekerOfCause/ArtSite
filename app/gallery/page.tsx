'use client'
import { Paintings } from "@/helpers/getFiles";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";


export default function Gallery() {
  
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
        <Box>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered textColor="primary" variant="fullWidth">
        <Tab label="Paintings" />
        <Tab label="Boxes" />
      </Tabs>

      {value ? <Box>Boxes</Box> : <Box></Box>}
      </Box>
    );
  }