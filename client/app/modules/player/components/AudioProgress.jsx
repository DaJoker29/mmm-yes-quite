import React, { PropTypes } from 'react';

const AudioProgress = ({ onChange, elapsed, length }) => (
  <input 
    onChange={
      (e) => {
        e.preventDefault();
        onChange(e.target.value);
      } 
    }
    type="range" 
    id="audio-timeline" 
    class="mt-1 mb-0 audio-timeline progress progress-success" 
    value={`${100 / (length / elapsed)}`} 
    max="100" 
  />
);

AudioProgress.propTypes = {
  elapsed: PropTypes.number,
  length: PropTypes.number,
  onChange: PropTypes.func,
};

export default AudioProgress;