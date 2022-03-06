import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const LinkItems = () => {
  return (
    <div className="link-item">
      <div className="top-section">
        <Link to="/marketplace">
          <img
            src={require("../../assets/img/ef-logo-white2x.png")}
            alt="Empire Flippers Logo"
            className="ef-logo"
          />
        </Link>
        <div className="notification-button" style={{ marginTop: "0.5rem" }}>
          <i className="far fa-bell text-white" title="Notifications"></i>
        </div>
      </div>
    </div>
  );
};

export default connect()(LinkItems);
