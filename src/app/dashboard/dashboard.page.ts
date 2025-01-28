import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  isDropdownOpen = false;
  chats = [
    { name: 'Equipo 6', message: 'Buenas tardes compañeros', date: '17/5/2024', avatar: 'assets/avatar_icon.png' },
    { name: 'Mom', message: 'Bye mamá', date: '', avatar: 'assets/avatar_icon.png' },
    { name: 'Familia', message: 'Hola Familia', date: '10/01/2025', avatar: 'assets/avatar_icon.png' },
    { name: 'Skuad Cetis', message: '', date: '', avatar: 'assets/avatar_icon.png' },
  ];

  constructor(private navCtrl: NavController ) { }

  openNewChatPage() {
    this.navCtrl.navigateForward('/chats');
  }
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  goToProfile() {
    this.navCtrl.navigateForward('/dashboard-prof');
  }

  ngOnInit() {
  }

}
