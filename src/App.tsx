import React from 'react';
import { useRoutes } from 'react-router-dom';
import ThemeProvider from 'src/theme/ThemeProvider';
import routes from 'src/routes';
import { RootState } from 'src/redux/reducers';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import Header from 'src/components/Header';

function App() {
  const { fetching } = useSelector((state: RootState) => state.homeReducer);
  const content = useRoutes(routes);

  return (
    <ThemeProvider>
      {fetching && <SuspenseLoader />}
      <CssBaseline />
      <Header />
      {content}
    </ThemeProvider>
  );
}

export default App;
