import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const ResultsPosts = (props) => {
    const renderPost = () => {
        return props.posts.map((post) => {
            return <Post type="result" key={post.id} {...post} />;
        });
    };

    return <ul>{renderPost()}</ul>;
};

const mapStateToProps = (state) => {
    return { posts: state.posts.resultsPosts };
};

export default connect(mapStateToProps)(ResultsPosts);
