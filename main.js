class Dato{
    constructor(descripcion,valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}
// ____________INGRESOS____________________ 
class Ingreso extends Dato{
    constructor(descripcion,valor){
        super(descripcion,valor)
    }
}
const ingresos =[
    new Ingreso("sueldo",5000),
    new Ingreso("ventas",4000)
];
// ____________GASTOS____________________ 
class Gasto extends Dato{
    constructor(descripcion,valor){
        super(descripcion,valor)
    }
}
const gastos =[
    new Gasto("arrendo",1000),
    new Gasto("ropa",500)
];

console.log(gastos);
console.log(ingresos);


let tipo = document.getElementById("tipo").value;
let descripcion = document.getElementById("descripcion").value;
let valor = document.getElementById("valor").value;

// ____________CARGAR PAGINA____________________ 

let cargarApp=()=>{
    
}
