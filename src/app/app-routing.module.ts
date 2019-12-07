import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  } ,
  
  {
    path: '',redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'elenco',
    loadChildren: () => import('./elenco/elenco.module').then( m => m.ElencoPageModule)
  },
  {
    path: 'inserimento',
    loadChildren: () => import('./inserimento/inserimento.module').then( m => m.InserimentoPageModule)
  },
  {
    path: 'verifica',
    loadChildren: () => import('./verifica/verifica.module').then( m => m.VerificaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true,preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
