import React, {Component} from "react";
import { API_URL, API_KEY_3, fetchApi } from "../../../api/api";



class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            errors: {},
            submitting: false
        }
    }


    onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => ({
            [name]: value,
            errors: {
                ...prevState.errors,
                base: false,
                [name]: null
            }
        }));
    };



    handleBlur = () => {
        const errors = this.validateFields();
        if(Object.keys(errors).length > 0){
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    ...errors
                }
            }))
        }
    }


    validateFields = () => {
        const errors = {};
        if(this.state.username === "") {
            errors.username = "Not empty";
        };
        if(this.state.password.length < 5){
            errors.password = "Password must be at least 5 character";
        };
        if(this.state.repeatPassword !== this.state.password){
            errors.repeatPassword = "Password must be the same";
        }
        return errors;
    };


    onSubmit = () => {
        const linkRequestToken = `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`;
        const linkCreateSessionWithLogin = `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`;
        const linkCreateSession = `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`;

        this.setState({
            submitting: true
        });

        fetchApi(linkRequestToken)
        .then(data => {
            //console.log("data",data);
            return fetchApi(linkCreateSessionWithLogin,{
                        method: "POST",
                        mode: "cors",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            username: this.state.username,
                            password: this.state.password,
                            request_token: data.request_token
                        })
                    })
            })
            .then(data => {
                //console.log("succes", data);
                return fetchApi(linkCreateSession,{
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({
                                request_token: data.request_token
                            })
                        })
            })
            .then(data => {
                this.props.updateSessionId(data.session_id);
                return fetchApi(`${API_URL}/account?api_key=${API_KEY_3}&session_id=${data.session_id}`)
                //console.log("session", data.session_id);
            })
            .then(user => {
                console.log("user", user);
                this.setState({
                    submitting: false
                },
                () => {
                    this.props.updateUser(user);
                });
            })
            .catch(error =>{
                console.log("error", error);
                this.setState({
                    submitting: false,
                    errors: {
                        base: error.status_message
                    }
                })
            });
        }


    onLogin = event => {
        event.preventDefault();
        const errors = this.validateFields();
        if(Object.keys(errors).length > 0){
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    ...errors
                }
            }))
        } else {
            this.onSubmit();
        }
    };



    render() {
        const { username, password, repeatPassword, errors, submitting } = this.state;
        return (
            <div className="form-login-container">
                <form className="form-login">
                    <h1 className="h3 mb-3 font-weight-normal text-center">
                      Авторизация
                    </h1>
                    <div className="form-group">
                        <label htmlFor="username">Пользователь</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Пользователь"
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            onBlur={this.handleBlur}
                          />
                          {errors.username && (
                            <div className="invalid-feedback">{errors.username}</div>
                          )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Пароль"
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            />
                        {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Повторите пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="repeatPassword"
                            placeholder="Повторите пароль"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={this.onChange}
                            />
                        {errors.repeatPassword && (
                        <div className="invalid-feedback">{errors.repeatPassword}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-lg btn-outline-dark btn-block"
                        onClick={this.onLogin}
                        disabled={submitting}
                        >
                        Вход
                    </button>
                    {errors.base && (
                        <div className="invalid-feedback text-center">{errors.base}</div>
                    )}
                </form>
            </div>
        );
    }
}

export default LoginForm;
