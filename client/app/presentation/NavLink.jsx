import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = props => (
  <li class="nav-item">
    <Link {...props} activeClassName="active" class="nav-link">
      { props.children }
    </Link>
  </li>
);

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NavLink;