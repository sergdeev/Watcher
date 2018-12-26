import React from 'react'
import UIIcon from '../UIComponents/UIIcon'
import AppContextHOC from "../HOC/AppContextHOC";
import AddMovieToListHOC from "../HOC/AddMovieToListHOC"

const Favorites = ({ isAdded, addFavorite }) => {
        return(
            <UIIcon
                iconName={"heart"}
                onClick={addFavorite}
                isAdded={isAdded}
                />
        );  
}



export default AppContextHOC(AddMovieToListHOC(Favorites, "favoriteMovies", "favorite"));