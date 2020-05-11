import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RecentPosts = (props) => {
    useEffect(() => {
        props.fetchRecentPosts();
    }, []);

    return (
        <div>
            <p>Recent Posts</p>
        </div>
    );
};

export default connect(null, actions)(RecentPosts);
