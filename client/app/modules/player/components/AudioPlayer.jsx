import React from 'react';

const AudioPlayer = () => (
  <div id="audio-player" class="audio-player navbar navbar-dark bg-faded navbar-fixed-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 current-info text-success" data-toggle="tooltip" title="Text Teaser for this track">
          Playing: Episode VI: Bigger, Longer, Uncut
        </div>
        <div class="track-controls col-lg-4 text-xs-center">
          <span class="text-muted mr-1">1:42 / 3:01</span>
          <a href="#"><i class="fa fa-lg fa-volume-up mr-1" /></a>
          <a href="#"><i class="fa fa-lg fa-step-backward mr-1" /></a>
          <a href="#"><i class="fa fa-lg fa-pause mr-1" /></a>
          <a href="#"><i class="fa fa-lg fa-step-forward mr-1" /></a>
          <a href="#" data-toggle="modal" data-target="#playlist-modal"><i class="fa fa-lg fa-bars mr-3" /></a>
          <a href="#"><i class="fa fa-lg fa-share-alt mr-1" /></a>
        </div>
        <div class="col-lg-4 next-info text-muted text-xs-right" data-toggle="tooltip" title="Text teaser for this track">
          Coming Up: Episode VII: The Next Episode
        </div>
      </div>
    </div>
    <progress id="audio-timeline" class="mt-1 mb-0 audio-timeline progress progress-success" value="75" max="100" />
  </div>
);

export default AudioPlayer;