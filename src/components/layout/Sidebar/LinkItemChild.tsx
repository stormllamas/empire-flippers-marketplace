import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { connect } from "react-redux";

interface ILinkItemChild {
  title: string;
  pathNameToMatch?: string;
}

const LinkItemChild = ({ title, pathNameToMatch = "none" }: ILinkItemChild) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`child ${
        pathNameToMatch &&
        pathname.includes(pathNameToMatch.replace(" ", "").toLowerCase())
          ? "active"
          : ""
      }`}
    >
      <div className="d-flex">
        <div className="text">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default connect()(LinkItemChild);
