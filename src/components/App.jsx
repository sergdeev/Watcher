import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
    constructor(){
        super();

        this.state = {
            filters: {
                sort_by: 'vote_average.desc'
            },
            page: 1
        }
    }

    onChangeFilters = event => {
        //console.log(event.target.value);
        const newFilters = {
            ...this.state.filter,
            [event.target.name] : event.target.value
        };
        this.setState(prevState => ({
            filters: newFilters
        }));
        // console.log(this.state.filters);
    }

    onChangePage = page =>{
        this.setState({
            page
        })
    }

    render() {
        const { filters, page } = this.state;
        return (
          <div className="container">
            <div className="row mt-4">
              <div className="col-4">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h3>Фильтры:</h3>
                    <Filters
                        filters = {filters}
                        onChangeFilters = {this.onChangeFilters}
                        page = {page}
                        onChangePage = {this.onChangePage}
                        />
                  </div>
                </div>
              </div>
              <div className="col-8">
                <MoviesList
                    filters = {filters}
                    page = {page}
                    onChangePage = {this.onChangePage}/>
              </div>
            </div>
          </div>
        );
      }
    }
