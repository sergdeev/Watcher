import React, { Component } from 'react';
// import { API_URL, API_KEY_3 } from "../../../api/api";
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from "./LoginForm"


//`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`
//`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`
//`${API_URL}/authentication/session/new?api_key=${API_KEY_3}`




class Login extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            showModal: false
        };

    }

    toggleModal() {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }


    // sendPromises = () => {
    //     const linkRequestToken = `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`;
    //     const linkCreateSessionWithLogin = `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`;
    //     const linkCreateSession = `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`;
    //
    //     const fetchApi = (url, options = {}) => {
    //         return new Promise((resolve, reject) => {
    //             fetch(url, options)
    //                 .then(response => {
    //                     if(response.status < 400){
    //                         return response.json();
    //                     } else{
    //                         throw response;
    //                     }
    //                 })
    //                 .then(data => {
    //                     resolve(data);
    //                     }).catch(response => {
    //                     response.json().then(error => {
    //                         reject(error);
    //                     })
    //                 })
    //
    //         })
    //     };
    //
    //     fetchApi(linkRequestToken)
    //     .then(data => {
    //         console.log("data",data);
    //         return fetchApi(linkCreateSessionWithLogin,{
    //                     method: "POST",
    //                     mode: "cors",
    //                     headers: {
    //                         "Content-type": "application/json"
    //                     },
    //                     body: JSON.stringify({
    //                             username: "sergluka",
    //                             password: "apitarakan1972",
    //                             request_token: data.request_token
    //                         })
    //                 })
    //         })
    //         .then(data => {
    //             console.log("succes",data);
    //             fetchApi(linkCreateSession, {
    //                 method: "POST",
    //                 mode: "cors",
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     request_token: data.request_token
    //                 })
    //             }
    //             )
    //         })
    //         .then(data => {
    //             console.log("session", data);
    //         })
    //         .catch(error => console.log("error", error));
    // }





        //---2-----
        // const getRequestToken = () => {
        //     return new Promise((resolve, reject) => {
        //         fetch(linkRequestToken)
        //             .then(response => {
        //                 if(response.status < 400){
        //                     return response.json();
        //                 } else{
        //                     throw response;
        //                 }
        //             })
        //             .then(data => {
        //                 resolve(data);
        //                 }).catch(response => {
        //                 response.json().then(error => {
        //                     reject(error);
        //                 })
        //             })
        //
        //     })
        // }
        //
        // const validateWithLogin = body => {
        //     return new Promise((resolve, reject) => {
        //         fetch(linkCreateSessionWithLogin,{
        //                     method: "POST",
        //                     mode: "cors",
        //                     headers: {
        //                         "Content-type": "application/json"
        //                     },
        //                     body: JSON.stringify(body)
        //                 })
        //             .then(response => {
        //                 if(response.status < 400){
        //                     return response.json();
        //                 } else{
        //                     throw response;
        //                 }
        //             })
        //             .then(data => {
        //                 resolve(data);
        //                 })
        //                 .catch(response => {
        //                 response.json().then(error => {
        //                     reject(error);
        //                 })
        //             })
        //
        //     })
        // }
        //
        // getRequestToken()
        // .then(data => {
        //     console.log("data",data);
        //     return validateWithLogin({
        //                     username: "serglukas",
        //                     password: "apitarakan1972",
        //                     request_token: data.request_token
        //                 })
        //     })
        //     .then(data => console.log("succes",data))
        //     .catch(error => console.log("error", error));


        //---1---
        // fetch(linkRequestToken)
        //     .then(response => response.json())
        //     .then(data => {
        //         //console.log(data);
        //         //2
        //         fetch(linkCreateSessionWithLogin, {
        //             method: "POST",
        //             mode: "cors",
        //             headers: {
        //                 "Content-type": "application/json"
        //             },
        //             body: JSON.stringify({
        //                 username: "sergluka",
        //                 password: "apitarakan1972",
        //                 request_token: data.request_token
        //             })
        //         })
        //             .then(response => response.json()).then(data => {
        //                 //console.log(data);
        //                 //3
        //                 fetch(linkCreateSession, {
        //                     method: "POST",
        //                     mode: "cors",
        //                     headers: {
        //                         "Content-type": "application/json"
        //                     },
        //                     body: JSON.stringify({
        //                         request_token: data.request_token
        //                     })
        //                 })
        //                 .then(response => response.json()).then(data => console.log("session", data))
        //             });
        //     })
    // };
    render(){
        const { updateUser } = this.props;
        return(
            <div className="container">
                <button
                    className = "btn btn-outline-light"
                    type="button"
                    onClick={this.toggleModal}>
                    Login
                </button>
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                    <ModalBody>
                        <LoginForm updateUser={updateUser}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default Login;
