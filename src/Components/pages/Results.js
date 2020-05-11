import React, { Component } from 'react';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Logo imageSize="8vw" />
                <SearchBar />
                <p>Result page</p>
            </div>
        );
    }
}

export default Results;
