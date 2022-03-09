import {
  GET_LISTINGS,
  LOADING_LISTINGS,
  SET_SORT_VALUE,
} from "../actions/types";

const initialState = {
  listingsLoading: true,

  listings: null,
  count: null,
  limit: null,
  page: null,
  pages: null,

  sortValue: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_LISTINGS:
      return {
        ...state,
        listingsLoading: true,
      };

    case GET_LISTINGS:
      return {
        ...state,
        listings: action.payload.listings,
        count: action.payload.count,
        limit: action.payload.limit,
        page: action.payload.page,
        pages: action.payload.pages,
        listingsLoading: false,
      };

    case SET_SORT_VALUE:
      return {
        ...state,
        sortValue: action.payload,
      };

    default:
      return state;
  }
};
