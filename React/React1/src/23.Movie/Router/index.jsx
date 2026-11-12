import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import MovieDetails from "../Pages/MovieDetails";
import Loader from "../Components/Loader";

const index = ({
  data,
  search,
  setSearch,
  currentPage,
  handleNextPage,
  handlePrevPage,
  tv,
}) => {
  const Home = lazy(() => import("../Pages/Home"));
  const Tv = lazy(() => import("../Pages/Tvshow"));

  return (
    <div>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home
                  data={data}
                  currentPage={currentPage}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                />
              </Suspense>
            }
          />
          <Route
            path="/tv"
            element={
              <Suspense fallback={<Loader />}>
                <Tv data={tv} />
              </Suspense>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default index;
