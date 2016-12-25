import React, { PropTypes } from 'react';
import moment from 'moment';
import 'moment-duration-format';
import { connect } from 'react-redux';
import { getCurrentTrack } from '../selectors';

const PlaylistItem = ({ track, active }) => (
  <tr>
    <td>{active ? <i class="fa fa-volume-up" /> : '' }</td>
    <td><i class="fa fa-info-circle" data-toggle="tooltip" data-title={track.content} /></td>
    <td>{track.title}</td>
    <td class="text-xs-right">{moment.duration(track.length, 'seconds').format('h:mm:ss')}</td>
  </tr>
);

PlaylistItem.propTypes = {
  track: PropTypes.object,
  active: PropTypes.bool,
};

const mapStateToProps = (state, props) => ({
  active: props.track.id === getCurrentTrack(state).id,
});

export default connect(
  mapStateToProps,
)(PlaylistItem);