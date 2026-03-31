// 1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
// El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
// Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
// Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).


function procesarNumero() {
    let valor = document.getElementById("input1").value;
    let numero = parseFloat(valor);
    let resultado = document.getElementById("result1");
    let contenedor = document.getElementById("resultadoContainer1");
    contenedor.classList.remove("d-none");
    if (isNaN(numero)) {
        resultado.textContent = "Por favor ingresa un número válido";
        return;
    }
    let porcentaje = calcularPorcentaje15(numero);
    resultado.textContent = `Resultado: ${porcentaje} $`;

}
function calcularPorcentaje15(numero) {
    if (numero > 70000) {
        return numero * 0.85;
    }
    else {
        return numero * 0.95;
    }

}

// 2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
// Gestión de nombres en la fila de espera del consultorio local.
// Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
// Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
// Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>


let pacientes = [];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};

let asistencia = [];
function agregarLista(nombre) {
    pacientes.push(nombre);
    return pacientes.join(", ");
};


function noUrgente() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

function urgenciaMedica() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío y debe contener un nombre válido");
    };
}


// 3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
// Verificar si un RUT o nombre está en el listado de entrega de beneficios.
// Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar si el dato ingresado existe en la lista.
// Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".


let beneficios = ["Juan Perez", "248002", "Ana Lopez", "248005", "Carlos Ruiz", "248003", "Maria Gomez", "225003", "Pedro Silva", "Luisa Torres"];

function buscarBeneficiario(dato) {
    let mensaje = "No registrado, verifique el nombre o RUT (Sin puntos ni guión)";
    for (let i = 0; i < beneficios.length; i++) {
        if (dato === beneficios[i]) {
            mensaje = "Beneficiario Verificado";
        }
    }
    return mensaje;
}

function verificarCodigo() {
    let input = document.getElementById("input3");
    let dato = input.value.trim();
    let result = document.getElementById("result3");
    let container = document.getElementById("resultadoContainer3");
    let resultado = buscarBeneficiario(dato);
    result.textContent = resultado;
    input.value = "";

    container.classList.remove("d-none");
}