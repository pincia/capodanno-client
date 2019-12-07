import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencoPage } from './elenco.page';

const routes: Routes = [
  {
    path: '',
    component: ElencoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencoPageRoutingModule {}
