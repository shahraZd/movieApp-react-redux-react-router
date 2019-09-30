import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div class="card" style={{ width: 250 + "px" }}>
      <img
        src={props.movie.img}
        class="card-img-top"
        alt={"#" + props.movie.title}
      />
      <div class="card-body">
        <h5 class="card-title">{props.movie.title}</h5>
        <Link to={`desc/${props.movie.id}`} className="btn btn-primary">
          See more...
        </Link>
      </div>
    </div>
  );
};

export default Card;
