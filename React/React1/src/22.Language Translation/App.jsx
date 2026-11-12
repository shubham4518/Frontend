import React, { useState, useEffect } from "react";
import { popularMovies, searchMovies, popularTv } from "./23.Movie/api/index";
import Router from "./23.Movie/Router";
import useDebounce from "./23.Movie/hooks/useDebounce";
import "./App.scss";
import usePagination from "./23.Movie/hooks/usePagination";

const App = () => {
  const [data, setData] = useState([]);
  const [tv, setTv] = useState([]);
  const [search, setSearch] = useState("");
  const { debounceSearch } = useDebounce(search);
  const { currentPage, handlePrevPage, handleNextPage } = usePagination();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieRes, tvRes] = await Promise.all([
          debounceSearch
            ? searchMovies(debounceSearch, currentPage)
            : popularMovies(currentPage),

          popularTv(currentPage),
        ]);

        setData(movieRes.data.results);
        setTv(tvRes.data.results);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, [currentPage, debounceSearch]);

  return (
    <div>
      <Router
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        search={search}
        setSearch={setSearch}
        data={data}
        tv={tv}
      />
    </div>
  );
};

export default App;

