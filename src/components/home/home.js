import React, { Component } from "react";
import "./home.css";
import NotAvailable from "../_temp-not-available-page";
export default class Home extends Component {
  render() {
    return (
      <div className="main-container container bg-white">
        <NotAvailable />
      </div>
    );
  }
}
