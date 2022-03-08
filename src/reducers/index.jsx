import { combineReducers } from "redux";
import siteReducer from "./siteReducer";
import listingsReducer from "./listingsReducer";

export default combineReducers({
  site: siteReducer,
  listings: listingsReducer,
});
