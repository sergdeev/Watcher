import React from "react";
import CallApi from "../../../api/api";

export default class MovieCredits extends React.Component {
    constructor(){
        super();
        this.state={
            movieCredits: []
        }
    }

    componentDidMount () {
        const movie_id = this.props.match.params.id;
        CallApi.get(`/movie/${movie_id}/credits`, {
            params: {
                language: "ru-RU"
            }
        })
        .then(data => {
            this.setState({
                movieCredits: data.cast
            });
        });
    }

    render(){
        const { movieCredits } = this.state;
        return (
            <div className="container pt-2">
                {movieCredits.map(credit => (
                    <img
                        key={credit.id}
                        className="card-img"
                        src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                        style={{ width: "180px", height: "270px", margin: "1px" }}
                        alt=""
                    />
                ))}
            </div>
        );
    }
}