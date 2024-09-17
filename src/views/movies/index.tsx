import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Container, Box, Button, Grid2 } from '@mui/material';
import Item from 'src/components/Media/Item';
import Filter from 'src/components/Filter/Filter';
import TotalCount from 'src/components/Filter/TotalCount';
import MovieDetailsModal from './MovieDetailsModal';
import { getMovies, resetMovies } from 'src/redux/actions';
import { RootState } from 'src/redux/reducers';
import { IFilter, IMovie } from 'src/models';
import { hoverFadeIn } from 'src/styles/animation';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, pages, total } = useSelector(
    (state: RootState) => state.movieReducer
  );
  const [filter, setFilter] = useState('popular');
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const previousFilter = useRef(filter); // Store the previous filter

  useEffect(() => {
    dispatch(resetMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log('useEffect called in MoviesPage');
    // Determine if the filter has changed, and set newFilter accordingly
    const newFilter = filter !== previousFilter.current;
    const params: IFilter = {
      type: filter,
      page: page,
      newFilter: newFilter,
    };
    dispatch(getMovies(params));

    // Update the previous filter to the current one after the fetch
    previousFilter.current = filter;
  }, [filter, page, dispatch]);

  // Memoized callbacks to avoid unnecessary re-creations
  const handleLoadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const handleMovieClick = useCallback((movie: IMovie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setSelectedMovie(null);
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          marginTop: '40px',
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          color="primary"
          gutterBottom
          cy-data="chart-title"
          fontSize={{ xs: '30px', lg: '40px' }}
          sx={{ fontWeight: 'bold' }}
        >
          Movies {'>'} {filter.replace(/_/g, ' ').toUpperCase()}
        </Typography>
      </Box>

      {movies.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Filter filter={filter} setFilter={setFilter} component="movies" />
          <TotalCount total={movies.length} pages={pages} />
        </Box>
      )}

      {movies.length > 0 ? (
        <Grid2 container spacing={2}>
          {movies.map((movie, index) => (
            <Grid2
              size={[6, 3, 3, 2.4]}
              key={index}
              onClick={() => handleMovieClick(movie)}
              sx={{ cursor: 'pointer' }}
            >
              <Item item={movie} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: 'center', mt: 2 }}
        >
          No movies available.
        </Typography>
      )}

      {movies.length > 0 && movies.length < total && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: '#e50914',
              '&:hover': {
                backgroundColor: '#b20710',
                animation: `${hoverFadeIn} 0.3s forwards`,
              },
              borderRadius: '20px',
              padding: '10px 20px',
              fontWeight: 'bold',
              width: { xs: '80%', md: 'auto' }, // Adjusted width for mobile
            }}
          >
            Load More
          </Button>
        </Box>
      )}

      <MovieDetailsModal
        open={modalOpen}
        onClose={handleModalClose}
        movie={selectedMovie}
      />
    </Container>
  );
};

export default MoviesPage;
