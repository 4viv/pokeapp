import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoComponent } from './components/views/catalogo/catalogo.component';
import { DetalleComponent } from './components/views/detalle/detalle.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    DetalleComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
