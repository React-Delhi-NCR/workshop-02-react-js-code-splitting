import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Loader from './Loader';

const H = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */ './Home'),
    loading: Loader
}), P = Loadable({
    loader: () => import(/* webpackChunkName: 'profile' */ './Profile'),
    loading: Loader
}), S = Loadable({
    loader: () => import(/* webpackChunkName: 'settings' */ './Settings'),
    loading: Loader
});

ReactDOM.render(<div>
    <BrowserRouter>
        <ul className="sidebar">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    Profile
                </Link>
            </li>
            <li>
                <Link to="/settings">
                    Settings
                </Link>
            </li>
        </ul>
        <div>
            <Route exact path="/" component={H} />
            <Route exact path="/profile" component={P} />
            <Route exact path="/settings" component={S} />
        </div>
    </BrowserRouter>
</div>, document.getElementById('app'));