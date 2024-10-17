let compra;
let Producto1 = {
    nombre: "Fourloko",
    stock: 30,
    precio: 15000
}
let Producto2 = {
    nombre: "Tequila dragon ball",
    stock: 15,
    precio: 50000
}
let Producto3 = {
    nombre: "aguardiente antioqueño",
    stock: 10,
    precio: 60000
}

function Fourloko(){
    let cantidad = prompt("El precio de este producto es " + Producto1.precio + ", en stock hay " + Producto1.stock + " Fourloko, ¿cuantos desea?")
    parseInt(cantidad)
    let comprarmas = prompt("¿desea comprar algun producto mas?¿si/no?, en caso de que sea no escriba no, en caso de si indique el numero del producto que desea extra ¿cual es, 1)tequila dragon ball 2) aguardiente antioqueño? ")
    if(comprarmas== "1"){
        let cantidad2 = prompt("El precio de este producto es "+ Producto2.precio + ", en stock hay " + Producto2.stock + " Tequilas, ¿cuantos desea?")
        parseInt(cantidad2)
        let cuenta = (cantidad*Producto1.precio + cantidad2*Producto2.precio)
        alert("En el carrito hay " + cantidad + " Fourloko y tambien hay " + cantidad2 + " tequilas, para un total de "+ cuenta)
        Producto1.stock -= cantidad
        Producto2.stock -= cantidad2
    }
    else if(comprarmas== "2"){
        let cantidad3 = prompt("El precio de este producto es"+ Producto3.precio + ", en stock hay " + Producto3.stock + " aguardientes, ¿cuantos desea?")
        parseInt(cantidad3)
        let cuenta = (cantidad*Producto1.precio + cantidad3*Producto3.precio)
        alert("En el carrito hay " + cantidad + " Fourloko y tambien hay " + cantidad3 + " aguardientes, para un total de "+ cuenta)
        Producto1.stock -= cantidad
        Producto3.stock -= cantidad3
    }
    else{
        let cuenta = cantidad*Producto1.precio
     alert("En el carrito hay "+ cantidad + " Fourloko, seria un total de " + cuenta  )
    Producto1.stock -= cantidad}
}
function Tequila(){
    let cantidad = prompt("El precio de este producto es " + Producto2.precio + ", en stock hay " + Producto2.stock + " Tequilas, ¿cuantos desea?")
    parseInt(cantidad)
    let comprarmas = prompt("¿desea comprar algun producto mas?¿si/no?, en caso de que sea no escriba no, en caso de si indique el numero del producto que desea extra ¿cual es, 1)Fourloko 2) aguardiente antioqueño? ")
    if(comprarmas== "1"){
        let cantidad2 = prompt("El precio de este producto es "+ Producto1.precio + ", en stock hay " + Producto1.stock + " Fourloko, ¿cuantos desea?")
        parseInt(cantidad2)
        let cuenta = (cantidad*Producto2.precio + cantidad2*Producto1.precio)
        alert("En el carrito hay " + cantidad + " tequilas y tambien hay " + cantidad2 + " Fourloko, para un total de "+ cuenta)
        Producto2.stock -= cantidad
        Producto1.stock -= cantidad2
    }
    else if(comprarmas== "2"){
        let cantidad3 = prompt("El precio de este producto es"+ Producto3.precio + ", en stock hay " + Producto3.stock + " aguardientes, ¿cuantos desea?")
        parseInt(cantidad3)
        let cuenta = (cantidad*Producto2.precio + cantidad3*Producto3.precio)
        alert("En el carrito hay " + cantidad + " tequilas y tambien hay " + cantidad3 + " aguardientes, para un total de "+ cuenta)
        Producto2.stock -= cantidad
        Producto3.stock -= cantidad3
    }
    else{
        let cuenta = cantidad*Producto2.precio
     alert("En el carrito hay "+ cantidad + " Tequilas, seria un total de " + cuenta  )
    Producto2.stock -= cantidad}}

function aguardiente(){
        let cantidad = prompt("El precio de este producto es " + Producto3.precio + ", en stock hay " + Producto3.stock + " aguardientes, ¿cuantos desea?")
        parseInt(cantidad)
        let comprarmas = prompt("¿desea comprar algun producto mas?¿si/no?, en caso de que sea no escriba no, en caso de si indique el numero del producto que desea extra ¿cual es, 1)Fourloko 2) Tequila dragon ball? ")
        if(comprarmas== "1"){
            let cantidad2 = prompt("El precio de este producto es "+ Producto1.precio + ", en stock hay " + Producto1.stock + " Fourloko, ¿cuantos desea?")
            parseInt(cantidad2)
            let cuenta = (cantidad*Producto3.precio + cantidad2*Producto1.precio)
            alert("En el carrito hay " + cantidad + " aguardientes y tambien hay " + cantidad2 + " Fourloko, para un total de "+ cuenta)
            Producto3.stock -= cantidad
            Producto1.stock -= cantidad2
        }
        else if(comprarmas== "2"){
            let cantidad3 = prompt("El precio de este producto es"+ Producto2.precio + ", en stock hay " + Producto2.stock + " tequilas, ¿cuantos desea?")
            parseInt(cantidad3)
            let cuenta = (cantidad*Producto3.precio + cantidad3*Producto2.precio)
            alert("En el carrito hay " + cantidad + " aguardientes y tambien hay " + cantidad3 + " tequilas, para un total de "+ cuenta)
            Producto3.stock -= cantidad
            Producto2.stock -= cantidad3
        }
        else{
            let cuenta = cantidad*Producto3.precio
         alert("En el carrito hay "+ cantidad + " aguardientes, seria un total de " + cuenta  )
        Producto3.stock -= cantidad}}

do{
    let compra = prompt("¿que producto desea? 1) Fourloko 2) Tequila dragon ball 3) aguardiente antioqueño")
    switch(compra){
    case "1": Fourloko();break;
    case "2": Tequila();break;
    case "3": aguardiente();break;
    default: alert("Opción no válida.");
}}while(confirm("¿desea comprar algo?"))
