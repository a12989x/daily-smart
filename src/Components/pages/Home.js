import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
// import RecentPosts from '../RecentPosts';

function Home() {
    return (
        <div className="home">
            <Logo />
            <SearchBar />
            {/* <RecentPosts /> */}
        </div>
    );
}

export default Home;
