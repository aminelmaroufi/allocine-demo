import React from "react";
import { useRoutes } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import routes from "./routes";
import { RootState } from "./redux/reducers";
import SuspenseLoader from "./components/SuspenseLoader";
import "./App.css";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";

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
