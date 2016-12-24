import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchPostsIfNeeded } from '../actions';

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { feed } = this.props;

    return (
      <div>
        {
          feed.map(post => (renderPost(post)))
        }
      </div>
    );
  }
}

Posts.propTypes = {
  feed: PropTypes.array,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  const { feed } = state;
  return {
    feed,
  };
}

export default connect(mapStateToProps)(Posts);

function renderPost(post) {
  const { type } = post;
  let icon = '';
  let color = '';

  switch (type) {
    case 'episode':
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
    <div key={post.id} class={`card card-outline-${color} text-white`}>
      <div class="card-block">
        <h4 class="card-title"><i class={`fa fa-${icon} text-${color} mr-1`} />{ post.title }<small class="text-muted float-xs-right"><i class="fa fa-minus" /> Remove from Playlist</small></h4>
        <p class="card-subtitle text-muted">{ moment(post.date).format('MMMM Do, YYYY') }</p>
      </div>
      { 'video' === type ? 
        <div class="card-block embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src={post.media} frameBorder="0" allowFullScreen />
        </div>
          : ''
      }
      <div class="card-block">
        <p class="card-text">{ post.teaser }</p>
        <p class="card-text hidden-xs-up">{ post.content }</p>
      </div>
    </div>
  );
}