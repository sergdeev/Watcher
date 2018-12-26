import React from "react";
import UIIcon from "../../UIComponents/UIIcon";
//imp AppContextHOC, AddFavouriteHOC

const Favorites = ({ isAdded, onAddFavorites }) => {
    return (
        <UIIcon
            onClick={onAddFavorites("favorite")}
            iconName="heart"
            isAdded={isAdded}
        />
    )
}