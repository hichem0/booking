import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import SearchSNCF from "./Sncf/SearchSNCF";
import {UserCard} from "./UserCard/UserCard";
import Login from "./Login/Login";

export default function App() {
    let log = false;
    if (localStorage.getItem("isLog") === "true") {
        log = true;
    }

    function disconnect() {
        if (localStorage.getItem("isLog") === "true" ) {
            localStorage.setItem("isLog", "false");
            window.location.reload();
            return (
                <Redirect to={'/'} />
            )
        }
    }

  const [isLog, setLog] = useState(log);

        function manageLog(state: boolean) {
            setLog(state);
            localStorage.setItem("isLog", String(state));
        }

        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Login </Link></li>
                            <li><Link to={'/UserCard'} className="nav-link"> UserCard </Link></li>
                            <li><Link to={'/SearchSNCF'} className="nav-link">SearchSNCF</Link></li>
                            <li><Link to={'/'} className="nav-link" onClick={disconnect}> Logout </Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route exact path='/'><Login isLog={isLog} setLog={manageLog}></Login></Route>
                        <Route exact path='/UserCard'> <UserCard isLog={isLog}/> </Route>
                        <Route exact path='/SearchSNCF'><SearchSNCF isLog={isLog}/> </Route>
                    </Switch>
                </div>
            </Router>
        );
    }


