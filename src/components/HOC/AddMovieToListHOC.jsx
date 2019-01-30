import React from 'react'
import CallApi from "../../api/api"

export default (Component, type, name) => class AddMovieToListHOC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAdded: props[type].includes(props.item.id)
        }
    }

    addFavorite = () => {
        const { user, item, session_id, showToggleModal } = this.props;
        if(!session_id){
            showToggleModal();
        } else{
            this.setState(prevState => ({
                ...prevState,
                isAdded: !prevState.isAdded
            }), () =>
                CallApi.post(`/account/${user.id}/${[name]}`, {
                    params: {
                        session_id: session_id
                    },
                    body: {
                        media_type: "movie",
                        media_id: item.id,
                        [name]: this.state.isAdded
                    }
                })
            );
        }
    };

        render(){
            const { isAdded } = this.state;
            return (
                <Component isAdded={isAdded} addFavorite={this.addFavorite} />
            );
        }
    }
