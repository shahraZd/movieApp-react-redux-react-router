import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>this is movie page</h1>
        </div>
      </div>
    );
  }
}


export default (Home);
