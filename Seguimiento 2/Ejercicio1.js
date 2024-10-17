let docIdentidad = prompt("Ingrese su documento de identidad, Ti/cedula");
let bancodeseado;
let Cuenta1 = {
    Identificacion: docIdentidad,
    saldo: 3500000,
    Banco: "daviplata"
};
let Cuenta2 = {
    Identificacion: docIdentidad,
    saldo: 2000000,
    Banco: "nequi"
};

function validarPin() {
    const validPins = [1456, 1569, 2325, 7802, 4587, 7752];
    let intentos = 0;
    let pin;
    
    while (intentos < 3) {
        pin = prompt("Ingrese el PIN de su cuenta:");
        if (validPins.includes(parseInt(pin))) {
            return true; // PIN válido
        } else {
            intentos++;
            alert("PIN incorrecto. Intentos restantes: " + (3 - intentos));
        }
    }
    alert("Ha excedido el número de intentos. Saliendo de la aplicación.");
    return false; // PIN no válido después de 3 intentos
}

function consultarsaldo() {
    let saldo;
    if (bancodeseado == "1") {
        saldo = Cuenta1.saldo;
        alert("Su saldo en daviplata es " + saldo);
    } else if (bancodeseado == "2") {
        saldo = Cuenta2.saldo;
        alert("Su saldo en nequi es " + saldo);
    } else {
        alert("En este cajero solo hay 2 bancos disponibles");
    }
}

function enviar() {
    let dineroaenviar;
    if (bancodeseado == "1") {
        dineroaenviar = prompt("Cuanto dinero desea enviar a nequi?");
        Cuenta1.saldo -= dineroaenviar;
        alert(`En su cuenta de daviplata quedaron ${Cuenta1.saldo}, a nequi se enviaron ${dineroaenviar}`);
    } else if (bancodeseado == "2") {
        dineroaenviar = prompt("Cuanto dinero desea enviar a daviplata?");
        Cuenta2.saldo -= dineroaenviar;
        alert(`En su cuenta de nequi quedaron ${Cuenta2.saldo}, a daviplata se enviaron ${dineroaenviar}`);
    } else {
        alert("No hay más bancos disponibles");
    }
}

function retirar() {
    let dinerodeseado;
    if (bancodeseado == "1") {
        dinerodeseado = prompt("Introduzca la cantidad de dinero que desea retirar (50000, 100000, 150000, 200000):");
        if (dinerodeseado % 50000 === 0 && dinerodeseado <= Cuenta1.saldo) {
            Cuenta1.saldo -= dinerodoseado;
            alert(`Retiro exitoso. Queda en cuenta: ${Cuenta1.saldo}`);
        } else {
            alert("Cantidad inválida o saldo insuficiente.");
        }
    } else if (bancodeseado == "2") {
        dinerodeseado = prompt("Introduzca la cantidad de dinero que desea retirar (50000, 100000, 150000, 200000):");
        if (dinerodeseado % 50000 === 0 && dinerodeseado <= Cuenta2.saldo) {
            Cuenta2.saldo -= dinerodoseado;
            alert(`Retiro exitoso. Queda en cuenta: ${Cuenta2.saldo}`);
        } else {
            alert("Cantidad inválida o saldo insuficiente.");
        }
    } else {
        alert("No hay más bancos disponibles");
    }
}

function consignar() {
    let dinerodeseado;
    if (bancodeseado == "1") {
        dinerodeseado = prompt("Introduzca la cantidad de dinero que desea consignar (50000, 100000, 150000, 200000):");
        if (dinerodeseado % 50000 === 0) {
            Cuenta1.saldo += parseInt(dinerodeseado);
            alert(`Consignación exitosa. Saldo actual: ${Cuenta1.saldo}`);
        } else {
            alert("Cantidad inválida.");
        }
    } else if (bancodeseado == "2") {
        dinerodeseado = prompt("Introduzca la cantidad de dinero que desea consignar (50000, 100000, 150000, 200000):");
        if (dinerodeseado % 50000 === 0) {
            Cuenta2.saldo += parseInt(dinerodeseado);
            alert(`Consignación exitosa. Saldo actual: ${Cuenta2.saldo}`);
        } else {
            alert("Cantidad inválida.");
        }
    } else {
        alert("No hay más bancos disponibles");
    }
}

do {
    bancodeseado = prompt("¿Cual banco desea usar? 1) daviplata, 2) nequi");
    if (validarPin()) {
        let Tramite = prompt("Ingrese el tipo de tramite que desea: 1) Retiro, 2) Envio, 3) Consignar, 4) Consultar saldo");
        switch (Tramite) {
            case "1": retirar(); break;
            case "2": enviar(); break;
            case "3": consignar(); break;
            case "4": consultarsaldo(); break;
            default: alert("Opción no válida.");
        }
    }
} while (confirm("¿Desea realizar otra transacción?"));

alert("Gracias por usar el sistema.");