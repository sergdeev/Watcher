import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import Header from "./Header/Header";
import { API_URL, API_KEY_3, fetchApi } from '../api/api';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default class App extends React.Component {
    constructor(){
        super();

        this.state = {
            filters: {
                sort_by: 'vote_average.desc',
                primary_release_year: '',
                with_genres: []
            },
            page: 1,
            total_pages: "",
            user: null,
            session_id: ""
        }
    };

    onChangeFilters = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState(prevState => ({
          filters: {
            ...prevState.filters,
            [name]: value
          }
        }));
      };

    onChangePage = page =>{
        this.setState({
            page
        })
    };


    getTotalPages = total_pages =>{
        this.setState({
            total_pages
        })
    };

    onClearFilters = event => {
        this.setState({
            filters: {
                sort_by: 'vote_average.desc',
                primary_release_year: '2018',
                with_genres: []
            },
            page: 1
        })
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


    componentDidMount(){
        const session_id = cookies.get("session_id");
        if(session_id){
            fetchApi(`${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`)
            .then(user => this.updateUser(user));
        }

    }



    render() {
        const { filters, page, total_pages, user } = this.state;
        return (
            <div>
                <Header user={user} updateUser={this.updateUser} updateSessionId={this.updateSessionId}/>
                <div className="container">
                    <div className="row mt-4">
                      <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                          <div className="card-body">
                            <h3>Фильтры:</h3>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-light" onClick = {this.onClearFilters}>
                                    Очистить
                                </button>
                            </div>
                            <Filters
                                filters = {filters}
                                onChangeFilters = {this.onChangeFilters}
                                page = {page}
                                onChangePage = {this.onChangePage}
                                total_pages = {total_pages}
                                />
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <MoviesList
                            filters = {filters}
                            page = {page}
                            onChangePage = {this.onChangePage}
                            getTotalPages = {this.getTotalPages}/>
                      </div>
                    </div>
                </div>
          </div>
        );
      }
    }
