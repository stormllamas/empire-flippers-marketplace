import React, { ReactElement } from "react";

import { connect } from "react-redux";

import LinkItemChild from "./LinkItemChild";
import { State, SiteState } from "../../../interfaces/interfaces";

interface ILinkItemGroup {
  children: ReactElement<typeof LinkItemChild>[];
  label: string;
  site: SiteState;
}

const LinkItemGroup = ({
  children,
  label,

  site: { openLinkItem },
}: ILinkItemGroup) => {
  return (
    <div
      className={`link-item-group ${openLinkItem === label ? "" : "closed"}`}
      style={{ height: children.length * 40 }}
    >
      {children}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  site: state.site,
});

export default connect(mapStateToProps)(LinkItemGroup);
