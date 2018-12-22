import React from "react";
import { Table, Badge } from 'reactstrap';

export default class MovieDetail extends React.Component {


    render(){
        const { original_title, 
                production_companies,
                production_countries, 
                status, 
                budget, 
                release_data,
                original_language,
                revenue,
                genres } = this.props.movie;
        return (
            <Table className="container">
                <tbody>
                    <tr>
                        <td>Оригинальное название</td>
                        <td>{original_title}</td>
                    </tr>
                    <tr>
                        <td>Статус</td>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <td>Дата выхода</td>
                        <td>{release_data}</td>
                    </tr>
                    <tr>
                        <td>Бюджет</td>
                        <td>{`$${budget}`}</td>
                    </tr>
                    <tr>
                        <td>Язык оригинала</td>
                        <td>{original_language}</td>
                    </tr>
                    <tr>
                        <td>Страна</td>
                        <td>{production_countries && 
                            production_countries.map(
                                country => `${country.name}`
                            )}</td>
                    </tr>
                    <tr>
                        <td>Сборы</td>
                        <td>{`$${revenue}`}</td>
                    </tr>
                    <tr>
                        <td>Компания</td>
                        <td>{production_companies && 
                            production_companies.map(company => {
                                return(
                                    <div key={company.id}>
                                        <Badge color="info">{company.name}</Badge>
                                        <br/>
                                    </div>
                                )
                            }
                            )}</td>
                    </tr>
                    <tr>
                        <td>Жанры</td>
                        <td>{genres && 
                            genres.map(genre => {
                                return(
                                    <div key={genre.id}>
                                        <Badge color="info">{genre.name}</Badge>
                                    </div>
                                )
                            }
                            )}</td>
                    </tr>
                </tbody>
          </Table>
        );
    }
}