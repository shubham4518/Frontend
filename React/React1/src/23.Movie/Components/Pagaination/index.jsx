import React from "react";
import Button from "../Button/index";
import "./index.scss";

const index = ({ handleNextPage, handlePrevPage, currentPage }) => {
  return (
    <div className="Pagination">
      <Button
        disabled={currentPage === 1}
        title={"Previous"}
        onClick={handlePrevPage}
      ></Button>
      <span className="currentPageNumber">{currentPage}</span>
      <Button title={"Next"} onClick={handleNextPage}></Button>
    </div>
  );
};

export default index;
