import React, { useEffect } from "react";
import { connect } from "react-redux";

import { State, ListingsState } from "../interfaces/interfaces";

import ListingStatus from "./common/ListingStatus";

import moment from "moment";

interface IListings {
  listings: ListingsState;
}

const Listings = ({
  listings: { listingsLoading, listings, count, limit, page, pages },
}: IListings) => {
  useEffect(() => {
    console.log("listings", listings);
  }, [listings]);

  return listings && listings.length > 0 && !listingsLoading ? (
    <div className="listings">
      {listings.map((listing: any) => (
        <div key={listing.id} className="listing">
          <div className="row">
            <div className="col-sm-12 d-flex">
              <div className="niche-image-wrapper mr-4">
                <img
                  src={`https://api.empireflippers.com/niches/${listing.niche_image}`}
                  className="niche-image"
                />
              </div>
              <div className="d-flex flex-column" style={{ width: "100%" }}>
                <div className="d-flex align-items-center mb-3">
                  <i className="far fa-thumbs-up mt-2 mr-2 like-button pointer" />
                  <i className="far fa-thumbs-down unlike-button mr-3 pointer" />
                  {listing.niches.map((niche: any, index: number) => (
                    <pre
                      key={niche.niche}
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 0,
                        fontFamily: "Lato",
                      }}
                    >
                      {index !== listing.niches.length - 1
                        ? `${niche.niche}, `
                        : niche.niche}
                    </pre>
                  ))}
                </div>
                <div className="d-flex align-items-center mb-3">
                  <ListingStatus listing={listing} />
                  {listing.has_trademark && (
                    <div className="ml-3 trademark">
                      <span>TM</span>
                    </div>
                  )}
                </div>
                <div className="monetizations">
                  <img
                    src={`https://api.empireflippers.com/monetizations-white/${listing.monetizations[0].monetization
                      .replace(" ", "-")
                      .toLowerCase()}.svg`}
                    alt=""
                  />
                  <div className="d-flex align-items-center pl-3 pt-2">
                    {listing.monetizations.map(
                      (monetization: any, index: number) => (
                        <pre
                          style={{
                            marginBottom: 0,
                            fontFamily: "Lato",
                          }}
                        >
                          {index !== listing.monetizations.length - 1
                            ? `${monetization.monetization}, `
                            : monetization.monetization}
                        </pre>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-12 d-flex flex-column">
              {listing.summary.length >= 230 ? (
                <>
                  <p className="mb-1">{`${listing.summary.substring(
                    0,
                    240
                  )}...`}</p>
                  <a href="javascript:void(0)">Read More</a>
                </>
              ) : (
                <p className="mb-1">{listing.summary}</p>
              )}
            </div>
          </div>
          <div className="divider" />
          <div className="row mt-2">
            <div style={{ width: "20%" }}>
              <p className="text-muted mb-1">Listing #</p>
              <p className="text-muted mb-0">{listing.listing_number}</p>
            </div>
            <div style={{ width: "20%" }}>
              <p className="text-muted mb-1">Price</p>
              <p className="font-weight-bold">
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(listing.listing_price)}
              </p>
            </div>
            <div style={{ width: "20%" }}>
              <p className="text-muted mb-1">Net Profit</p>
              <p className="text-muted mb-0">
                {listing.average_monthly_net_profit}
              </p>
            </div>
            <div style={{ width: "20%" }}>
              <p className="text-muted mb-1">Multiple</p>
              <p className="text-muted mb-0">{listing.listing_multiple}</p>
            </div>
            <div style={{ width: "20%" }}>
              <p className="text-muted mb-1">Business Created</p>
              <p className="text-muted mb-0">
                {moment(listing.created_at).format("MMM YYYY")}
              </p>
            </div>
          </div>
          <div className="divider" />
          <div className="row">
            <div style={{ width: "33.333%" }}>
              <p className="text-muted mb-0">Profit</p>
              <p className="text-muted mb-0" style={{ fontSize: 12 }}>
                {`(${listing.net_profit_trend_percent_months} months)`}
              </p>
              <p
                className={`stat-number mt-2 ${
                  listing.net_profit_trend_percent
                    ? listing.net_profit_trend_percent > 0
                      ? "increase"
                      : "decrease"
                    : ""
                }`}
              >
                {listing.net_profit_trend_percent >= 0
                  ? `+${
                      listing.net_profit_trend_percent
                        ? listing.net_profit_trend_percent
                        : "0"
                    } % increase`
                  : `${
                      listing.net_profit_trend_percent
                        ? listing.net_profit_trend_percent
                        : "0"
                    } % decrease`}
              </p>
            </div>
            <div style={{ width: "33.333%" }}>
              <p className="text-muted mb-0">Revenue</p>
              <p className="text-muted mb-0" style={{ fontSize: 12 }}>
                {`(${listing.gross_revenue_trend_percent_months} months)`}
              </p>
              <p
                className={`stat-number mt-2 ${
                  listing.gross_revenue_trend_percent
                    ? listing.gross_revenue_trend_percent > 0
                      ? "increase"
                      : "decrease"
                    : ""
                }`}
              >
                {listing.gross_revenue_trend_percent >= 0
                  ? `+${
                      listing.gross_revenue_trend_percent
                        ? listing.gross_revenue_trend_percent
                        : "0"
                    } % increase`
                  : `${
                      listing.gross_revenue_trend_percent
                        ? listing.gross_revenue_trend_percent
                        : "0"
                    } % decrease`}
              </p>
            </div>
            <div style={{ width: "33.333%" }}>
              <p className="text-muted mb-0">Traffic</p>
              <p className="text-muted mb-0" style={{ fontSize: 12 }}>
                {`(${listing.unique_users_trend_months} months)`}
              </p>
              <p
                className={`stat-number mt-2 ${
                  listing.unique_users_trend_percent
                    ? listing.unique_users_trend_percent > 0
                      ? "increase"
                      : "decrease"
                    : ""
                }`}
              >
                {listing.unique_users_trend_percent >= 0
                  ? `+${
                      listing.unique_users_trend_percent
                        ? listing.unique_users_trend_percent
                        : "0"
                    } % increase`
                  : `${
                      listing.unique_users_trend_percent
                        ? listing.unique_users_trend_percent
                        : "0"
                    } % decrease`}
              </p>
            </div>
          </div>
          <div className="divider mt-0" />
          <button className="view-listing-button">
            View Listing{" "}
            <i
              className="ml-3 mt-1 fa fa-chevron-right"
              style={{ fontSize: 22 }}
            ></i>
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div className="listings-loading">
      <div className="loading-wrapper">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  listings: state.listings,
});

export default connect(mapStateToProps)(Listings);
