import React from 'react';

const Post = (props) => {
    const { title } = props.item;
    console.log(props.item);

    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

export default Post;
