import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RecentPosts = (props) => {
    useEffect(() => {
        props.fetchRecentPosts();
    }, []);

    const renderPosts = () => {
        return props.recentPosts.map((post, index) => {
            if (index < 3) {
                return <li key={index}>{post.title}</li>;
            }
        });
    };

    return (
        <div className="recent-posts">
            <h3>Recent Posts</h3>
            <ul>{renderPosts()}</ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { recentPosts: state.posts.recentPosts };
};

export default connect(mapStateToProps, actions)(RecentPosts);
