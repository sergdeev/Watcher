import React from 'react'
import UIIcon from '../UIComponents/UIIcon'
import AppContextHOC from "../HOC/AppContextHOC";
import AddMovieToListHOC from "../HOC/AddMovieToListHOC"


const WatchList = ({ isAdded, addFavorite }) => {
        return(
            <UIIcon
                iconName={"bookmark"}
                onClick={addFavorite}
                isAdded={isAdded}
                />
        );  
}



export default AppContextHOC(AddMovieToListHOC(WatchList, "watchList", "watchlist"));