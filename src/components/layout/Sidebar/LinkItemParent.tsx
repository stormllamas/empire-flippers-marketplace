import React, { FC } from "react";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from "../../../store";

import { connect } from "react-redux";

import { setOpenLinkItem } from "../../../actions/siteActions";
import { State, SiteState } from "../../../interfaces/interfaces";

interface ILinkItemParent {
  icon: string;
  title: string;
  active?: boolean;
  setOpenLinkItem: Function;
  site: SiteState;
}

const LinkItemParent = ({
  icon,
  title,
  active,

  site: { openLinkItem },

  setOpenLinkItem,
}: ILinkItemParent) => {
  return (
    <div
      className={`parent ${active ? "active" : ""}`}
      onClick={() => setOpenLinkItem(title)}
    >
      <div className="d-flex">
        <i className={`${icon} icon`} />
        <div className="text">
          <span>{title}</span>
          {openLinkItem === title ? (
            <i className="fa fa-chevron-down"></i>
          ) : (
            <i className="fa fa-chevron-right"></i>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  site: state.site,
});

export default connect(mapStateToProps, { setOpenLinkItem })(LinkItemParent);
