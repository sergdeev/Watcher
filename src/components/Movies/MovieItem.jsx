import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";


export default class MovieItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top card-img--height"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <Link className="card-title" to={`/movie/${item.id}`}>{item.title}</Link>
          <div>Рейтинг: {item.vote_average}</div>
          <Favorites item={item} />
        </div>
      </div>
    );
  }
}
