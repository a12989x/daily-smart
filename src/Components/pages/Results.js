import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

const Results = (props) => {
    const handleSearchBarSubmit = (query) => {
        props.fetchPostWithQuery(query);
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

export default connect(null, actions)(Results);
