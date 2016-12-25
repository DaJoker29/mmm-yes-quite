import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-duration-format';
import { fetchPlaylistIfNeeded } from '../actions';
import { getPlaylistLength, getPlaylist, getFetching } from '../selectors';
import PlaylistItem from './PlaylistItem';

class Playlist extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlaylistIfNeeded());
  }

  render() {
    const { playlist, fetching, totalLength } = this.props;
    return (
      <div class="modal fade" id="playlist-modal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content bg-faded">
            <div class="modal-header">
              <button class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              { fetching ?
                <i class="fa fa-spinner fa-5x text-xs-center fa-pulse w-100 mt-3" />
                :
                <table class="table table-sm table-hover table-striped">
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th>Title</th>
                      <th class="text-xs-right">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    { playlist ? playlist.map(p => <PlaylistItem key={p.id} track={p} />) : '' }
                  </tbody>
                </table>
              }
              <p class="text-xs-center">End of Playlist</p>
              <p class="lead">Total Length: { playlist ? moment.duration(totalLength, 'seconds').format('h:mm:ss') : ''}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Playlist.propTypes = {
  playlist: PropTypes.array,
  fetching: PropTypes.bool,
  dispatch: PropTypes.func,
  totalLength: PropTypes.number,
};

const mapStateToProps = state => ({
  playlist: getPlaylist(state),
  fetching: getFetching(state),
  totalLength: getPlaylistLength(state),
});

export default connect(
  mapStateToProps,
)(Playlist);