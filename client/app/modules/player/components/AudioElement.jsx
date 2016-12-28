import React, { PropTypes } from 'react';
import moment from 'moment';
import 'moment-duration-format';

const AudioElement = ({ currentTrack, nextTrack, elapsed, isPlaying, togglePlay, skipNext }) => (
  <div class="row">
    <div class="col-lg-4 current-info text-success" data-toggle="tooltip" title="Text Teaser for this track">
      Playing: { currentTrack ? currentTrack.title : 'N/A' }
    </div>
    <div class="track-controls col-lg-4 text-xs-center">
      <span class="text-muted mr-1">{ `${moment.duration(elapsed, 'seconds').format('h:mm:ss', { forceLength: true, trim: false })} / ${currentTrack ? moment.duration(currentTrack.length, 'seconds').format('h:mm:ss', { trim: false }) : '0:00'}`}</span>
      <a href="#"><i class="fa fa-lg fa-volume-up mr-1" /></a>
      <a href="#"><i class="fa fa-lg fa-step-backward mr-1" /></a>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          togglePlay();
        }}
      ><i class={`fa fa-lg mr-1 fa-${isPlaying ? 'pause' : 'play'}`} /></a>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          skipNext();
        }}
      ><i class="fa fa-lg fa-step-forward mr-1" /></a>
      <a href="#" data-toggle="modal" data-target="#playlist-modal"><i class="fa fa-lg fa-bars mr-3" /></a>
    </div>
    <div class="col-lg-4 next-info text-muted text-xs-right" data-toggle="tooltip" title="Text teaser for this track">
      Coming Up: { nextTrack ? nextTrack.title : 'N/A' }
    </div>
  </div>
);

AudioElement.propTypes = {
  currentTrack: PropTypes.any,
  nextTrack: PropTypes.any,
  elapsed: PropTypes.number,
  togglePlay: PropTypes.func,
  skipNext: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default AudioElement;