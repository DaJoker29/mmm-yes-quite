import React, { PropTypes } from 'react';
import { Audio } from 'redux-audio';
import moment from 'moment';
import 'moment-duration-format';
import { NAME } from '../constants';

const AudioElement = ({ currentTrack, nextTrack, time, isPlaying, togglePlay }) => (
  <div class="row">
    <Audio uniqueId={NAME} />
    <div class="col-lg-4 current-info text-success" data-toggle="tooltip" title="Text Teaser for this track">
      Playing: { currentTrack.title ? currentTrack.title : currentTrack }
    </div>
    <div class="track-controls col-lg-4 text-xs-center">
      <span class="text-muted mr-1">{ `${moment.duration(time, 'seconds').format('d[d] h:mm:ss', { forceLength: true })} / ${'object' === typeof currentTrack ? moment.duration(currentTrack.length, 'seconds').format('h:mm:ss') : '0:00'}`}</span>
      <a href="#"><i class="fa fa-lg fa-volume-up mr-1" /></a>
      <a href="#"><i class="fa fa-lg fa-step-backward mr-1" /></a>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          togglePlay();
        }}
      ><i class={`fa fa-lg mr-1 fa-${isPlaying ? 'pause' : 'play'}`} /></a>
      <a href="#"><i class="fa fa-lg fa-step-forward mr-1" /></a>
      <a href="#" data-toggle="modal" data-target="#playlist-modal"><i class="fa fa-lg fa-bars mr-3" /></a>
      <a href="#"><i class="fa fa-lg fa-share-alt mr-1" /></a>
    </div>
    <div class="col-lg-4 next-info text-muted text-xs-right" data-toggle="tooltip" title="Text teaser for this track">
      Coming Up: { nextTrack.title ? nextTrack.title : nextTrack }
    </div>
  </div>
);

AudioElement.propTypes = {
  currentTrack: PropTypes.any,
  nextTrack: PropTypes.any,
  time: PropTypes.number,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default AudioElement;