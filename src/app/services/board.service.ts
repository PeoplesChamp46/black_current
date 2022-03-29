import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  collection: any[] = [
    {
      name: 'sameer',
      artist: 'iphone 13',
      desc: '',
      image_url: 'https://source.unsplash.com/random',
      image_file: '',
      blog_post: '',
      created : '',
      modifyd : ''
    },
    {
      name: 'samsung',
      artist: 'galaxy note 20',
      desc: '',
      image_url: 'https://source.unsplash.com/random',
      image_file: '',
      blog_post: '',
      created : '',
      modifyd : ''

    },
    {
      name: 'huawei',
      artist: 'p50 pro',
      desc: '',
      image_url: 'https://source.unsplash.com/random',
      image_file: '',
      blog_post: '',
      created : '',
      modifyd : ''

    },
  ];


}


