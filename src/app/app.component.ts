import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase/app';
import { AngularFirePerformance } from '@angular/fire/performance';

export interface Video {
  url: string;
  channel: string;
  description: string;
  likes: number;
  messages: number;
  shares: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('myVideo') myVideo: ElementRef;

  videosCol: AngularFirestoreCollection<Video>;
  videos: Observable<Video[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.videosCol = this.db.collection('videos');
    this.videos = this.videosCol.valueChanges();
  }
  //How many videos did user read in a collection and how long did it take?
  //incrementMetric method is especially useful if you want to keep a running count of a value during the trace.
  async loadUserData() {
    const perf = firebase.performance();
    const trace = perf.trace('videosQuery');
    trace.start();

    const videos = this.db.collection('videos').get();
    trace.incrementMetric('collectionSize', this.myVideo.nativeElement.size);

    trace.stop();
  }

  onPlayingVideo(event: any) {
    // play the first video that is chosen by the user
    if (this.myVideo.nativeElement === event.target) {
      this.myVideo.nativeElement.play();
    } else {
      // if the user plays a new video, pause the last one and play the new one
      if (event.target !== this.myVideo.nativeElement) {
        this.myVideo.nativeElement.pause();
        this.myVideo.nativeElement = event.target;
        this.myVideo.nativeElement.play();
      }
    }
  }
}
