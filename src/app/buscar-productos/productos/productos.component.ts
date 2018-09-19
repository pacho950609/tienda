import { Component, OnInit , Input } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { Item } from '../../modelos/item';


@Component({
  selector: 'app-hoteles',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @Input() public productos : Array<Producto> 
  public carrito : Array<Item> 

  constructor()
  {
    if (localStorage.getItem("carrito") == null) {
      this.carrito = new Array();
    }
    else{
      var local = localStorage.getItem("carrito");
      this.carrito = JSON.parse(local);
    }
  }

  
  public agregarAlCarrito(producto : Producto , cantidad : string)
  {
    let x:Item = new Item(producto, parseInt(cantidad));
    this.carrito.push(x);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    alert("Se ha agregado el producto al carrito!");

  }

  ngOnInit() {
  }

}

