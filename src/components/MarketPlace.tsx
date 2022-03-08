import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import Sidebar from "./layout/Sidebar/Sidebar";
import Searchbar from "./layout/Searchbar";
import Listings from "./Listings";

import { getListings } from "../actions/listingActions";
import { State, SiteState } from "../interfaces/interfaces";

interface IMarketPlace {
  getListings: Function;
}

const MarketPlace = ({ getListings }: IMarketPlace) => {
  useEffect(() => {
    getListings();
  }, []);

  return (
    <section className="section-market-place">
      <Sidebar />
      <div className="content-container">
        <Searchbar />
        <Listings />
      </div>
    </section>
  );
};
const mapStateToProps = (state: State) => ({});

export default connect(mapStateToProps, { getListings })(MarketPlace);
