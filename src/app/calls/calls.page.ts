import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls',
  standalone: false,
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  calls = [
    { name: 'Enrique UTCV', time: '24 de enero, 10:43 p. m.', avatar: 'assets/avatar_icon.png', type: 'outgoing' },
    { name: 'Mom', time: '23 de enero, 9:54 p. m.', avatar: 'assets/avatar_icon.png', type: 'outgoing' },
    { name: 'Dad', time: '22 de enero, 10:27 p. m.', avatar: 'assets/avatar_icon.png', type: 'outgoing' },
    { name: 'Abuela', time: '21 de enero, 4:12 a. m.', avatar: 'assets/avatar_icon.png', type: 'outgoing' },
    { name: 'Enrique UTCV', time: '20 de enero, 9:56 p. m.', avatar: 'assets/avatar_icon.png', type: 'outgoing' },
    { name: 'Mom', time: '18 de enero, 10:38 p. m.', avatar: 'assets/avatar_icon.png', type: 'outgoing' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
