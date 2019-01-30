import React from 'react';


export default class PrimaryReleaseYear extends React.PureComponent{
    static defaultProps = {
        options: [
            {
                label: "2018",
                value: "2018"
            },
            {
                label: "2017",
                value: "2017"
            },
            {
                label: "2016",
                value: "2016"
            },
            {
                label: "2015",
                value: "2015"
            }
        ]
    };



    render(){
        const {
            options,
            onChangeFilters,
            primary_release_year
        } = this.props;
        return(
            <div className="form-group">
                <label htmlFor="primary_release_year">Год релиза:</label>
                <select
                    id="primary_release_year"
                    className="form-control"
                    name="primary_release_year"
                    value={primary_release_year}
                    onChange={onChangeFilters}
                    >
                    {options.map(item => {
                        return(
                            <option value={item.value} key={item.value}>{item.label}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}
