import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Sidebar from "./components/layout/Sidebar/Sidebar";
import MarketPlace from "./components/MarketPlace";
import "./assets/scss/main.scss";

import { getListings } from "./actions/listingActions";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/marketplace/grid/id" />} />
            <Route
              path="/marketplace/:format/:page"
              element={<MarketPlace />}
            />
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
