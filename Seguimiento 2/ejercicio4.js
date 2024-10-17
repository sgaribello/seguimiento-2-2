let persona;
let clientes = []
let turno = 1
let turnostomados = 0
function cliente(){ 
   
    do{
        clientes.push(turno)
        alert("Su turno es el numero "+ turno + ", en la fila hay " + clientes.length + " personas esperando, el siguiente turno atendido sera el numero "+ clientes[0] + " y han sido tomados "+ turnostomados + " turnos, se le atendera en unos instantes")
        turno++
    }    while (persona == "cliente")
    
    
}
function empleado(){
    if (turno > 0){
    do{
         alert("Se atendera el turno numero "+ clientes[0] + ", en instantes se atendera el siguiente cliente en la lista")
         clientes.shift(turno)
         turnostomados++
    }while(persona == "empleado")
        alert("Se han tomado " + turnostomados + " turnos")
    }
        else alert("no hay personas en la fila para llamar")
}
do {
    let persona = prompt("Ud es cliente o empleado")
switch(persona){
    case "empleado" : empleado(); break;
    case "cliente" : cliente(); break;
}}while(confirm("Volver al inicio"))