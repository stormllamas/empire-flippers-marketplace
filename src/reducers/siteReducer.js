import { SITE_LOADING, SET_OPEN_LINK_ITEM } from "../actions/types";

const initialState = {
  siteLoading: true,
  openLinkItem: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_LOADING:
      return {
        ...state,
        siteLoading: true,
      };

    case SET_OPEN_LINK_ITEM:
      return {
        ...state,
        openLinkItem:
          state.openLinkItem !== action.payload ? action.payload : "",
      };

    default:
      return state;
  }
};
