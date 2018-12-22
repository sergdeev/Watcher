import React from "react";


export default class MovieInfo extends React.Component {


    render(){
        const { backdrop_path, poster_path, title, overview } = this.props.movie;
        return (
            <div style={{
                background: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${backdrop_path}) no-repeat 50%/cover`
                }}
                className="movie-info">
                <div className="movie-container">
                    <div className="movie-page">
                        <div className="col-4 movie-image">
                            <img
                                className="card-img-top"
                                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                style={{"width": "300px"}}
                                alt=""
                                />
                        </div>
                        <div className="col-8 movie-text">
                            <div className="card-text">{title}</div>
                            <div className="card-text">{overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}