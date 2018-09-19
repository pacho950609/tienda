import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BuscarProductosModule } from './buscar-productos/buscar-productos.module';
import { BaratonService } from './servicios/baraton.service';


@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuscarProductosModule,
    HttpClientModule
  ],
  providers: [BaratonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
