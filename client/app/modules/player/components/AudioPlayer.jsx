import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-duration-format';
import { getCurrentTrack, getNextTrack, getCurrentTime } from '../selectors';
import { loadPlayer } from '../actions';

class AudioPlayer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPlayer());
  }

  render() {
    const { currentTrack, nextTrack, time } = this.props;
    return (
      <div id="audio-player" class="audio-player navbar navbar-dark bg-faded navbar-fixed-bottom">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 current-info text-success" data-toggle="tooltip" title="Text Teaser for this track">
              Playing: { currentTrack.title ? currentTrack.title : currentTrack }
            </div>
            <div class="track-controls col-lg-4 text-xs-center">
              <span class="text-muted mr-1">{ `${moment.duration(time, 'seconds').format('d[d] h:mm:ss', { forceLength: true })} / ${'object' === typeof currentTrack ? moment.duration(currentTrack.length, 'seconds').format('h:mm:ss') : '0:00'}`}</span>
              <a href="#"><i class="fa fa-lg fa-volume-up mr-1" /></a>
              <a href="#"><i class="fa fa-lg fa-step-backward mr-1" /></a>
              <a href="#"><i class="fa fa-lg fa-pause mr-1" /></a>
              <a href="#"><i class="fa fa-lg fa-step-forward mr-1" /></a>
              <a href="#" data-toggle="modal" data-target="#playlist-modal"><i class="fa fa-lg fa-bars mr-3" /></a>
              <a href="#"><i class="fa fa-lg fa-share-alt mr-1" /></a>
            </div>
            <div class="col-lg-4 next-info text-muted text-xs-right" data-toggle="tooltip" title="Text teaser for this track">
              Coming Up: { nextTrack.title ? nextTrack.title : nextTrack }
            </div>
          </div>
        </div>
        <progress id="audio-timeline" class="mt-1 mb-0 audio-timeline progress progress-success" value="75" max="100" />
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  currentTrack: PropTypes.any,
  nextTrack: PropTypes.any,
  dispatch: PropTypes.func,
  time: PropTypes.number,
};

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state),
  nextTrack: getNextTrack(state),
  time: getCurrentTime(state),
});

export default connect(
  mapStateToProps,
)(AudioPlayer);