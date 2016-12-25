import { createSelector } from 'reselect';
import { NAME } from './constants';
import { filterAudio, filterVideo, filterArticle } from './model';

export const getVisiblityFilter = state => state[NAME].filter;
export const getPosts = state => state[NAME].posts;
export const getFetching = state => state[NAME].fetching;

export const getVisiblePosts = createSelector(
  getVisiblityFilter,
  getPosts,
  (filter, posts) => {
    switch (filter) {
      case 'video':
        return filterVideo(posts);
      case 'audio':
        return filterAudio(posts);
      case 'article':
        return filterArticle(posts);
      default:
        return posts;
    }
  },
);