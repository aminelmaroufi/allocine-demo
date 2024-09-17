import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Grid2,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IMAGE_BASE_URL } from 'src/config';
import { IMovie } from 'src/models';

interface MovieDetailsModalProps {
  open: boolean;
  onClose: () => void;
  movie: IMovie | null;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  open,
  onClose,
  movie,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  if (!movie) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      fullScreen={isMobile}
      PaperProps={{
        style: {
          border: '2px solid #000',
          borderRadius: isMobile ? '0' : '8px',
          margin: isMobile ? '0' : undefined,
          maxHeight: isMobile ? '100%' : 'calc(100% - 64px)',
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.75rem' },
            }}
          >
            {movie.title}
          </Typography>
          <IconButton onClick={onClose} edge="end">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid2 container spacing={2}>
          <Grid2 size={[12, 4, 4, 4]}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: isMobile ? '70%' : isTablet ? '50%' : '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Grid2>
          <Grid2 size={[12, 8]} paddingLeft={2}>
            <Box sx={{ pl: { xs: 0, md: 2 } }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                  mb: 1,
                }}
              >
                <strong>Adult:</strong> {movie.adult ? 'Yes' : 'No'}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  mb: 2,
                }}
              >
                <strong>Overview:</strong> {movie.overview}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  mb: 1,
                }}
              >
                <strong>Release Date:</strong> {movie.release_date}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  mb: 1,
                }}
              >
                <strong>Vote Average:</strong> {movie.vote_average}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  mb: 1,
                }}
              >
                <strong>Vote Count:</strong> {movie.vote_count}
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 1, sm: 2 } }}>
        <Button
          onClick={onClose}
          color="primary"
          sx={{
            fontSize: { xs: '1rem', sm: '1rem', md: '0.875rem' },
            padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetailsModal;
