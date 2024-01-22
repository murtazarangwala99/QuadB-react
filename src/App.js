import { useState, useEffect, createContext } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import SummaryPage from "./components/SummaryPage";
import Navbar from "./components/Navbar";
import FormPage from "./components/FormPage";

export const DataContext = createContext();

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await data.json();
    setMovieData(json);
    // console.log(json);
  };
  return (
    <div>
      <Navbar />
      <DataContext.Provider value={movieData}>
        <RouterProvider router={appRouter}>
          <Outlet />
        </RouterProvider>
      </DataContext.Provider>
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:movieId",
        element: <SummaryPage />,
      },
      {
        path: "/booking/:movieId",
        element: <FormPage />,
      },
    ],
  },
]);

export default App;
