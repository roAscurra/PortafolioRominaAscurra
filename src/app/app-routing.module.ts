import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

const routes: Routes = [
  {path: '/Inicio',component:BienvenidaComponent},
  {path: '', redirectTo:'Inicio',pathMatch:'full'},
  {path: '**', redirectTo:'Inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
