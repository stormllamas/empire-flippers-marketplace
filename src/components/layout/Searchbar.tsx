import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { State, ListingsState } from "../../interfaces/interfaces";

import { changeSortValue } from "../../actions/listingActions";

interface ISearchbar {
  listings: ListingsState;
  changeSortValue: Function;
}

const sortChoices = [
  "listing_number",
  "average_monthly_net_profit",
  "business_created_at",
  "listing_price",
  "first_listed_at",
  "listing_multiple",
  "sale_multiple",
  "hours_worked_per_week",
  "average_monthly_gross_revenue",
  "average_monthly_expenses",
  "monthly_recurring_revenue",
  "monthly_churn_percent",
  "inventory_cost",
  "uses_pbn",
  "seller_interview_link",
  "sba_financing_approved",
  "last_listed_at",
  "first_delisted_at",
  "last_delisted_at",
  "created_at",
  "last_updated",
  "sold_at",
  "listing_status",
  "min_monetization",
  "max_niche",
  "min_niche",
  "days_on_marketplace",
];

const parsedSortChoices: string[] = [];
sortChoices.map((choice) => {
  parsedSortChoices.push(`${choice} (High to Low)`);
  parsedSortChoices.push(`${choice} (Low to High)`);
});

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Searchbar = ({
  listings: { listingsLoading, listings, count, limit, page, pages },
  changeSortValue,
}: ISearchbar) => {
  const handleSortChange = (e: any) => {
    const newSortValue = e.target.value;
    changeSortValue(newSortValue);
  };
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
              {count} Available Listings
            </h6>
          </div>
        </div>
        <div className="right-items d-flex ml-3">
          <div className="ef-select-wrapper mr-3" style={{ minWidth: 180 }}>
            <select
              name="cars"
              id="cars"
              className="ef-input ef-select mr-3"
              onChange={handleSortChange}
            >
              {parsedSortChoices.sort().map((choice) => (
                <option key={choice} value={choice}>
                  {toTitleCase(choice.replaceAll("_", " "))}
                </option>
              ))}
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

export default connect(mapStateToProps, { changeSortValue })(Searchbar);
