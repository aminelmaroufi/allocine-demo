// MediaItem.tsx
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { IMAGE_BASE_URL } from "../../config";
import { IMediaItem } from "../../models";

const Item: React.FC<{ item: IMediaItem }> = ({ item }) => {
  return (
    <Card
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          cursor: "pointer",
        },
        "&:focus": {
          outline: "none",
          transform: "scale(1.05)",
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        image={`${IMAGE_BASE_URL}${item.poster_path}`}
        alt={item.title || item.name}
        sx={{
          height: { xs: 200, md: 300 }, // Adjusted height for mobile devices
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "1rem", md: "1.25rem" }, // Adjusted font size for mobile devices
          }}
        >
          {item.title || item.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
