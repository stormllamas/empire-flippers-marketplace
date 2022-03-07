import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import LinkItemParent from "./LinkItemParent";
import LinkItemGroup from "./LinkItemGroup";

interface IListItems {
  children:
    | ReactElement<typeof LinkItemParent>[]
    | ReactElement<typeof LinkItemGroup>[];
}

const LinkItems = ({ children }: IListItems) => {
  return <div className="link-items">{children}</div>;
};

export default connect()(LinkItems);
