import React, { Component, PropTypes } from 'react';
import Navigation from '../containers/Navigation';
import AudioPlayer from '../containers/AudioPlayer';
import Playlist from '../containers/Playlist';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Playlist />
        <Navigation />
        <AudioPlayer />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;