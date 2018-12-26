import React from "react";
import Header from "./Header/Header";
import CallApi, { API_URL, API_KEY_3, fetchApi } from '../api/api';
import Cookies from 'universal-cookie';
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import MoviePage from "./pages/MoviePage/MoviePage"

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";




import { BrowserRouter, Route } from "react-router-dom";

const cookies = new Cookies();

export const AppContext = React.createContext();

library.add(fas, far);


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null,
            session_id: "",
            showLoginModal: false,
            favoriteMovies: [],
            watchList: []
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
                this.getFavoriteMovies();
            })
        }

    }

    getFavoriteMovies = () => {
        const { session_id, user } = this.state;
        CallApi.get(`/account/${user.id}/favorite/movies`, {
            params: {
                session_id: session_id,
                language: "ru-RU"
            }
        })
        .then(data => {
            const moviesID = [];
            data.results.map(movie => {
              moviesID.push(movie.id);
            });
            this.setState({
              favoriteMovies: [...moviesID]
            });
            return CallApi.get(`/account/${user.id}/watchlist/movies`, {
                params: {
                    session_id: session_id,
                    language: "ru-RU"
                }
            })
            .then(data => {
                const moviesID = [];
                data.results.map(movie => {
                  moviesID.push(movie.id);
                });
                this.setState({
                    watchlist: [...moviesID]
                });
            })
        })
    }


    showToggleModal = () => {
        this.setState(prevState => ({
            ...prevState,
            showLoginModal: !prevState.showLoginModal
          }));
    }




    render() {
        const { user, session_id, favoriteMovies, watchList } = this.state;
        return (
            <BrowserRouter>
                <AppContext.Provider 
                    value={{
                        user,
                        updateUser: this.updateUser,
                        session_id,
                        updateSessionId: this.updateSessionId,
                        onLogOut: this.onLogOut,
                        showToggleModal: this.showToggleModal,
                        getFavoriteMovies: this.getFavoriteMovies,
                        favoriteMovies,
                        watchList
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
