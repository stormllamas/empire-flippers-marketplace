import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { State, ListingsState } from "../../interfaces/interfaces";

interface IPagination {
  listings: ListingsState;
}

const Pagination = ({ listings }: IPagination) => {
  const navigate = useNavigate();

  const renderPage = (page: number) => (
    <div
      key={page}
      className={`page-item mr-2 ${listings.page === page + 1 ? "active" : ""}`}
      onClick={() => navigate(`/marketplace/grid/${page + 1}`)}
    >
      {page + 1}
    </div>
  );

  return (
    <div className="pagination">
      <div className="d-flex align-items-center">
        {listings.page !== 1 && (
          <span
            className="page-item mr-2"
            onClick={() => navigate(`/marketplace/grid/${listings.page - 1}`)}
          >
            {"<"}
          </span>
        )}

        {/* Start Scope END */}
        {Array.from(Array(listings.pages).keys())
          .filter((page) => page + 1 <= 3 && page + 1 < listings.page - 2)
          .map(renderPage)}
        {/* Start Scope END */}

        {listings.page - 2 > 4 && <span className="mr-2 ellipsis">. . .</span>}

        {/* Current Scope START */}
        {Array.from(Array(listings.pages).keys())
          .filter(
            (page) =>
              listings.page + 2 >= page + 1 && page + 1 >= listings.page - 2
          )
          .map(renderPage)}
        {/* Current Scope END */}

        {listings.page + 2 < listings.pages - 3 && (
          <span className="mr-2 ellipsis">. . .</span>
        )}

        {/* End Scope END */}
        {Array.from(Array(listings.pages).keys())
          .filter(
            (page) =>
              page + 1 >= listings.pages - 2 && page + 1 > listings.page + 2
          )
          .map(renderPage)}
        {/* End Scope END */}

        {listings.page !== listings.pages && (
          <span
            className="page-item"
            onClick={() => navigate(`/marketplace/grid/${listings.page + 1}`)}
          >
            {">"}
          </span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  listings: state.listings,
});

export default connect(mapStateToProps)(Pagination);
