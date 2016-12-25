import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getVisiblityFilter } from '../selectors';
import { setVisibilityFilter } from '../actions';

const FilterLink = ({ active, children, onClick }) => (
  <li class="nav-item">
    <a 
      href="#" 
      onClick={
        (e) => {
          e.preventDefault();
          onClick();
        }
      } 
      class={`nav-link ${active ? 'active' : ''}`}
    >
      { children }
    </a>
  </li>
);

FilterLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  active: props.filter === getVisiblityFilter(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(props.filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);