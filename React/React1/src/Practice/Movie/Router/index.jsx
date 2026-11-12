import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pagination from "../Components/Pagaination";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
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
                <Home data={data} />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                <Home data={data} />
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
            path="/tv-shows"
            element={
              <Suspense fallback={<Loader />}>
                <Tv data={tv} />
              </Suspense>
            }
          />
          <Route
            path="/popular"
            element={
              <Suspense fallback={<Loader />}>
                <Home data={data} />
              </Suspense>
            }
          />
        </Routes>
        <Pagination
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default index;
