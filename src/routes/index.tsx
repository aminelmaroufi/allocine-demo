// routes.tsx
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader";
import HomePage from "../views/homepage/index";
import MoviesPage from "../views/movies";
import SeriesPage from "../views/series";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Status404 = Loader(lazy(() => import("../views/Status/Status404")));
const Status500 = Loader(lazy(() => import("../views/Status/Status500")));
const StatusMaintenance = Loader(
  lazy(() => import("../views/Status/Maintenance"))
);

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "movies",
    element: <MoviesPage />,
  },
  {
    path: "series",
    element: <SeriesPage />,
  },
  {
    path: "404",
    element: <Status404 />,
  },
  {
    path: "500",
    element: <Status500 />,
  },
  {
    path: "maintenance",
    element: <StatusMaintenance />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

export default routes;
