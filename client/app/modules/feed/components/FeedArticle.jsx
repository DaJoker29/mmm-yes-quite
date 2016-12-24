import React, { PropTypes } from 'react';
import moment from 'moment';

const FeedArticle = props => (
  <div class="card card-outline-success text-white">
    <div class="card-block">
      <h4 class="card-title"><i class="fa fa-file-text-o text-danger mr-1" />{ props.title }</h4>
      <p class="card-subtitle text-muted">{ moment(props.date).fromNow() }</p>
      <p class="card-text">{ props.teaser }</p>
      <p class="card-text hidden-xs-up">{ props.content }</p>
    </div>
  </div>
);

FeedArticle.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FeedArticle;