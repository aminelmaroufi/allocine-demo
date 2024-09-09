// Header.tsx
import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeColor = "#007bff"; // Replace with the actual active color from your Filter component
  const hoverColor = "#0056b3"; // Replace with the actual hover color from your Filter component

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AlloCine Demo
        </Typography>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/")}
          sx={{
            color: isActive("/") ? activeColor : "inherit",
            "&:hover": {
              color: hoverColor,
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/movies")}
          sx={{
            color: isActive("/movies") ? activeColor : "inherit",
            "&:hover": {
              color: hoverColor,
            },
          }}
        >
          Movies
        </Button>
        <Button
          color="inherit"
          onClick={() => handleNavigation("/series")}
          sx={{
            color: isActive("/series") ? activeColor : "inherit",
            "&:hover": {
              color: hoverColor,
            },
          }}
        >
          Series
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
