import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function GalleryCard({ url }: { url: string }) {
  return (
    <Card
      sx={{
        padding: "5px",
        height: "300px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <CardHeader>Name of item</CardHeader>

      <CardMedia
        sx={{ height: "175px", width: "200px" }}
        image={`/mockArt/${url}`}
      />

      <CardContent>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton>
          <MoreVert />a
        </IconButton>
      </CardActions>
    </Card>
  );
}
