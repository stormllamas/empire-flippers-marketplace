import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Sidebar from "./components/layout/Sidebar/Sidebar";
import MarketPlace from "./components/MarketPlace";
import "./assets/scss/main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Routes>
            <Route path="/marketplace" element={<MarketPlace />} />
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
