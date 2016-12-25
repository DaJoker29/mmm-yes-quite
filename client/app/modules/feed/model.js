export const State = {
  posts: [],
  filter: 'all',
};

export const Post = {
  id: Number,
  type: String,
  title: String,
  teaser: String,
  content: String,
  media: String,
  date: Date,
};

/**
 * Export Posts Filters here
 */

export const filterVideo = posts => posts.filter(p => 'video' === p.type);
export const filterAudio = posts => posts.filter(p => 'audio' === p.type);
export const filterArticle = posts => posts.filter(p => 'article' === p.type);