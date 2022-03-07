import React, { FC, Fragment } from "react";
import { connect } from "react-redux";

import Sidebar from "./layout/Sidebar/Sidebar";

const MarketPlace = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default connect()(MarketPlace);
