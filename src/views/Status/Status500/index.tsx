import { useState } from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';
import { browserHistory } from '../../../redux/reducers/history';
import { useNavigate } from 'react-router-dom';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function Status500() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);

  function handleClick() {
    setPending(true);

    setTimeout(() => {
      setPending(false);
      browserHistory.back();
    }, 500);
  }

  return (
    <>
      <Helmet>
        <title>Status - 500</title>
      </Helmet>
      <MainContent>
        <Grid container xl={12} alignItems="center" spacing={0}>
          <Grid
            xs={12}
            alignItems="center"
            display="flex"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img
                  alt="500"
                  height={260}
                  src="assets/images/status/500.svg"
                />
                <Typography variant="h2" sx={{ my: 2 }}>
                  There was an error, please try again later
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  The server encountered an internal error and was not able to
                  complete your request
                </Typography>
                <LoadingButton
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshTwoToneIcon />}
                >
                  Refresh view
                </LoadingButton>
                <Button
                  onClick={() => navigate('/')}
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Go home
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </MainContent>
    </>
  );
}

export default Status500;
