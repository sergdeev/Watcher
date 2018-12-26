import React from 'react'
import UIIcon from '../UIComponents/UIIcon'
import AppContextHOC from "../HOC/AppContextHOC";
import AddMovieToListHOC from "../HOC/AddMovieToListHOC"
import CallApi from "../../api/api"

class Favorites extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAdded: this.props.favoriteMovies.includes(this.props.item.id)
        }
    }

    addFavorite = () => {
        const { user, item, sessionId } = this.props;
        this.setState(prevState => ({
            ...prevState,
            isAdded: !prevState.isAdded
        }));
        CallApi.post(`/account/${user.id}/favorite`, {
            params: {
                sessionId: sessionId
            },
            body: {
                "media_type": "movie",
                "media_id": item.id,
                "favorite": this.state.isAdded
            }
        })
    };

    render(){
        const { isAdded } = this.state;
        return(
            <UIIcon
                iconName={"heart"}
                onClick={this.addFavorite}
                isAdded={isAdded}
                />
        );
    }    
}



export default AppContextHOC(Favorites);