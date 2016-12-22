import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    return (
      <div class="modal fade" id="playlist-modal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="lead">Remaining Length: 37:26</p>
              <table class="table table-sm table-hover table-striped">
                <tbody>
                  <thead>
                    <tr>
                      <td />
                      <th>Title</th>
                      <th>Type</th>
                      <th />
                      <th />
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tr class="table-active">
                    <td><i class="fa fa-volume-up" /></td>
                    <th scope="row">Ep. 6: Bigger, Longer, Uncut</th>
                    <td>Episode</td>
                    <td />
                    <td><i class="fa fa-arrow-down mr-1" /></td>
                    <td>24:01</td>
                  </tr>
                  <tr>
                    <td />
                    <th scope="row">Silly Skit name</th>
                    <td>Skit</td>
                    <td><i class="fa fa-arrow-up mr-1" /></td>
                    <td><i class="fa fa-arrow-down mr-1" /></td>
                    <td>3:04</td>
                  </tr>
                  <tr>
                    <td />
                    <th scope="row">How I turned ungay</th>
                    <td>Story</td>
                    <td><i class="fa fa-arrow-up mr-1" /></td>
                    <td />
                    <td>10:21</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-xs-center">End of Playlist</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;