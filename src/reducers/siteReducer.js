import { SITE_LOADING } from "../actions/types";

const initialState = {
  siteLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_LOADING:
      return {
        ...state,
        siteLoading: true,
      };

    default:
      return state;
  }
};
