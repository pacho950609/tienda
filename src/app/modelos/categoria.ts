export class Categoria 
{
    public id: string;
    public name : string ;
    public sublevels: Categoria[];
   

    constructor
    (
         id: string,
         name: string,
         sublevels: Categoria[],
    ) 
    { 
        this.id = id ;
        this.name = name;
        this.sublevels = sublevels;
    }
}
