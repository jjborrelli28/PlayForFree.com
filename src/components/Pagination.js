import React from "react";
import { NavLink } from "react-router-dom";

export const Pagination = ({ page, pages, setPage }) => {
  const handlePrevious = (e) => {
    e.preventDefault();
    page !== 1 && setPage(page - 1);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setPage(Number(e.target.textContent));
  };

  const handleNext = (e) => {
    e.preventDefault();
    page !== pages.length && setPage(page + 1);
  };

  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className={page !== 1 ? "page-item" : "page-item disabled"}
            onClick={handlePrevious}
          >
            <NavLink
              className="page-link pt-2 pb-2"
              to="/"
              aria-label="Previous"
            >
              <span>&laquo;</span>
              <span className="sr-only">Previous</span>
            </NavLink>
          </li>
          {pages.map((page) => (
            <li
              className={"page-item width-item hide"}
              onClick={handleSelect}
              key={page}
            >
              <NavLink className="page-link pt-2 pb-2" to="/" id="one">
                {page}
              </NavLink>
            </li>
          ))}
          <li
            className={
              page !== pages.length ? "page-item" : "page-item disabled"
            }
            onClick={handleNext}
          >
            <NavLink className="page-link pt-2 pb-2" to="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
