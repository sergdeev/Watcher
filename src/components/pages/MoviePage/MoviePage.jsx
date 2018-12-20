import React from "react";
import { API_URL, API_KEY_3, fetchApi } from '../../../api/api';

export default class MoviePage extends React.Component {

    componentDidMount () {
        const movie_id = this.props.params.id;
        const link = `${API_URL}/movie/${movie_id}?api_key=${API_KEY_3}&language=en-US`;
        fetchApi(link)
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data));
    }

    render(){
        return (
            <div>MoviePage</div>
        );
    }
}