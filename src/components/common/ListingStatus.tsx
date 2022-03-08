import React, { useEffect } from "react";
import { connect } from "react-redux";

const Listings = (listing: any) => {
  const statusToClass = (status: string) => {
    if (status === "New Listing") return "new-listing";
    if (status === "For Sale") return "for-sale";
    if (status === "My Unlocks") return "my-unlocks";
    if (status === "Pending Sold") return "pending-sold";
    if (status === "My Purchases") return "my-purchases";
    if (status === "Sold") return "sold";
  };

  return listing.listing.new_listing ? (
    <div className="d-flex align-items-center">
      <div className={`status new-listing mr-3`} />
      <p className="mb-0">New Listing</p>
    </div>
  ) : (
    <div className="d-flex align-items-center">
      <div
        className={`status ${statusToClass(
          listing.listing.listing_status
        )} mr-3`}
      />
      <p className="mb-0">{listing.listing.listing_status}</p>
    </div>
  );
};

export default connect()(Listings);
