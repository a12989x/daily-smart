import React, { Component } from 'react';
import Logo from '../Logo';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Logo />
                <p>Result page</p>
            </div>
        );
    }
}

export default Results;
