import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Loader from './Loader';

const Home = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */ './Home'),
    loading: Loader
});
const Profile = Loadable({
    loader: () => import(/* webpackChunkName: 'profile' */ './Profile'),
    loading: Loader
});
const Messages = Loadable({
    loader: () => import(/* webpackChunkName: 'messages' */ './Messages'),
    loading: Loader
});
const Settings = Loadable({
    loader: () => import(/* webpackChunkName: 'settings' */ './Settings'),
    loading: Loader
});

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
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/settings" component={Settings} />
            </div>
        </BrowserRouter>
    );
};

export default Router;