import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Header from 'src/components/Header';

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ pathname: '/' }),
}));

// Mock the useMediaQuery hook
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn(),
}));

const theme = createTheme();

const renderHeader = (isMobile = false) => {
  (useMediaQuery as jest.Mock).mockReturnValue(isMobile);
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  );
};

describe('Header Component', () => {
  it('renders the logo text', () => {
    renderHeader();
    expect(screen.getByText('AlloCine Demo')).toBeInTheDocument();
  });

  it('renders navigation buttons on desktop', () => {
    renderHeader(false);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Series')).toBeInTheDocument();
  });

  it('renders menu icon on mobile', () => {
    renderHeader(true);
    expect(screen.getByLabelText('menu')).toBeInTheDocument();
  });

  it('opens drawer when menu icon is clicked on mobile', () => {
    renderHeader(true);
    fireEvent.click(screen.getByLabelText('menu'));
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Series')).toBeInTheDocument();
  });

  it('navigates when a menu item is clicked', () => {
    renderHeader();
    fireEvent.click(screen.getByText('Movies'));
    expect(mockNavigate).toHaveBeenCalledWith('/movies');
  });
});
