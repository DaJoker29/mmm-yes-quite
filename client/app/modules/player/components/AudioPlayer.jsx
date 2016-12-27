import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Audio } from 'redux-audio';
import { getCurrentTrack, getNextTrack, getElapsedTime, getStatus, getSeeking } from '../selectors';
import { loadPlayer, togglePlaying, setElapsed, seekTo, clearSeeking } from '../actions';
import AudioElement from './AudioElement';
import AudioProgress from './AudioProgress';
import { NAME } from '../constants';

class AudioPlayer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPlayer());
    this.timer = setInterval(() => {
      const audioObj = this.audio.querySelector('audio');
      if ('number' === typeof this.props.seeking) {
        audioObj.currentTime = Math.floor(this.props.seeking);
        dispatch(clearSeeking());
      } else if (this.props.isPlaying) {
        const elapsed = audioObj.currentTime;
        dispatch(setElapsed(Math.floor(elapsed)));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTrack, nextTrack, elapsed, togglePlay, isPlaying, seekTo } = this.props;
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
        <AudioProgress onChange={seekTo} elapsed={elapsed} length={currentTrack.length} />
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
  seekTo: PropTypes.func,
  isPlaying: PropTypes.bool,
  seeking: PropTypes.any,
};

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state),
  nextTrack: getNextTrack(state),
  elapsed: getElapsedTime(state),
  isPlaying: 'playing' === getStatus(state),
  seeking: getSeeking(state),
});

const mapDispatchToProps = dispatch => ({
  togglePlay: () => {
    dispatch(togglePlaying());
  },
  seekTo: (seek) => {
    dispatch(seekTo(seek));
  },
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);