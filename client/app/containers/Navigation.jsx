import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-success navbar-fixed-top">
        <div class="navbar-toggler hidden-lg-up float-xs-right ml-1" data-toggle="collapse" data-target="#navbar-collapse" />
        <ul class="navbar-nav nav list-inline float-xs-right">
          <li class="nav-item list-inline-item">
            <a href="#" class="nav-link">
              <i class="fa fa-twitter" />
            </a>
          </li>
          <li class="nav-item list-inline-item">
            <a href="#" class="nav-link">
              <i class="fa fa-facebook" />
            </a>
          </li>
          <li class="nav-item list-inline-item">
            <a href="#" class="nav-link">
              <i class="fa fa-youtube" />
            </a>
          </li>
          <li class="nav-item list-inline-item">
            <a href="#" class="nav-link">
              <i class="fa fa-reddit-alien" />
            </a>
          </li>
        </ul>        
        <div class="navbar-brand float-xs-left">mmmyesquite</div>
        <div class="collapse navbar-toggleable-md" id="navbar-collapse">
          <ul class="nav navbar-nav nav-pills text-uppercase" role="navigation">
            <li class="nav-item">
              <a href="#" class="nav-link active">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Archives</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link disabled">Store</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Subscribe</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;