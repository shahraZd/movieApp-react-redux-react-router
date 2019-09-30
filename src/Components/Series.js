import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.series)
    return (
      <div className="container">
        <div className="row">
          {this.props.series.map(e => (
            <div
              className="col-12 col-md-4 col-xl-3"
              style={{ margin: "20px 0px" }}
            >
              <Card {...e} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const MSTP = state => ({
  series: state.serieReducer.series,
});

export default connect(MSTP)(Home);
