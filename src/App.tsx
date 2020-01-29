import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import SearchSNCF from "./Sncf/SearchSNCF";
import {UserCard} from "./UserCard/UserCard";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Login </Link></li>
                            <li><Link to={'/UserCard'} className="nav-link"> UserCard </Link></li>
                            <li><Link to={'/SearchSNCF'} className="nav-link">SearchSNCF</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/UserCard' component={UserCard} />
                        <Route path='/SearchSNCF' component={SearchSNCF} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
