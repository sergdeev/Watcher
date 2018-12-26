import React from 'react'
import UIIcon from '../UIComponents/UIIcon'
import AppContextHOC from "../HOC/AppContextHOC";
import AddMovieToListHOC from "../HOC/AddMovieToListHOC"


class Favorites extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isAdded: this.props.favoriteMovies.includes(this.props.item.id)
        }
    }

    addFavorite = () => {
        const { user, session_id, item } = this.props;
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