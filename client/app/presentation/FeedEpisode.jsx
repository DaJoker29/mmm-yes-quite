import React, { PropTypes } from 'react';
import moment from 'moment';

const FeedEpisode = props => (
  <div class="card card-outline-success text-white">
    <div class="card-block">
      <h4 class="card-title"><i class="fa fa-microphone text-success mr-1" />{ props.title }<small class="text-muted float-xs-right"><i class="fa fa-minus" /> Remove from Playlist</small></h4>
      <p class="card-subtitle text-muted">{ moment(props.date).fromNow() }</p>
      <p class="card-text">{ props.teaser }</p>
      <p class="card-text hidden-xs-up">{ props.content }</p>
    </div>
  </div>
);

FeedEpisode.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.date.isRequired,
  teaser: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FeedEpisode;