import React from "react";
import CallApi from '../../../api/api';
import MovieInfo from "../../Movies/Movie/MovieInfo";
import MovieTab from "../../Movies/Movie/MovieTab";
import { Route, Switch } from "react-router-dom";
import MovieDetail from "../../Movies/Movie/MovieDetail";
import MovieVideos from "../../Movies/Movie/MovieVideos";
import MovieCredits from "../../Movies/Movie/MovieCredits";



export default class MoviePage extends React.Component {
    constructor(){
        super();
        this.state={
            movie: {}
        }
    }

    componentDidMount () {
        const movie_id = this.props.match.params.id;
        CallApi.get(`/movie/${movie_id}`, {
            params: {
                language: "ru-RU"
            }
        })
        .then(data => {
            this.setState({
                movie: data
            });
        });
    }

    render(){
        const { movie } = this.state;
        return (
            <div>
                <MovieInfo movie={movie}/>
                <MovieTab movie={movie}/>  
                <Switch>
                    <Route exact path="/movie/:id/detail" render={propsRouter => (
                        <MovieDetail {...propsRouter} movie={movie}/>
                    )}/>
                    <Route path="/movie/:id/videos" component={MovieVideos}/>
                    <Route path="/movie/:id/credits" component={MovieCredits}/>
                </Switch>
            </div>
        );
    }
}