import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AnimateHeight from 'react-animate-height';

const Post = (props) => {
    const [height, setHeight] = useState(0);
    const { title, url_for_post, associated_topics, post_links } = props;

    const renderTopics = (type) => {
        return associated_topics.map((topic, index) => {
            return (
                <span className={`${type}-post__topic`} key={index}>
                    {topic}
                </span>
            );
        });
    };

    const renderLinks = () => {
        return post_links.map((link, index) => {
            return (
                <a href={link.link_url} key={index}>
                    Link #{index + 1}
                </a>
            );
        });
    };

    const renderArrow = () => {
        if (post_links.length === 0) {
            return (
                <a
                    className="result-post__title"
                    href={url_for_post}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            );
        } else {
            return (
                <>
                    <a
                        onMouseEnter={() => setHeight(40)}
                        onMouseLeave={() => setHeight(0)}
                        className="result-post__title"
                        href={url_for_post}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title} <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <AnimateHeight duration={500} height={height}>
                        <div className="result-post__links">
                            <p>Others Links</p>
                            {renderLinks()}
                        </div>
                    </AnimateHeight>
                </>
            );
        }
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

            <div className="recent-post__topics">{renderTopics('recent')}</div>
        </li>
    ) : props.type === 'result' ? (
        <li className="result-post">
            <div className="result-post__topics">{renderTopics('result')}</div>

            {renderArrow()}
        </li>
    ) : null;
};

export default Post;
