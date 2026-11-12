import React, { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  return { currentPage, handleNextPage, handlePrevPage };
};

export default usePagination;
