import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>In progress!</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
