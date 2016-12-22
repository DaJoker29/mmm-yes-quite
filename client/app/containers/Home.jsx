import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="main-feed">
            <div class="py-1">
              <div class="row my-1">
                <div class="col-xs-12">
                  <form class="form-inline text-xs-right">
                    <input type="text" class="form-control" placeholder="Search" />
                    <button type="submit" class="btn btn-outline-primary">Search</button>
                  </form>
                </div>
                <div class="col-xs-12">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a href="#" class="nav-link active">All</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Episodes</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Skits</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Songs</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Stories</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Articles</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Videos</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card card-outline-success text-white">
                <div class="card-block">
                  <h4 class="card-title"><i class="fa fa-microphone text-success mr-1" />Ep. 6: Bigger, Longer, Uncut <small class="text-muted float-xs-right"><i class="fa fa-minus" /> Remove from Playlist</small></h4>
                  <p class="card-subtitle text-muted">January 7, 2017</p>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias quos optio corporis reprehenderit commodi culpa possimus! Odit, eligendi obcaecati optio laborum nisi earum quas. Autem enim sapiente, esse reiciendis.</p>
                </div>
              </div>
              <div class="card card-outline-success text-white">
                <div class="card-block">
                  <h4 class="card-title"><i class="fa fa-microphone text-success mr-1" />Ep. 5: Cinco The Episode <small class="text-muted float-xs-right"><i class="fa fa-plus" /> Add to Playlist</small></h4>
                  <p class="card-subtitle text-muted">January 2, 2017</p>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias quos optio corporis reprehenderit commodi culpa possimus!</p>
                </div>
              </div>
              <div class="card card-outline-danger text-white">
                <div class="card-block">
                  <h4 class="card-title"><i class="fa fa-file-text-o text-danger mr-1" />Writing Contest</h4>
                  <p class="card-subtitle text-muted">December 29, 2016</p>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias quos optio corporis reprehenderit commodi culpa possimus! Odit, eligendi obcaecati optio laborum nisi earum quas. Autem enim sapiente, esse reiciendis.</p>
                </div>
              </div>
              <div class="card card-outline-primary text-white">
                <div class="card-block">
                  <h4 class="card-title"><i class="fa fa-video-camera text-primary mr-1" />How to Get Away with Jaywalking <small class="text-muted float-xs-right"><i class="fa fa-youtube" /> Watch on YouTube</small></h4>
                  <p class="card-subtitle text-muted">December 23, 2016</p>
                </div>
                <div class="card-block embed-responsive embed-responsive-16by9">
                  <img class="img-fluid" src="http://placehold.it/1440x1080" alt="" />
                </div>
                <div class="card-block">
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias quos optio corporis reprehenderit commodi culpa possimus! Odit, eligendi obcaecati optio laborum nisi earum quas. Autem enim sapiente, esse reiciendis.</p>
                </div>
              </div>
              <div class="card card-outline-danger text-white">
                <div class="card-block">
                  <h4 class="card-title"><i class="fa fa-file-text-o text-danger mr-1" />Writing Contest</h4>
                  <p class="card-subtitle text-muted">December 29, 2016</p>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias quos optio corporis reprehenderit commodi culpa possimus! Odit, eligendi obcaecati optio laborum nisi earum quas. Autem enim sapiente, esse reiciendis.</p>
                </div>
              </div>
              <div class="card card-outline-primary text-white">
                <div class="card-block">
                  <h4 class="card-title"><i class="fa fa-video-camera text-primary mr-1" />How to Get Away with Jaywalking <small class="text-muted float-xs-right"><i class="fa fa-youtube" /> Watch on YouTube</small></h4>
                  <p class="card-subtitle text-muted">December 23, 2016</p>
                </div>
                <div class="card-block embed-responsive embed-responsive-16by9">
                  <img class="img-fluid" src="http://placehold.it/1440x1080" alt="" />
                </div>
                <div class="card-block">
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestias quos optio corporis reprehenderit commodi culpa possimus! Odit, eligendi obcaecati optio laborum nisi earum quas. Autem enim sapiente, esse reiciendis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;