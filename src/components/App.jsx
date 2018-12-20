import React from "react";
import Header from "./Header/Header";
import { API_URL, API_KEY_3, fetchApi } from '../api/api';
import Cookies from 'universal-cookie';
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import MoviePage from "./pages/MoviePage/MoviePage"

import { BrowserRouter, Route, Link } from "react-router-dom";

const cookies = new Cookies();

export const AppContext = React.createContext();


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null,
            session_id: ""
        }
    };

    updateUser = user => {
        this.setState({
            user
        })
    }

    updateSessionId = session_id => {
        cookies.set("session_id", session_id,
            {
                path: '/',
                maxAge: 2592000
                });
        this.setState({
            session_id
        })
    }


    onLogOut = () => {
        cookies.remove("session_id");
        this.setState({
            user: null,
            session_id: null
        });
    }

    componentDidMount(){
        const session_id = cookies.get("session_id");
        if(session_id){
            fetchApi(`${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`)
            .then(user => {
                this.updateUser(user);
                this.updateSessionId(session_id);
            })
        }

    }



    render() {
        const { user, session_id } = this.state;
        return (
            <BrowserRouter>
                <AppContext.Provider 
                    value={{
                        user,
                        updateUser: this.updateUser,
                        session_id,
                        updateSessionId: this.updateSessionId,
                        onLogOut: this.onLogOut
                        }}
                >
                    <div>
                        <Header user={user} updateUser={this.updateUser} updateSessionId={this.updateSessionId}/>
                        <Route exact path="/" component={MoviesPage}/>
                        <Route path="/movie/:id" component={MoviePage}/>
                    </div>
                </AppContext.Provider>
            </BrowserRouter>   
        );
      }
    }
