import axios from 'axios';

import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from './types';

export const fetchRecentPosts = () => {
    return (dispatch) => {
        axios
            .get('https://api.dailysmarty.com/posts')
            .then((response) => {
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts,
                });
            })
            .catch((error) => {
                console.error('fetchRecentPosts', error);
            });
    };
};

export const fetchPostWithQuery = (query, callback) => {
    return (dispatch) => {
        axios
            .get(`https://api.dailysmarty.com/search?q=${query}`)
            .then((response) => {
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: response.data.posts,
                });
                if (callback) {
                    callback();
                }
            })
            .catch((error) => {
                console.error('fetchPostWithQuery', error);
            });
    };
};
