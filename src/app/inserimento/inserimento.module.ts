import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserimentoPageRoutingModule } from './inserimento-routing.module';

import { InserimentoPage } from './inserimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserimentoPageRoutingModule
  ],
  declarations: [InserimentoPage]
})
export class InserimentoPageModule {}
