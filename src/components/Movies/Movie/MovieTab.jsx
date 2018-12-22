import React from "react";
import { Nav, NavItem, NavLink as TabNavLink } from 'reactstrap';
import { NavLink } from "react-router-dom"


export default class MovieTab extends React.Component {

    render(){
        const { movie } = this.props;
        return (
            <div className="container">
                <Nav tabs>
                    <NavItem>
                        <TabNavLink>
                            <NavLink
                                to={`/movie/${movie.id}/detail`}
                                >
                                Movie Detail
                            </NavLink>
                        </TabNavLink>
                    </NavItem>
                    <NavItem>
                        <TabNavLink>
                            <NavLink
                                to={`/movie/${movie.id}/videos`}
                                >
                                Videos
                            </NavLink>
                        </TabNavLink>
                    </NavItem>
                    <NavItem>
                        <TabNavLink>
                            <NavLink
                                to={`/movie/${movie.id}/credits`}
                                >
                                Credits
                            </NavLink>
                        </TabNavLink>
                    </NavItem>
                </Nav>
                
          </div>
        );
    }
}