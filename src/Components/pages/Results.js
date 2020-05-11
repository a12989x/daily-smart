import React from 'react';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

const Results = (props) => {
    const handleSearchBarSubmit = (query) => {
        console.log(query);
    };

    return (
        <div>
            <Logo imageSize="8vw" />
            <SearchBar
                handleSearchBarSubmit={(query) => {
                    handleSearchBarSubmit(query);
                }}
            />
        </div>
    );
};

export default Results;
