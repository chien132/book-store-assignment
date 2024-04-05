/* eslint-disable react-refresh/only-export-components */
import Favorites from "@/views/favorites/Favorites";
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("@/views/dashboard/Dashboard"), {
  fallback: <h1>Loading</h1>,
});

const Homepage = loadable(() => import("@/views/homepage/Homepage"), {
  fallback: <h1>Loading...</h1>,
});

const appRoute = () => {
  return [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ];
};

export default appRoute;
