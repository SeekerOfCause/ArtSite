import { getPaintingsURL } from "@/helpers/getFiles";
import {
  Box, Typography,
} from "@mui/material";


const paintings = getPaintingsURL();
console.log(paintings);


export default async function Home() {
 
  return (
    <Box>
    </Box>
  );
}
