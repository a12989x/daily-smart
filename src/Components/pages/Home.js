import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import RecentPosts from '../RecentPosts';

function Home(props) {
    const handleSearchBarSubmit = (query) => {
        console.log('trying to handle', query);
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

export default Home;
