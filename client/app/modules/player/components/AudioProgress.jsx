import React, { PropTypes } from 'react';

const AudioProgress = ({ elapsed, length }) => (
  <progress id="audio-timeline" class="mt-1 mb-0 audio-timeline progress progress-success" value={`${100 / Math.floor(length / elapsed)}`} max="100" />
);

AudioProgress.propTypes = {
  elapsed: PropTypes.number,
  length: PropTypes.number,
};

export default AudioProgress;