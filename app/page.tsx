import { Box, Typography } from "@mui/material";
import home_background from "../public/home.webp";
import Image from "next/image";

export default async function Home() {
  return (
    <Box width="100%" height="100vh">
      <Image
        src={"/home.webp"}
        alt={""}
        height={4000}
        width={3000}
        style={{
          position: "absolute",
          top: "-1000px",
          left: "-400px",
          opacity: "80%",
        }}
      />
      <Box></Box>
    </Box>
  );
}
