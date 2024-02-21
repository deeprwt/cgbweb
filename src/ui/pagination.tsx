'use client'
import React from "react";
import ReactPaginate from "react-paginate";

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

const Pagination = ({ handlePageClick, pageCount }: IProps) => {
  return (
    <ReactPaginate
      className="style-none d-flex align-items-center"
      breakLabel="..."
      activeClassName="active"
      nextLabel={<i className="bi bi-arrow-right"></i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<i className="bi bi-arrow-left"></i>}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
