import React, { Component } from "react";
import Card from "./Components/Card";
import { connect } from "react-redux";
import Add from "./Components/Add";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.movieList
            .filter(e =>
              e.title.toLowerCase().includes(this.props.search.toLowerCase())
            )
            .map(e => (
              <div
                className="col-12 col-md-4 col-xl-3"
                style={{ margin: "20px 0px" }}
              >
                <Card movie={e} />
              </div>
            ))}
        </div>
        <Add />
      </div>
    );
  }
}

const MSTP = state => ({
  movieList: state.movies,
  search: state.inputSearch,
});

// const MDTP = dispatch => ({
//   add: movie => dispatch(addMovie(movie)),
//   delete: movie => dispatch(deleteMovie(movie)),
//   update: (movie, id) => dispatch(updateMovie(movie, id)),
// });

export default connect(MSTP)(Home);
