import React from "react";
import CallApi from "../../../api/api";
import { Media } from "reactstrap";

export default class MovieVideos extends React.Component {
    constructor(){
        super();
        this.state={
            movieVideos: []
        }
    }

    componentDidMount () {
        const movie_id = this.props.match.params.id;
        CallApi.get(`/movie/${movie_id}/videos`, {
            params: {
                language: "ru-RU"
            }
        })
        .then(data => {
            this.setState({
                movieVideos: data.results
            });
        });
    }

    render(){
        const { movieVideos } = this.state;
        return (
            <div className="container pt-2">
                {movieVideos.map(video => (
                    <Media key={video.id}>
                        <Media left href="#" className="mr-4">
                            <iframe
                                title={video.id}
                                width="560"
                                height="315"
                                src={`https://www.youtube-nocookie.com/embed/${video.key}`}
                                frameBorder="0"
                                allowFullScreen
                                />
                        </Media>
                        <Media body>
                            <Media heading>
                                {video.name}
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                ))}
            </div>
        );
    }
}