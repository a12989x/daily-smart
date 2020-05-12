import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import RecentPosts from '../RecentPosts';

function Home(props) {
    const handleSearchBarSubmit = (query) => {
        props.fetchPostWithQuery(query);
        props.history.push('/results');
    };

    return (
        <div className="home">
            <Logo />
            <SearchBar
                handleSearchBarSubmit={(query) => handleSearchBarSubmit(query)}
            />
            <RecentPosts />
        </div>
    );
}

export default connect(null, actions)(Home);
