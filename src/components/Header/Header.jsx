import React, { Component } from 'react';
import Login from "./Login/Login";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";


class Header extends Component {
    render(){
        const { user } = this.props;
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={"/"} className="nav-link">Home</Link>
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
