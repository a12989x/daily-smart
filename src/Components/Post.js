import React from 'react';

const Post = (props) => {
    const { title, url_for_post, associated_topics } = props;

    const renderTopics = () => {
        return associated_topics.map((topic, index) => {
            return (
                <span className="recent-post__topic" key={index}>
                    {topic}
                </span>
            );
        });
    };

    return (
        <li className="recent-post">
            <a
                className="recent-post__title"
                href={url_for_post}
                target="_blank"
                rel="noopener noreferrer"
            >
                {title}
            </a>

            <div className="recent-post__topics">{renderTopics()}</div>
        </li>
    );
};

export default Post;
