import React, { Component } from 'react';
import Login from "./Login/Login"


class Header extends Component {
    render(){
        const { updateUser } = this.props;
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">Home</a>
                        </li>
                    </ul>
                    <Login updateUser={updateUser}/>
                </div>
            </nav>
        )
    }
}


export default Header;
