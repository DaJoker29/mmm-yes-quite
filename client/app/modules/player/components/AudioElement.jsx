import React, { PropTypes } from 'react';
import moment from 'moment';
import 'moment-duration-format';

const AudioElement = ({ currentTrack, elapsed, isPlaying, togglePlay, seekForward, seekBackward }) => (
  <div class="row">
    <div class="track-controls col-lg-4">
      <a href="#"><i class="fa fa-volume-up mr-1" /></a>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          seekBackward(elapsed);
        }}
      ><i class="fa fa-backward mr-1" /></a>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          togglePlay();
        }}
      ><i class={`fa mr-1 fa-${isPlaying ? 'pause' : 'play'}`} /></a>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          seekForward(elapsed);
        }}
      ><i class="fa fa-forward mr-1" /></a>
    </div>
    <div class="col-lg-8 current-info text-success text-lg-right" data-toggle="tooltip" title="Text Teaser for this track">
      <span class="text-muted mr-1">{ `${moment.duration(elapsed, 'seconds').format('h:mm:ss', { forceLength: true, trim: false })} / ${currentTrack ? moment.duration(currentTrack.length, 'seconds').format('h:mm:ss', { trim: false }) : '0:00'}`}</span>
      Playing: { currentTrack ? currentTrack.title : 'N/A' }
    </div>
  </div>
);

AudioElement.propTypes = {
  currentTrack: PropTypes.any,
  elapsed: PropTypes.number,
  togglePlay: PropTypes.func,
  seekForward: PropTypes.func,
  seekBackward: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default AudioElement;