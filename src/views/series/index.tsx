// SeriesPage.tsx
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Container, Box, Button, Grid2 } from '@mui/material';
import Item from 'src/components/Media/Item';
import Filter from 'src/components/Filter/Filter';
import TotalCount from 'src/components/Filter/TotalCount';
import { getSeries } from 'src/redux/actions';
import { RootState } from 'src/redux/reducers';
import { IFilter, ISerie } from 'src/models';
import { hoverFadeIn } from 'src/styles/animation';
import SerieDetailsModal from './SerieDetailsModal';

const SeriesPage = () => {
  const dispatch = useDispatch();
  const { series, pages, total } = useSelector(
    (state: RootState) => state.serieReducer
  );
  const [filter, setFilter] = useState('popular');
  const [page, setPage] = useState(1);
  const [selectedSerie, setSelectedSerie] = useState<ISerie | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const previousFilter = useRef(filter); // Store the previous filter

  useEffect(() => {
    // Determine if the filter has changed, and set newFilter accordingly
    const newFilter = filter !== previousFilter.current;
    const params: IFilter = {
      type: filter,
      page: page,
      newFilter: newFilter,
    };
    dispatch(getSeries(params));

    // Update the previous filter to the current one after the fetch
    previousFilter.current = filter;
  }, [filter, page, dispatch]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSerieClick = (serie: ISerie) => {
    setSelectedSerie(serie);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedSerie(null);
  };

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
          Series {'>'} {filter.replace(/_/g, ' ').toUpperCase()}
        </Typography>
      </Box>
      {series.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Filter filter={filter} setFilter={setFilter} component="series" />
          <TotalCount total={series.length} pages={pages} />
        </Box>
      )}
      {series.length > 0 ? (
        <Grid2 container spacing={2}>
          {series.map((serie: any, index) => (
            <Grid2
              size={[6, 3, 3, 2.4]}
              key={index}
              onClick={() => handleSerieClick(serie)}
              sx={{ cursor: 'pointer' }}
            >
              <Item item={serie} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: 'center', mt: 2 }}
        >
          No Series available.
        </Typography>
      )}
      {series.length > 0 && series.length < total && (
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
              width: { xs: '80%', md: 'auto' },
            }}
          >
            Load More
          </Button>
        </Box>
      )}
      <SerieDetailsModal
        open={modalOpen}
        onClose={handleModalClose}
        serie={selectedSerie}
      />
    </Container>
  );
};

export default SeriesPage;
