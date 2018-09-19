import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarProductosRoutingModule } from './buscar-productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  imports: [
    CommonModule,
    BuscarProductosRoutingModule,
    FormsModule
  ],
  declarations: [ProductosComponent, FiltroComponent]
})
export class BuscarProductosModule { }
