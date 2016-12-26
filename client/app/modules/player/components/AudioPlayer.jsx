import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentTrack, getNextTrack, getCurrentTime, getStatus } from '../selectors';
import { loadPlayer, togglePlaying } from '../actions';
import AudioElement from './AudioElement';

class AudioPlayer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPlayer());
  }

  render() {
    const { currentTrack, nextTrack, time, togglePlay, isPlaying } = this.props;
    return (
      <div id="audio-player" class="audio-player navbar navbar-dark bg-faded navbar-fixed-bottom">
        <div class="container-fluid">
          <AudioElement
            currentTrack={currentTrack} 
            nextTrack={nextTrack}
            time={time} 
            togglePlay={togglePlay} 
            isPlaying={isPlaying} 
          />
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
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state),
  nextTrack: getNextTrack(state),
  time: getCurrentTime(state),
  isPlaying: 'playing' === getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  togglePlay: () => {
    dispatch(togglePlaying());
  },
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);