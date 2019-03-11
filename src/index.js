import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ColorShades from './ColorShades'
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Main = () => {
    return <Router>
        <div>
            <ul>
                <li><Link to='/'>Image Viwer</Link></li>
                <li><Link to='/shades'>Color Shades</Link></li>
            </ul>
            <Switch>

                <Route exact path='/' component={App}></Route>
                <Route exact path='/shades' component={ColorShades}></Route>
            </Switch>
        </div>
    </Router>
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
