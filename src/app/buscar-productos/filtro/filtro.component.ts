import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelos/categoria';
import { Producto } from '../../modelos/producto';
import { Item } from '../../modelos/item';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

 
  public name : string ;
  public categorias : Array<Categoria> 
  public productos : Array<Producto> 
  public productosMostrar : Array<Producto> 
  public productosMostrarConFiltro : Array<Producto> 
  public carrito : Array<Item> 
 
  constructor() 
  { 
  
    var list = require('./../../../../categories.json');
    this.categorias = list.categories;
    
    var list = require('./../../../../products.json');
    this.productos = list.products;

    this.productosMostrar= this.productos;

    this.productosMostrarConFiltro = this.productos;

    this.carrito = new Array();
   
  }

  modificarCantidad(item:Item , cantidad:number)
  {
    item.cantidad = cantidad ;
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
  eliminarItem(item:Item)
  {
    const index = this.carrito.indexOf((item), 0);
    if (index > -1) 
    {
      this.carrito.splice(index, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
  abrir() 
  {
    if (localStorage.getItem("carrito") == null) {
      this.carrito = new Array();
    }
    else{
      var local = localStorage.getItem("carrito");
      this.carrito = JSON.parse(local);
    }
  }

  public modificarProductosMostrar(id : number)
  {
    this.productosMostrar = new Array();

    this.productos.forEach(producto => {
      if(producto.sublevel_id==id)
      {
        this.productosMostrar.push(producto);
      }
    })

    this.productosMostrarConFiltro = this.productosMostrar;
  
  }

  public filtrarPorDisponibilidad(disponibilidad : string)
  {
    this.productosMostrarConFiltro = new Array();
    var isTrueSet = (disponibilidad == 'true');
    this.productosMostrar.forEach(producto => {
      console.log( disponibilidad+"  "+producto.available + " y " + isTrueSet);
      if(producto.available== isTrueSet )
      {
        this.productosMostrarConFiltro.push(producto);
      }
    })

  
  }

  public filtrarPorRangoPrecios(rangoSuperior : string , rangoInferior : string)
  {
    this.productosMostrarConFiltro = new Array();

    this.productosMostrar.forEach(producto => {
      var x = producto.price.split("$");
      var y = x[1].split(",");
      var z = y[0]+ y[1];
      console.log(rangoInferior);
      console.log(rangoSuperior);
      if((parseInt(z)>=parseInt(rangoInferior) && parseInt(z)<=parseInt(rangoSuperior) ) || !rangoInferior || !rangoSuperior)
      {
        this.productosMostrarConFiltro.push(producto);
      }
    })
  
  }

  public filtrarPorStock(cantidad : string)
  {
    this.productosMostrarConFiltro = new Array();

    this.productosMostrar.forEach(producto => {
      if(producto.quantity==parseInt(cantidad) || !cantidad)
      {
        this.productosMostrarConFiltro.push(producto);
      }
    })

  
  }

 

  ngOnInit()
  {

  }



}



