import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Audio } from 'redux-audio';
import { getCurrentTrack, getElapsedTime, getStatus, getSeeking } from '../selectors';
import { loadPlayer, togglePlaying, setElapsed, seekTo, clearSeeking, setTime } from '../actions';
import AudioElement from './AudioElement';
import AudioProgress from './AudioProgress';
import { NAME } from '../constants';

class AudioPlayer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = setInterval(() => {
      const audioObj = this.audio.querySelector('audio');
      if ('number' === typeof this.props.seeking) {
        audioObj.currentTime = Math.round(this.props.seeking);
        dispatch(clearSeeking());
      } else if (this.props.isPlaying) {
        const elapsed = audioObj.currentTime;
        dispatch(setElapsed(Math.round(elapsed)));
      }
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTrack, elapsed, togglePlay, isPlaying, seekTo, seekForward, seekBackward } = this.props;
    return (
      <div id="audio-player" ref={(audio) => { this.audio = audio; }} class="audio-player navbar navbar-dark bg-faded navbar-fixed-bottom">
        <div class="container-fluid">
          <Audio 
            preload="auto" 
            uniqueId={NAME} 
          />
          <AudioElement
            currentTrack={currentTrack} 
            elapsed={elapsed} 
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            seekForward={seekForward}
            seekBackward={seekBackward}
          />
        </div>
        <AudioProgress onChange={seekTo} elapsed={elapsed} length={currentTrack ? currentTrack.length : 0} />
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  currentTrack: PropTypes.any,
  dispatch: PropTypes.func,
  elapsed: PropTypes.number,
  togglePlay: PropTypes.func,
  seekTo: PropTypes.func,
  seekForward: PropTypes.func,
  seekBackward: PropTypes.func,
  isPlaying: PropTypes.bool,
  seeking: PropTypes.any,
};

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state),
  elapsed: getElapsedTime(state),
  isPlaying: 'playing' === getStatus(state),
  seeking: getSeeking(state),
});

const mapDispatchToProps = dispatch => ({
  togglePlay: () => {
    dispatch(loadPlayer());
    dispatch(togglePlaying());
  },
  seekTo: (seek) => {
    dispatch(seekTo(seek));
  },
  seekForward: (elapsed) => {
    dispatch(setTime(elapsed + 15));
  },
  seekBackward: (elapsed) => {
    dispatch(setTime(elapsed - 15));
  },
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);