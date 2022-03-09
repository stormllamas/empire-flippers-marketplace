import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Sidebar from "./layout/Sidebar/Sidebar";
import Searchbar from "./layout/Searchbar";
import Pagination from "./layout/Pagination";
import Listings from "./Listings";

import { getListings } from "../actions/listingActions";
import { State, ListingsState } from "../interfaces/interfaces";

interface IMarketPlace {
  getListings: Function;
  listings: ListingsState;
}

const MarketPlace = ({
  getListings,
  listings: { sortValue },
}: IMarketPlace) => {
  const params = useParams();

  useEffect(() => {
    const listingsParams = {
      page: params.page,
      sortValue: sortValue
        ? sortValue.slice(0, sortValue.length - 14)
        : undefined,
      sortOrder: sortValue
        ? sortValue.slice(sortValue.length - 13, sortValue.length)
        : undefined,
    };

    getListings(listingsParams);
  }, [params.page, sortValue]);

  return (
    <section className="section-market-place">
      <Sidebar />
      <div className="content-container">
        <Searchbar />
        <Listings />
        <Pagination />
      </div>
    </section>
  );
};
const mapStateToProps = (state: State) => ({
  listings: state.listings,
});

export default connect(mapStateToProps, { getListings })(MarketPlace);
