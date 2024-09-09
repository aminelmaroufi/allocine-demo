import React from "react";
import { Button, Box } from "@mui/material";

interface FilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  component: string;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter, component }) => {
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        variant={filter === "popular" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("popular")}
      >
        Popular
      </Button>
      {component === "series" && (
        <Button
          variant={filter === "on_the_air" ? "contained" : "outlined"}
          onClick={() => handleFilterChange("on_the_air")}
        >
          On the Air
        </Button>
      )}
      {component === "movies" && (
        <Button
          variant={filter === "now_playing" ? "contained" : "outlined"}
          onClick={() => handleFilterChange("now_playing")}
        >
          Now Playing
        </Button>
      )}
      <Button
        variant={filter === "top_rated" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("top_rated")}
      >
        Top Rated
      </Button>
    </Box>
  );
};

export default Filter;
