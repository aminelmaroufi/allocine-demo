import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { MovieOutlined, TvOutlined, WavingHand } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  waveAnimation,
  typingAnimation,
  colorTransition,
  fadeIn,
  pulse,
  hoverFadeIn,
} from 'src/styles/animation';

const HomePage = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show text immediately when component mounts
    setShowText(true);

    // Show buttons 3 seconds after text starts appearing
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          textAlign: 'center',
          padding: { xs: 2, md: 4 },
        }}
      >
        <Typography
          id="helloTextId"
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            marginBottom: '60px',
            fontSize: { xs: '1.7rem', md: '3rem' },
            overflow: 'hidden',
            whiteSpace: { xs: 'normal', md: 'nowrap' },
            borderRight: '2px solid',
            opacity: 0, // Start with 0 opacity
            ...(showText && {
              animation: `${typingAnimation} 3s steps(40, end), ${colorTransition} 1s 3s forwards, ${fadeIn} 0.5s forwards`,
            }),
          }}
        >
          <span>
            Hello{' '}
            <WavingHand sx={{ animation: `${waveAnimation} 2s infinite` }} />,
            what do you want to watch today?
          </span>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 4,
            mt: 4,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            id="moviesBtnId"
            variant="contained"
            onClick={() => navigate('/movies')}
            sx={{
              backgroundColor: '#e50914',
              color: 'white',
              margin: { xs: '10px 0', md: '40px' },
              '&:hover': {
                backgroundColor: '#b20710',
                animation: `${hoverFadeIn} 0.3s forwards`,
              },
              width: { xs: '160%', md: '200px' },
              height: { xs: '180px', md: '200px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: '1rem', md: '2rem' },
              borderRadius: '10px',
              opacity: 0,
              animation: showButtons
                ? `${fadeIn} 1s forwards, ${pulse} 3s 1s forwards`
                : 'none',
            }}
          >
            <MovieOutlined sx={{ fontSize: { xs: 90, md: 80 }, mb: 1 }} />
            Movies
          </Button>

          <Button
            id="seriesBtnId"
            variant="contained"
            onClick={() => navigate('/series')}
            sx={{
              backgroundColor: '#e50914',
              color: 'white',
              margin: { xs: '10px 0', md: '40px' },
              '&:hover': {
                backgroundColor: '#b20710',
                animation: `${hoverFadeIn} 0.3s forwards`,
              },
              width: { xs: '160%', md: '200px' },
              height: { xs: '180px', md: '200px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: '1rem', md: '2rem' },
              borderRadius: '10px',
              opacity: 0,
              animation: showButtons
                ? `${fadeIn} 1s forwards, ${pulse} 3s 1s forwards`
                : 'none',
            }}
          >
            <TvOutlined sx={{ fontSize: { xs: 80, md: 80 }, mb: 1 }} />
            Series
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
