export const State = {
  playlist: [],
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

export const currentTrack = playlist => playlist[0];
export const nextTrack = playlist => playlist[1];