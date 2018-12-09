import React, {Component} from "react";

import { AppContext } from "../App"

class User extends Component {
    render(){
        const { user } = this.props;
        return (
            <div>
                <img className="rounded-circle" src = {`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=44`}/>
            </div>
        )
    }
}


const UserContainer = () => {
    return <AppContext.Consumer>
        {(context) => {
            //console.log(context);
            return <User user={context.user}/>
        }}
        </AppContext.Consumer>
}

UserContainer.displayName = "UserContainer";

export default UserContainer;