import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Addbook from "./component/Addbook";
import Library from "./component/Library";
import ViewAllContact from "./component/ViewAllContact";
import Errorpage from "./component/errorpage";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/addbook" element={<Addbook />} />
            <Route exact path="/library" element={<Library />} />
            <Route exact path="/view-contact" element={<ViewAllContact />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Router>
      </>
    );
  }
}
