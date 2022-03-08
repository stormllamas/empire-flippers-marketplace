import { GET_LISTINGS, LOADING_LISTINGS } from "../actions/type";

const initialState = {
  listingsLoading: true,

  listings: null,
  count: null,
  limit: null,
  page: null,
  pages: null,
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

    default:
      return state;
  }
};
