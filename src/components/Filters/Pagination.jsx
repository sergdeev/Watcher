import React, { Component } from 'react';



export default class Pagination extends Component{

    render(){
        const {
            page,
            total_pages,
            onChangePage
        } = this.props;
        return(
            <div>
                <div className="btn-group d-flex justify-content-center">
                    <button type="button" className="btn btn-light"
                        disabled = {page === 1}
                        onClick = {() => {onChangePage(page - 1)}}>
                        Назад
                    </button>
                    <button type="button" className="btn btn-light"
                        onClick = {() => {onChangePage(page + 1)}}>
                        Вперед
                    </button>
                </div>
                <div className="text-center">
                    {page} из {total_pages}
                </div>
            </div>
        )
    }
}
