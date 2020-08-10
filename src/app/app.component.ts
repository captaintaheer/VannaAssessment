import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';

export interface Video {
  url: string;
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
export class AppComponent implements OnInit {
  @ViewChild('myVideo') myVideo: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  playVideo(event: any) {
    this.myVideo.nativeElement.play();
  }

  videos: Video[] = [
    {
      url: 'One',
      description: 'This is Video 1',
      likes: '',
      messages: '',
      shares: '',
    },
    {
      url: 'One',
      description: 'This is Video 2',
      likes: '',
      messages: '',
      shares: '',
    },
    {
      url: 'One',
      description: 'This is Video 3',
      likes: '',
      messages: '',
      shares: '',
    },
    {
      url: 'One',
      description: 'this is Video 4',
      likes: '',
      messages: '',
      shares: '',
    },
  ];
}
