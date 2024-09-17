import React from 'react';
import { Button, Box } from '@mui/material';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: { xs: 1, md: 2 },
        alignItems: 'center',
        overflowX: 'auto',
        padding: { xs: '0 16px', md: 0 },
      }}
    >
      <Button
        variant={filter === 'popular' ? 'contained' : 'outlined'}
        onClick={() => handleFilterChange('popular')}
        sx={{
          flexShrink: 0,
          marginBottom: { xs: 1, md: 0 },
        }}
      >
        Popular
      </Button>
      {component === 'series' && (
        <Button
          variant={filter === 'on_the_air' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('on_the_air')}
          sx={{
            flexShrink: 0,
            marginBottom: { xs: 1, md: 0 },
          }}
        >
          On the Air
        </Button>
      )}
      {component === 'movies' && (
        <Button
          variant={filter === 'now_playing' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('now_playing')}
          sx={{
            flexShrink: 0,
            marginBottom: { xs: 1, md: 0 },
          }}
        >
          Now Playing
        </Button>
      )}
      <Button
        variant={filter === 'top_rated' ? 'contained' : 'outlined'}
        onClick={() => handleFilterChange('top_rated')}
        sx={{
          flexShrink: 0,
          marginBottom: { xs: 1, md: 0 },
        }}
      >
        Top Rated
      </Button>
    </Box>
  );
};

export default Filter;
