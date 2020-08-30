import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';

import {
  SwiperConfigInterface,
  SwiperComponent,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
  SwiperDirective,
} from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs/internal/Observable';

export interface Video {
  url: string;
  description: string;
  likes: number;
  messages: number;
  shares: number;
  avatar: string;
  channel: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public show: boolean = true;

  videosCol: AngularFirestoreCollection<Video>;
  videos: Observable<Video[]>;

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  @ViewChild('myVideo') myVideo: ElementRef;

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.videosCol = this.db.collection('videos');
    this.videos = this.videosCol.valueChanges();
  }

  public type: string = 'directive';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'vertical',
    grabCursor: true,
    simulateTouch: true,
    passiveListeners: true,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false,
  };

  public toggleType(): void {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction =
      this.config.direction === 'horizontal' ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  playVideo() {
    if (this.myVideo.nativeElement.playing) {
      this.myVideo.nativeElement.pause();
      this.myVideo.nativeElement.playing = false;
    } else {
      this.myVideo.nativeElement.play();
      this.myVideo.nativeElement.playing = true;
    }
  }

  onPlayingVideo(event: any) {
    // play the first video that is chosen by the user
    if (this.myVideo.nativeElement === event.target) {
      this.playVideo();
    } else {
      // if the user plays a new video, pause the last one and play the new one
      if (event.target !== this.myVideo.nativeElement) {
        this.myVideo.nativeElement.pause();
        this.myVideo.nativeElement = event.target;
        this.playVideo();
      }
    }
  }
}
