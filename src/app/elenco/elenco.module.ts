import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencoPageRoutingModule } from './elenco-routing.module';

import { ElencoPage } from './elenco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencoPageRoutingModule
  ],
  declarations: [ElencoPage]
})
export class ElencoPageModule {}
