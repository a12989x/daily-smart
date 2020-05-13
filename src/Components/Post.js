import React from 'react';

const Post = (props) => {
    const { title, url_for_post, associated_topics, post_links } = props;

    const renderTopics = () => {
        return associated_topics.map((topic, index) => {
            return (
                <span className="recent-post__topic" key={index}>
                    {topic}
                </span>
            );
        });
    };

    const renderLinks = () => {
        return post_links.map((link, index) => {
            return (
                // <span className="result-post__link" key={index}>
                //     {link.link_url}
                // </span>
                <a href={link.link_url} key={index}>
                    Useful Link #{index + 1}
                </a>
            );
        });
    };

    return props.type === 'recent' ? (
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
    ) : props.type === 'result' ? (
        <li className="result-post">
            <div className="result-post__topics">{renderTopics()}</div>

            <a
                className="result-post__title"
                href={url_for_post}
                target="_blank"
                rel="noopener noreferrer"
            >
                {title}
            </a>
            <div className="result-post__links">{renderLinks()}</div>
        </li>
    ) : null;
};

export default Post;
