export class Producto 
{
    public id: string;
    public name : string ;
    public quantity: number;
    public price: string;
    public available: boolean;
    public sublevel_id: number;
   

    constructor
    (
        id: string,
        name : string ,
        quantity: number,
        price: string,
        available: boolean,
        sublevel_id: number,
    ) 
    { 
        this.id = id ;
        this.name = name;
        this.quantity = quantity;
        this.price = price ;
        this.available = available ;
        this.sublevel_id = sublevel_id ;
    }
}
