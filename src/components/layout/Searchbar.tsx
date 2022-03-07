import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

interface ISearchbar {}

const Searchbar = ({}: ISearchbar) => {
  return <div className="link-items"></div>;
};

export default connect()(Searchbar);
