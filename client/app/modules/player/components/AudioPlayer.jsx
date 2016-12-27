import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Audio } from 'redux-audio';
import { getCurrentTrack, getNextTrack, getElapsedTime, getStatus } from '../selectors';
import { loadPlayer, togglePlaying, setElapsed } from '../actions';
import AudioElement from './AudioElement';
import { NAME } from '../constants';

class AudioPlayer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPlayer());
    this.timer = setInterval(() => {
      if (this.props.isPlaying) {
        const elapsed = this.audio.querySelector('audio').played.end(0);
        dispatch(setElapsed(Math.floor(elapsed)));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTrack, nextTrack, elapsed, togglePlay, isPlaying } = this.props;
    return (
      <div id="audio-player" ref={(audio) => { this.audio = audio; }} class="audio-player navbar navbar-dark bg-faded navbar-fixed-bottom">
        <div class="container-fluid">
          <Audio uniqueId={NAME} />
          <AudioElement
            currentTrack={currentTrack} 
            nextTrack={nextTrack}
            elapsed={elapsed} 
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
  elapsed: PropTypes.number,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state),
  nextTrack: getNextTrack(state),
  elapsed: getElapsedTime(state),
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