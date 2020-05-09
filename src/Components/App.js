import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Logo from './Logo';
// import SearchBar from './SearchBar';
import RecentPosts from './RecentPosts';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/result" component={Result} />
                </Switch>
                <RecentPosts />
            </BrowserRouter>
        </div>
    );
}

export default App;
