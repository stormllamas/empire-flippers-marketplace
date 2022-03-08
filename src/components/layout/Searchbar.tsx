import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { State, ListingsState } from "../../interfaces/interfaces";

interface ISearchbar {
  listings: ListingsState;
}

const Searchbar = ({
  listings: { listingsLoading, listings, count, limit, page, pages },
}: ISearchbar) => {
  return (
    <div className="search-bar">
      <div className="d-flex justify-content-between">
        <div className="left-items d-flex">
          <div className="ef-search-wrapper mr-3" style={{ minWidth: 250 }}>
            <input
              type="text"
              placeholder="Search all listings"
              className="ef-input search-input"
            />
            <div className="search-input-icon-wrapper">
              <i className="fas fa-search search-input-icon" />
            </div>
          </div>
          <div className="ef-search-toggle active mr-3">
            <i className="fa fa-th-large" style={{ fontSize: 24 }} />
          </div>
          <div className="ef-search-toggle mr-3">
            <i className="fa fa-bars" style={{ fontSize: 24 }} />
          </div>
          <div className="d-flex align-items-center">
            <h6 className="nowrap mb-0 font-weight-bold">
              {listings && listings.length} Available Listings
            </h6>
          </div>
        </div>
        <div className="right-items d-flex ml-3">
          <div className="ef-select-wrapper mr-3" style={{ minWidth: 180 }}>
            <select name="cars" id="cars" className="ef-input ef-select mr-3">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <p className="select-divider">|</p>
            <div className="select-input-icon-wrapper">
              <i className="fas fa-chevron-down select-input-icon" />
            </div>
          </div>
          <div
            className="ef-search-toggle d-flex align-items-center justify-content-center"
            style={{ minWidth: 120 }}
          >
            <p className="mb-0 mr-3">Filters </p>
            <i className="fa fa-bars" style={{ fontSize: 24 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  listings: state.listings,
});

export default connect(mapStateToProps)(Searchbar);
