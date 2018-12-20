import React, { Component } from 'react';
import Login from "./Login/Login";
import UserMenu from "./UserMenu";


class Header extends Component {
    render(){
        const { user, updateSessionId } = this.props;
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">Home</a>
                        </li>
                    </ul>
                    {user?
                        <UserMenu />:
                        <Login/>
                    }
                </div>
            </nav>
        )
    }
}


export default Header;
