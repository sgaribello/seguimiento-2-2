class Cita {
    constructor(nombrePaciente, fecha, hora, medico) {
        this.nombrePaciente = nombrePaciente;
        this.fecha = new Date(fecha + "T" + hora);
        this.medico = medico;
    }
}

class SistemaCitas {
    constructor() {
        this.citas = [];
    }

    programarCita(nombrePaciente, fecha, hora, medico) {
        const nuevaCita = new Cita(nombrePaciente, fecha, hora, medico);
        this.citas.push(nuevaCita);
        this.citas.sort((a, b) => a.fecha - b.fecha); 
        alert("Cita programada para" + nombrePaciente + "el" +fecha + "a las" +hora+ "con el médico" + medico );
    }

    verCitas() {
        if (this.citas.length === 0) {
            alert("No hay citas programadas.");
            return;
        }

        console.log("Citas programadas:");
        this.citas.forEach(cita => {
            alert("-" + cita.nombrePaciente +":" +cita.fecha.toLocaleString() + "con el médico" + cita.medico);
        });
    }

    cancelarCita(nombrePaciente, fecha, hora) {
        const fechaHoraCita = new Date(`${fecha}T${hora}`);
        const indiceCita = this.citas.findIndex(cita => 
            cita.nombrePaciente === nombrePaciente && 
            cita.fecha.getTime() === fechaHoraCita.getTime()
        );

        if (indiceCita !== -1) {
            this.citas.splice(indiceCita, 1);
            alert("Cita de" + nombrePaciente + "para el" + fecha + "a las" + hora + "cancelada.");
        } else {
            alert("No se encontró ninguna cita programada para" + nombrePaciente + "en esa fecha y hora.");
        }
    }
}

function iniciarSistemaCitas() {
    const sistema = new SistemaCitas();
    
    while (true) {
        const opcion = prompt("¿Qué deseas hacer? (1: Programar cita, 2: Ver citas, 3: Cancelar cita, 4: Salir)");

        if (opcion === "1") {
            const nombrePaciente = prompt("Nombre del paciente:");
            const fecha = prompt("Fecha de la cita (YYYY-MM-DD):");
            const hora = prompt("Hora de la cita (HH:MM):");
            const medico = prompt("Nombre del médico:");

            sistema.programarCita(nombrePaciente, fecha, hora, medico);
        } else if (opcion === "2") {
            sistema.verCitas();
        } else if (opcion === "3") {
            const nombrePaciente = prompt("Nombre del paciente:");
            const fecha = prompt("Fecha de la cita (YYYY-MM-DD):");
            const hora = prompt("Hora de la cita (HH:MM):");

            sistema.cancelarCita(nombrePaciente, fecha, hora);
        } else if (opcion === "4") {
            alert("Saliendo del sistema...");
            break;
        } else {
            alert("Opción inválida. Intenta de nuevo.");
        }
    }
}


iniciarSistemaCitas();
