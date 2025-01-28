import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardProfPageRoutingModule } from './dashboard-prof-routing.module';

import { DashboardProfPage } from './dashboard-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardProfPageRoutingModule
  ],
  declarations: [DashboardProfPage]
})
export class DashboardProfPageModule {}
