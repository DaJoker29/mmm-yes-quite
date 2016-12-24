import React, { PropTypes } from 'react';
import { Navigation } from './modules/navigation';
import { AudioPlayer, Playlist } from './modules/audio-player';

const Layout = ({ children }) => (
  <div>
    <Playlist />
    <Navigation />
    <AudioPlayer />
    <main>
      { children }
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;