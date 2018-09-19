import { Producto } from '../modelos/producto';
export class Item
{
    public producto: Producto;
    public cantidad : number ;

    constructor
    (
        producto: Producto,
        cantidad : number 
     
    ) 
    { 
        this.producto = producto ;
        this.cantidad = cantidad ;
    }
}