export const State = {
  playlist: [],
  current: 0,
  elapsed: 0,
  status: 'paused',
};

export const Track = {
  id: Number,
  type: String,
  title: String,
  teaser: String,
  content: String,
  media: String,
  date: Date,
  length: Number,
};