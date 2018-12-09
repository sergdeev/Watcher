import React from "react";
import MoviesList from "./MoviesList";
import { API_URL, API_KEY_3 } from "../../api/api";


export default Component => class MoviesHOC extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  getMovies = (filters, page) => {
    const { sort_by, primary_release_year, with_genres } = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}&with_genres=${with_genres}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
        this.props.getTotalPages(data.total_pages);
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
      this.getMovies(this.props.filters, 1);
      this.props.onChangePage(1);
    }
    if (
      this.props.filters.primary_release_year !==
      prevProps.filters.primary_release_year
    ) {
      this.getMovies(this.props.filters, 1);
      this.props.onChangePage(1);
    }
    if (this.props.filters.with_genres !== prevProps.filters.with_genres) {
      this.getMovies(this.props.filters, 1);
      this.props.onChangePage(1);
    }
    if (this.props.page !== prevProps.page) {
      this.getMovies(this.props.filters, this.props.page);
    }
  }

  // componentWillReceiveProps(nextProps){
  //     //console.log('props', this.props, 'nextProps', nextProps);
  //     if(this.props.filters.sort_by !== nextProps.filters.sort_by){
  //         // const { filters: { sort_by } } = nextProps;
  //         // const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}`;
  //         // fetch(link)
  //         //   .then(response => {
  //         //       return response.json();
  //         //   })
  //         //   .then(data => {
  //         //       this.setState({
  //         //           movies: data.results
  //         //       });
  //         //   });
  //         this.getMovies(nextProps.filters);
  //     }
  // }

  render() {
    const { movies } = this.state;
    //console.log("render");
    console.log(Component);
    return <Component movies={movies} />;
  }
}
