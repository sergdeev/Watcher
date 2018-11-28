import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from "../../../api/api";

//`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`
//`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`
//`${API_URL}/authentication/session/new?api_key=${API_KEY_3}`




class Login extends Component {
    sendPromises = () => {
        const linkRequestToken = `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`;
        const linkCreateSessionWithLogin = `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`;
        const linkCreateSession = `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`;
        fetch(linkRequestToken)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                fetch(linkCreateSessionWithLogin, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        username: "sergluka",
                        password: "apitarakan1972",
                        request_token: data.request_token
                    })
                })
                    .then(response => response.json()).then(data => {
                        //console.log(data);
                        fetch(linkCreateSession, {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({
                                request_token: data.request_token
                            })
                        })
                        .then(response => response.json()).then(data => console.log("session", data))
                    });
            })
    };
    render(){
        return(
            <div className="container">
                <button
                    className = "btn btn-outline-light"
                    type="button"
                    onClick={this.sendPromises}>
                    Login
                </button>
            </div>
        )
    }
}


export default Login;
