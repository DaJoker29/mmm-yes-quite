import React, { PropTypes } from 'react';
import moment from 'moment';

const Post = ({ post }) => {
  const { type, date, media, teaser, content, title } = post;
  let icon = '';
  let color = '';

  switch (type) {
    case 'audio':
      icon = 'microphone';
      color = 'success';
      break;
    case 'article':
      icon = 'file-text-o';
      color = 'danger';
      break;
    case 'video':
      icon = 'video-camera';
      color = 'primary';
      break;
    default:
      icon = 'question-circle';
      color = 'warning';
      break;
  }

  return (
    <div class={`card card-outline-${color}`}>
      <div class="card-block">
        <h4 class="card-title"><i class={`fa fa-${icon} text-${color} mr-1`} />{ title }</h4>
        <p class="card-subtitle text-muted">{ moment(date).format('MMMM Do, YYYY') }</p>
      </div>
      { 'video' === type ? 
        <div class="card-block embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src={media} frameBorder="0" allowFullScreen />
        </div>
          : ''
      }
      <div class="card-block">
        <p class="card-text">{teaser}</p>
        <p class="card-text hidden-xs-up">{content}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;