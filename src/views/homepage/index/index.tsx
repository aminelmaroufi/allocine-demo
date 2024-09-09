import React, { useEffect, useState } from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import { MovieOutlined, TvOutlined, WavingHand } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  waveAnimation,
  typingAnimation,
  colorTransition,
  fadeIn,
  pulse,
  hoverFadeIn,
} from "../../../styles/animation";

const HomePage = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
      setShowButtons(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: { xs: 2, md: 4 },
        }}
      >
        <Typography
          id="helloTextId"
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: "60px",
            fontSize: { xs: "2rem", md: "3rem" },
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRight: "2px solid",
            ...(showText && {
              animation: `${typingAnimation} 2s steps(30, end), ${colorTransition} 2s 2s forwards`,
            }),
          }}
        >
          Hello{" "}
          <WavingHand sx={{ animation: `${waveAnimation} 2s infinite` }} />,
          what do you want to watch today?
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Button
            id="moviesBtnId"
            variant="contained"
            onClick={() => navigate("/movies")}
            sx={{
              backgroundColor: "#e50914",
              color: "white",
              margin: "40px",
              "&:hover": {
                backgroundColor: "#b20710",
                animation: `${hoverFadeIn} 0.3s forwards`,
              },
              width: { xs: "100%", md: "200px" },
              height: { xs: "200px", md: "200px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
              borderRadius: "10px",
              opacity: showButtons ? 1 : 0,
              animation: showButtons
                ? `${fadeIn} 1s forwards, ${pulse} 3s forwards`
                : "none",
            }}
          >
            <MovieOutlined sx={{ fontSize: { xs: 60, md: 80 }, mb: 1 }} />
            Movies
          </Button>

          <Button
            id="seriesBtnId"
            variant="contained"
            onClick={() => navigate("/series")}
            sx={{
              backgroundColor: "#e50914",
              color: "white",
              "&:hover": {
                backgroundColor: "#b20710",
                animation: `${hoverFadeIn} 0.3s forwards`,
              },
              margin: "40px",
              width: { xs: "100%", md: "200px" },
              height: { xs: "200px", md: "200px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
              borderRadius: "10px",
              opacity: showButtons ? 1 : 0,
              animation: showButtons
                ? `${fadeIn} 1s forwards, ${pulse} 3s forwards`
                : "none",
            }}
          >
            <TvOutlined sx={{ fontSize: { xs: 60, md: 80 }, mb: 1 }} />
            Series
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
