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
      url:
        'https://v16m.tiktokcdn.com/024228e3e699c6bcf3622a955a840dba/5f33a4f3/video/tos/useast2a/tos-useast2a-pve-0068/e518a39a726b46e8a07c1d681ce6e7ed/?a=1233&br=2542&bt=1271&cr=0&cs=0&dr=0&ds=3&er=&l=2020081008144301011500405415013594&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anV4dGlydm5kdDMzNzczM0ApaGRpNDtoaDw2NzM3N2k2OmdsbDZmYWBjaGtfLS0xMTZzc2M0MDQuL14yYWExMDU2XzU6Yw%3D%3D&vl=&vr=',
      description: 'How to become a angular developer in 30s',
      likes: '',
      messages: '',
      shares: '',
    },
    {
      url:
        'https://v16m.tiktokcdn.com/a1662874d963798d6c1120580db20bd1/5f33a4f3/video/tos/useast2a/tos-useast2a-ve-0068c002/8ae8e2b197ec4237906cb6433b95d3b1/?a=1233&br=628&bt=314&cr=0&cs=0&dr=0&ds=3&er=&l=2020081008144301011500405415013594&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3Z1ZHc1dmU4djMzaTczM0ApaGY0M2RnOWRpN2lmN2doOmcuajVzY2VeNmRfLS0xMTZzc2JeMzEuYDUwNmMvMi9eXl46Yw%3D%3D&vl=&vr=',
      description: 'How to become a react developer in 30s',
      likes: '',
      messages: '',
      shares: '',
    },
    {
      url:
        'https://v16m.tiktokcdn.com/c5dadb8767e172d78dd82d3665588fec/5f33a4f5/video/tos/useast2a/tos-useast2a-ve-0068c004/72ff03a83510434a97ca5779bac24ea4/?a=1233&br=630&bt=315&cr=0&cs=0&dr=0&ds=3&er=&l=2020081008144501011500405415013696&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M25xZnZxdzZtdDMzNjczM0ApPGg2ZGY6Njw7NzhoNTc4ZGdgcjNobjRfaGJfLS0yMTZzcy4tNjRgMDIvYTY1MjRiYWA6Yw%3D%3D&vl=&vr=',
      description: 'How to become a Mobile App developer in 30s',
      likes: '',
      messages: '',
      shares: '',
    },
    {
      url:
        'https://v16m.tiktokcdn.com/be53af7b59ad90c444e678bae8ac456d/5f33a510/video/tos/useast2a/tos-useast2a-ve-0068c002/5c418a91d1a145ccb9e26a47fbff5d42/?a=1233&br=896&bt=448&cr=0&cs=0&dr=0&ds=3&er=&l=2020081008151201011500404211012EBF&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anhtZjozaWl3dDMzaDczM0ApaDlpZWZoMzs6Nzg7ZGY2aGdgaWwyYTZrYjRfLS02MTZzcy8yXl8vM19jLTQwMS5eLTE6Yw%3D%3D&vl=&vr=',
      description: 'How to become a Web developer in 30s',
      likes: '',
      messages: '',
      shares: '',
    },
  ];
}
