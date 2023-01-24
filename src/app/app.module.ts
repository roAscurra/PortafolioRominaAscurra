import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { ProyectsComponent } from './components/proyects/proyects.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ContactoComponent,
    HabilidadesComponent,
    HeaderComponent,
    IntroComponent,
    LenguajesComponent,
    ProyectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
