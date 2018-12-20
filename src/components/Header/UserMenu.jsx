import React, {Component} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";
import { fetchApi, API_URL, API_KEY_3 } from "../../api/api";
import AppContextHOC from "../HOC/AppContextHOC"

class UserMenu extends Component {
    constructor(){
        super();
        this.state={
            dropdownOpen: false
        }
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen 
        }));
      }
    

      handleLogOut = () => {
        fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`,{
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                session_id: this.props.session_id
            })
        })
        .then(() => {
            this.props.onLogOut();  
        })
      }


    render(){
        const { user } = this.props;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    tag="div"
                    onClick={this.toggleDropdown}
                    data-toggle="dropdown">
                    <img 
                        className="rounded-circle" 
                        src = {`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=44`}
                        onClick={this.toggleDropdown}
                    />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={this.handleLogOut}>Выйти</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}


export default AppContextHOC(UserMenu);