// Clase padre 
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
// clase hija
class Ingreso extends Dato{
    constructor(descripcion,valor){
        super(descripcion,valor)
    }
}
// arreglo ingresos 
const ingresos =[
    // new Ingreso("sueldo",9000),
    // new Ingreso("ventas",4000)
    
];
// sumar ingresos 
let totalIngresos =()=>{
    let varTotalIngresos = 0;
    for(let ingreso of ingresos){
        varTotalIngresos +=ingreso.valor; 
    }
    return varTotalIngresos;
}
// crear ingreso 
let crearIngresoHTML = (ingreso)=>{
    let ingresoHTML=
    `
    <div class="contenedor">
        <li class="descripcion">${ingreso.descripcion}</li>
        <br>
        <li class="valor">${ingreso.valor}</li>
     </div>
    `;
    return ingresoHTML;
}
// cargar ingresos 
let cargarIngresos=()=>{
    let ingresosHTML = "";
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("listado-ingresos").innerHTML=ingresosHTML;
}
// ____________GASTOS____________________ 
// clase hija
class Gasto extends Dato{
    constructor(descripcion,valor){
        super(descripcion,valor)
    }
}
// arreglo gastos 
const gastos =[
    // new Gasto("arrendo",1000),
    // new Gasto("ropa",1000)
];
// sumar gastos 
let totalGastos=()=>{
    let varTotalgastos = 0;
    for(let gasto of gastos){
        varTotalgastos +=gasto.valor
    }
    return varTotalgastos;
}
// crear gasto 
 let crearGastoHTML = (gasto) => {
        let gastoHTML =
        `
        <div class="contenedor">
            <li class="descripcion">${gasto.descripcion}</li><br/>
            <li class="valor">${gasto.valor}</li>
        </div>
        `
    
    return gastoHTML;
 }
 //cargar gastos
 let cargarGastos=()=>{
    let gastosHTML = " ";
    for(let gasto of gastos){
        gastosHTML += crearGastoHTML(gasto);

    }
    document.getElementById("listado-gastos").innerHTML = gastosHTML;
 }
// _________________________________________________________________________________________________________

// Carga las funciones PRESUPUESTO TOTAL - INGRESOS TOTALES - GASTOS TOTALES 
let cargarApp=()=>{
    cargarTotalPresupuestos();
    cargarIngresos();
    cargarGastos();
}



// Envia los valores de PRESUPUESTO TOTAL - INGRESOS TOTALES - GASTOS TOTALES 
let cargarTotalPresupuestos =()=>{
    let presupuesto = totalIngresos()-totalGastos();
    document.getElementById("presupuesto").innerHTML = presupuesto; 
    let ingresos = totalIngresos()
    document.getElementById("ingresosTotales").innerHTML= ingresos;
    let gastos = totalGastos()
    document.getElementById("gastosTotales").innerHTML = gastos;
}


let agregarDato=()=>{
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    


    if(descripcion.value !== " " && valor.value !==" "  ){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value,+valor.value))
            cargarTotalPresupuestos();
            cargarIngresos()
            }
            else if(tipo.value === "gasto"){
            gastos.push(new Gasto(descripcion.value, +valor.value))
            cargarTotalPresupuestos();
            cargarGastos();
            }
    }
}
