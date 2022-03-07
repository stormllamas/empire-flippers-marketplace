import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LinkItems from "./LinkItems";
import LinkItemParent from "./LinkItemParent";
import LinkItemGroup from "./LinkItemGroup";
import LinkItemChild from "./LinkItemChild";

const Sidebar = () => {
  const [openLinkItem, setOpenLinkItem] = useState("Marketplace");

  return (
    <div className="sidebar" style={{ backgroundColor: "#222" }}>
      <div className="top-section">
        <Link to="/marketplace">
          <img
            src={require("../../../assets/img/ef-logo-white2x.png")}
            alt="Empire Flippers Logo"
            className="ef-logo"
          />
        </Link>
        <div
          className="notification-button pointer"
          style={{ marginTop: "0.5rem" }}
        >
          <i className="far fa-bell text-white" title="Notifications"></i>
        </div>
      </div>
      <LinkItems>
        <LinkItemParent icon="fa fa-shapes" title="Marketplace" active />
        <LinkItemGroup label="Marketplace">
          <LinkItemChild title="All Listings" pathNameToMatch="marketplace" />
          <LinkItemChild title="Watch List" />
        </LinkItemGroup>
        <LinkItemParent icon="fas fa-shopping-bag" title="Buying" />
        <LinkItemGroup label="Buying">
          <LinkItemChild title="Active Unlocks" />
          <LinkItemChild title="Closed Unlocks" />
          <LinkItemChild title="Pending Sold" />
          <LinkItemChild title="Purchases" />
          <LinkItemChild title="Offers" />
        </LinkItemGroup>
        <LinkItemParent icon="fas fa-coins" title="Selling" />
        <LinkItemGroup label="Selling">
          <LinkItemChild title="Listings" />
          <LinkItemChild title="Offers" />
          <LinkItemChild title="Upcoming Calls" />
          <LinkItemChild title="Valuations" />
          <LinkItemChild title="Resources" />
        </LinkItemGroup>
        <LinkItemParent icon="far fa-chart-bar" title="Investing" />
        <LinkItemGroup label="Investing">
          <LinkItemChild title="My Investments" />
          <LinkItemChild title="EFC Deals" />
          <LinkItemChild title="Information" />
        </LinkItemGroup>
        <LinkItemParent icon="fas fa-wallet" title="Wallet" />
        <LinkItemParent icon="far fa-comment" title="Messages" />
      </LinkItems>
      <div className="sidebar-divider" />
    </div>
  );
};

export default connect()(Sidebar);
