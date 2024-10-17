
let estadisticas = {
    totalAtendidos: 0,
    porTipo: {
        llamada: 0,
        asesoría: {
            estudiante: 0,
            directivo: 0
        }
    }
};

function registrarAtencion() {
    let cedula = prompt("Ingrese el número de cédula:");
    let tipoAtencion = prompt("Ingrese el tipo de atención (llamada / asesoría):").toLowerCase();

    if (tipoAtencion === "llamada") {
        estadisticas.totalAtendidos++;
        estadisticas.porTipo.llamada++;
        console.log("Atención registrada: Llamada - Cédula:" + cedula);
    } else if (tipoAtencion === "asesoría") {
        let tipoAsesoria = prompt("Ingrese el tipo de asesoría (estudiante / directivo):").toLowerCase();
        
        if (tipoAsesoria === "estudiante") {
            estadisticas.totalAtendidos++;
            estadisticas.porTipo.asesoría.estudiante++;
            console.log("Atención registrada: Asesoría (Estudiante) - Cédula:" + cedula);
        } else if (tipoAsesoria === "directivo") {
            estadisticas.totalAtendidos++;
            estadisticas.porTipo.asesoría.directivo++;
            console.log("Atención registrada: Asesoría (Directivo) - Cédula:" + cedula);
        } else {
            console.log("Tipo de asesoría inválido. Intente de nuevo.");
            return;
        }
    } else {
        console.log("Tipo de atención inválido. Intente de nuevo.");
        return;
    }


    let transferir = prompt("¿Desea transferir a llamada telefónica? (si / no):").toLowerCase();
    if (transferir === "si") {
        estadisticas.totalAtendidos++;
        estadisticas.porTipo.llamada++;
        console.log("Transferencia realizada a llamada - Cédula:" + cedula );
    }


    mostrarEstadisticas();
}

function mostrarEstadisticas() {
    console.log("Estadísticas de Atención:");
    console.log(`Total de usuarios atendidos: ${estadisticas.totalAtendidos}`);
    console.log(`Cantidad de usuarios atendidos por tipo:`);
    console.log(`  - Llamada: ${estadisticas.porTipo.llamada}`);
    console.log(`  - Asesoría:`);
    console.log(`    - Estudiante: ${estadisticas.porTipo.asesoría.estudiante}`);
    console.log(`    - Directivo: ${estadisticas.porTipo.asesoría.directivo}`);
}


function iniciarPrograma() {
    const continuar = prompt("¿Desea registrar una atención? (si / no):").toLowerCase();
    while (continuar === "si") {
        registrarAtencion();
        continuar = prompt("¿Desea registrar otra atención? (si / no):").toLowerCase();
    }
    console.log("Gracias por usar el sistema de atención.");
}

iniciarPrograma();
