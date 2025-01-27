import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  states = [
    { name: 'Mom', time: 'hace 46 minutos', avatar: 'assets/avatar_icon.png' },
    { name: 'Dad', time: '9:31 a. m.', avatar: 'assets/avatar_icon.png' },
    { name: 'Ramón Lima', time: '3:33 a. m.', avatar: 'assets/avatar_icon.png' },
    { name: 'Gael UTCV', time: 'Ayer', avatar: 'assets/avatar_icon.png' },
    { name: 'Roberto UTCV', time: 'Ayer', avatar: 'assets/avatar_icon.png' },
    { name: 'Enrique UTCv', time: 'Ayer', avatar: 'assets/avatar_icon.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
