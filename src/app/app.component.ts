import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import videojs from 'video.js';
import awsvideoconfig from '../aws-video-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'NgAmplified';
  player: videojs.Player;
  @ViewChild('videoNode') videoNode: ElementRef<HTMLVideoElement>;
  options = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: awsvideoconfig.awsOutputLiveLL,
      },
    ],
  };

  ngAfterViewInit(): void {
    this.player = videojs(this.videoNode.nativeElement, this.options);
  }
}
