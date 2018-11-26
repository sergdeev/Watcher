import React from "react";
import SortBy from './SortBy.jsx';
import Pagination from './Pagination.jsx';
import PrimaryReleaseYear from './PrimaryReleaseYear.jsx';
import Genres from './Genres.jsx';


export default class Filters extends React.Component {
  render() {
      const {
          filters: { sort_by, primary_release_year, with_genres },
          total_pages,
          onChangeFilters,
          page,
          onChangePage
      } = this.props;
      return (
        <form className="mb-3">
            <SortBy onChangeFilters={onChangeFilters} sort_by ={sort_by}/>
            <PrimaryReleaseYear onChangeFilters={onChangeFilters} primary_release_year={primary_release_year}/>
            <Genres onChangeFilters={onChangeFilters} with_genres={with_genres}/>
            <Pagination page={page} onChangePage={onChangePage} total_pages={total_pages}/>
        </form>
      );
  }
}
