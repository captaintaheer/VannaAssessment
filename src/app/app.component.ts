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

export interface Video {
  url: string;
  channel: string;
  description: string;
  likes: string;
  messages: string;
  shares: string;
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

  playVideo(event: any) {
    this.myVideo.nativeElement.play();
  }
}
