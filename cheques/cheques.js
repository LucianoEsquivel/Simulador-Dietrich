// Función para dar formato de miles mientras se escribe
function formatearMoneda(input) {
    let valor = input.value.replace(/\D/g, "");
    if (valor === "") {
        input.value = "";
        return;
    }
    input.value = new Intl.NumberFormat('es-AR').format(valor);
}

// Cálculo del pago diferido: remanente prorrateado en partes iguales
// + el interés mensual (TEM) aplicado sobre el remanente total.
function calcularPagoDiferido(tasa, cuotas, remanente) {
    if (cuotas === 0) return 0;
    return (remanente / cuotas) + (remanente * tasa);
}

// Motor principal del simulador de cheques
function calcularCheques(cantidadPagosDiferidos) {
    // 1. Obtener y limpiar datos de entrada
    const montoRaw = document.getElementById('chq-monto').value.replace(/\./g, '');
    const totalOperacion = parseFloat(montoRaw) || 0;
    const tnaInput = parseFloat(document.getElementById('chq-tna').value.replace(',', '.')) || 0;

    if (totalOperacion === 0) {
        alert("Por favor, ingresá el Total de la Operación.");
        return;
    }

    // 2. Cálculos financieros
    const tna = tnaInput / 100;
    // Fórmula Excel: =(1+TNA)^(1/12)-1
    const tem = Math.pow(1 + tna, 1/12) - 1; 

    // Fórmula: Total / (Cantidad de diferidos + el cheque de hoy)
    const cuota0 = totalOperacion / (cantidadPagosDiferidos + 1);
    
    // Lo que queda para financiar
    const remanente = totalOperacion - cuota0;
    
    // Cálculo del valor de los cheques a 30, 60, etc.
    const pagoDiferido = calcularPagoDiferido(tem, cantidadPagosDiferidos, remanente);
    
    // Total que entra a la caja
    const totalCobrado = cuota0 + (pagoDiferido * cantidadPagosDiferidos);

    // 3. Renderizar resultados en pantalla
    const formatoArg = (num) => '$ ' + Math.round(num).toLocaleString('es-AR');
    
    const htmlResultado = `
        <h4 style="text-align:center; padding-bottom: 10px;">Resumen de la Operación</h4>
        <table class="tabla-chq">
            <tbody>
                <tr>
                    <td>Tasa Mensual (TEM)</td>
                    <td><strong>${(tem * 100).toFixed(2)}%</strong></td>
                </tr>
                <tr>
                    <td>Total a Financiar</td>
                    <td>${formatoArg(totalOperacion)}</td>
                </tr>
                <tr class="fila-destacada">
                    <td>Cheque "Día 0" (Anticipo)</td>
                    <td>${formatoArg(cuota0)}</td>
                </tr>
                <tr>
                    <td>Remanente a Plazo</td>
                    <td>${formatoArg(remanente)}</td>
                </tr>
                <tr class="fila-destacada">
                    <td>Valor de los Cheques (${cantidadPagosDiferidos})</td>
                    <td>${formatoArg(pagoDiferido)}</td>
                </tr>
                <tr>
                    <td><strong>Total Final Cobrado</strong></td>
                    <td><strong>${formatoArg(totalCobrado)}</strong></td>
                </tr>
            </tbody>
        </table>
    `;

    const contenedorResultados = document.getElementById('resultado-cheques');
    contenedorResultados.innerHTML = htmlResultado;
    contenedorResultados.style.display = 'block';
}