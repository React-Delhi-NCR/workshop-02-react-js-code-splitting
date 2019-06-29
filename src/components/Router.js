import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Messages from './Messages';
import Settings from './Settings';

const Router = () => {
    return (
        <BrowserRouter>
            <ul className="nav">
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/messages">
                        Messages
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        Settings
                    </Link>
                </li>
            </ul>
            <div class="content">
                <Redirect from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/settings" component={Settings} />
            </div>
        </BrowserRouter>
    );
};

export default Router;
