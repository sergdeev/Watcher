import React from "react";
import CallApi from '../../../api/api';

export default class MoviePage extends React.Component {

    componentDidMount () {
        const movie_id = this.props.params.id;
        CallApi.get(`/movie/${movie_id}`);
    }

    render(){
        return (
            <div>MoviePage</div>
        );
    }
}