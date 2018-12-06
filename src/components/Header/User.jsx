import React, {Component} from "react";

export default class User extends Component {
    render(){
        const { user } = this.props;
        return (
            <div>
                <img className="rounded-circle" src = {`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=44`}/>
            </div>
        )
    }
}
