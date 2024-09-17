import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../homepage';

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const setup = () => {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
};

describe('HomePage', () => {
  it('renders the welcome message', async () => {
    setup();
    const welcomeMessage = await screen.findByText(
      /Hello.*what do you want to watch today\?/i
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('displays the Movies button after a delay', async () => {
    setup();
    const moviesButton = await screen.findByText(
      'Movies',
      {},
      { timeout: 4000 }
    );
    expect(moviesButton).toBeInTheDocument();
  });

  it('displays the Series button after a delay', async () => {
    setup();
    const seriesButton = await screen.findByText(
      'Series',
      {},
      { timeout: 4000 }
    );
    expect(seriesButton).toBeInTheDocument();
  });

  it('navigates to /movies when Movies button is clicked', async () => {
    setup();
    const moviesButton = await screen.findByText(
      'Movies',
      {},
      { timeout: 4000 }
    );

    await act(async () => {
      await userEvent.click(moviesButton);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/movies');
  });

  it('navigates to /series when Series button is clicked', async () => {
    setup();
    const seriesButton = await screen.findByText(
      'Series',
      {},
      { timeout: 4000 }
    );

    await act(async () => {
      await userEvent.click(seriesButton);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/series');
  });
});
