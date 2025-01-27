import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  standalone: false,
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  contacts = [
    { name: 'Enrique UTCV', avatar: 'assets/avatar_icon.png', status: 'En la escuela' },
    { name: 'Juan Carlos Armenta B. I.', avatar: 'assets/avatar_icon.png', status: 'Trabajando' },
    { name: 'Francisco UTCV', avatar: 'assets/avatar_icon.png', status: 'Ocupado' },
    { name: 'Félix', avatar: 'assets/avatar_icon.png', status: 'Disponible' },
    { name: 'Roberto UTCV', avatar: 'assets/avatar_icon.png', status: 'No molestar' },
    { name: 'Gael UTCV', avatar: 'assets/avatar_icon.png', status: 'Diponible' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
