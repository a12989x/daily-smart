import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import RecentPosts from './RecentPosts';
import Home from './pages/Home';
import Results from './pages/Results';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/results" component={Results} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
