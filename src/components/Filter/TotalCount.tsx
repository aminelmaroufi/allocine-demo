import React from "react";
import { Typography, Box } from "@mui/material";

interface TotalCountProps {
  total: number;
  pages: number;
}

const TotalCount: React.FC<TotalCountProps> = ({ total, pages }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" color="textSecondary">
        Total: {total} of {pages}
      </Typography>
    </Box>
  );
};

export default TotalCount;
