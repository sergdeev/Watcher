import React from 'react'
import CallApi from "../../api/api"

export default (Component, type) => 
    class AddMovieToListHOC extends React.Component{
        constructor(props){
            super(props);
            this.state= {
                isAdded: props[type].includes(this.props.item.id)
            }
        }

        addFavorite = () => {
            const { user, session_id, item } = this.props;
            console.log("this.props.favoriteMovies");
        };

        render(){
            const { isAdded } = this.state;
            return (
                <Component isAdded={isAdded} addFavorite={this.addFavorite} />
            );
        }
    }
