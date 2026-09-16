// --- CONFIGURACIÓN DE TASA Y CONTACTOS ---
const TASA_ANUAL = 0.35; 

// ¡IMPORTANTE! Reemplaza este número por el tuyo real (Ej: 5491100000000)
const NUMERO_LUCIANO = "5492804006499"; 

const gerentes = {
    "ford": "5491149391334",
    "volkswagen": "5491167456304",
    "kia": "5492914195488",
    "audi": "5492916422520",
    "byd": "5491135788583",
    "ducati": "5492916422520"
};

// Variables globales de estado
let marcaActual = "";
let monedaActual = "ARS";
let totalOperacionPesosGlobal = 0; 

// Opciones de configuración
const opcionesFinanciacion = [
    { titulo: 'Opción 0/30', pagos: 1 },
    { titulo: 'Opción 0/30/60', pagos: 2 },
    { titulo: 'Opción 0/30/60/90', pagos: 3 },
    { titulo: 'Opción 0/30/60/90/120', pagos: 4 },
    { titulo: 'Opción 0/30/60/90/120/180', pagos: 5 }
];

document.addEventListener('DOMContentLoaded', () => {
    // Vistas
    const viewBienvenida = document.getElementById('brandSelectionView');
    const viewSimulador = document.getElementById('simulatorView');
    
    // UI Header & Pantalla 1
    const selectMarcaInit = document.getElementById('marcaSelectInit');
    const btnContinuar = document.getElementById('btnContinuar');
    const btnCambiarMarca = document.getElementById('btnCambiarMarca');
    const badgeMarca = document.getElementById('marcaActiva');
    const logoMarcaActiva = document.getElementById('logoMarcaActiva');
    
    // UI Formulario
    const radiosMoneda = document.querySelectorAll('input[name="currency"]');
    const inputTotal = document.getElementById('totalOperacion');
    const cotizacionContainer = document.getElementById('cotizacionContainer');
    const inputCotizacion = document.getElementById('cotizacionDolar');
    const labelTotalOperacion = document.getElementById('labelTotalOperacion');
    const btnSimular = document.getElementById('btnSimular');
    const opcionesContainer = document.getElementById('opcionesContainer');
    
    // UI PDF
    const btnDescargarPDF = document.getElementById('btnDescargarPDF');
    const descargaContainer = document.getElementById('descargaContainer');
    const pdfMontoTotal = document.getElementById('pdfMontoTotal');

    // Inicializar visualización de tasas
    const displayTasaAnual = document.getElementById('displayTasaAnual');
    const displayTasaMensual = document.getElementById('displayTasaMensual');
    const tasaMensual = Math.pow(1 + TASA_ANUAL, 1 / 12) - 1;
    
    displayTasaAnual.textContent = `Tasa Anual: ${(TASA_ANUAL * 100).toFixed(2).replace('.', ',')}%`;
    displayTasaMensual.textContent = `Tasa Mensual: ${(tasaMensual * 100).toFixed(2).replace('.', ',')}%`;

    // --- FLUJO DE PANTALLAS ---

    selectMarcaInit.addEventListener('change', () => {
        btnContinuar.disabled = false;
    });

    btnContinuar.addEventListener('click', () => {
        marcaActual = selectMarcaInit.value;
        const nombreMarca = selectMarcaInit.options[selectMarcaInit.selectedIndex].text;
        
        badgeMarca.textContent = `Marca: ${nombreMarca}`;

        if (marcaActual !== 'ducati') {
            logoMarcaActiva.src = `img/${marcaActual}.png`;
            logoMarcaActiva.style.display = 'block';
        } else {
            logoMarcaActiva.style.display = 'none';
        }
        
        viewBienvenida.style.display = 'none';
        viewSimulador.style.display = 'block';

        const btnGerente = document.getElementById('btnWppGerente');
        if (btnGerente) {
            btnGerente.textContent = `Contactar al Gerente de ${nombreMarca}`;
        }
    });

    btnCambiarMarca.addEventListener('click', () => {
        viewSimulador.style.display = 'none';
        viewBienvenida.style.display = 'flex'; 
        
        opcionesContainer.innerHTML = '<p class="placeholder-text" id="msjPlaceholder">Ingresa los parámetros y presiona "Calcular Opciones" para ver el detalle.</p>';
        document.getElementById('contactoContainer').style.display = 'none';
        descargaContainer.style.display = 'none';
        
        inputTotal.value = '';
        inputCotizacion.value = '';
        monedaActual = 'ARS';
        document.getElementById('currencyARS').checked = true;
        cotizacionContainer.style.display = 'none';
        labelTotalOperacion.textContent = 'Total de la Operación ($):';
        totalOperacionPesosGlobal = 0;
    });

    // --- LÓGICA DE MONEDA Y FORMATEO DE INPUTS ---

    radiosMoneda.forEach(radio => {
        radio.addEventListener('change', (e) => {
            monedaActual = e.target.value;
            inputTotal.value = '';
            opcionesContainer.innerHTML = '<p class="placeholder-text" id="msjPlaceholder">Ingresa el total de la operación y presiona "Calcular Opciones" para ver el detalle.</p>';
            document.getElementById('contactoContainer').style.display = 'none';
            descargaContainer.style.display = 'none';
            
            if (monedaActual === 'USD') {
                cotizacionContainer.style.display = 'block';
                labelTotalOperacion.textContent = 'Total de la Operación (USD):';
            } else {
                cotizacionContainer.style.display = 'none';
                labelTotalOperacion.textContent = 'Total de la Operación ($):';
                inputCotizacion.value = ''; 
            }
        });
    });

    function handleInputFormatoYRecalculo(e) {
        let inputElement = e.target;
        let valor = inputElement.value;
        
        valor = valor.replace(/[^\d,]/g, '');
        
        const partes = valor.split(',');
        if (partes.length > 2) {
            valor = partes[0] + ',' + partes.slice(1).join('');
        }

        if (valor === '') {
            inputElement.value = '';
            if (inputElement.classList.contains('input-anticipo-tarjeta')) {
                recalcularTarjeta(inputElement);
            }
            return;
        }

        const partesLimpio = valor.split(',');
        let parteEntera = partesLimpio[0];
        let parteDecimal = partesLimpio.length > 1 ? ',' + partesLimpio[1].substring(0, 2) : '';

        if (parteEntera === '' && parteDecimal !== '') parteEntera = '0';

        if (parteEntera.length > 1 && parteEntera.startsWith('0')) {
            parteEntera = parseInt(parteEntera, 10).toString();
        }

        let enteroConPuntos = '';
        for (let i = parteEntera.length - 1, count = 1; i >= 0; i--, count++) {
            enteroConPuntos = parteEntera[i] + enteroConPuntos;
            if (count % 3 === 0 && i !== 0) {
                enteroConPuntos = '.' + enteroConPuntos;
            }
        }

        let prefijo = '$ ';
        if (inputElement.id === 'totalOperacion' && monedaActual === 'USD') {
            prefijo = 'U$S ';
        }

        inputElement.value = prefijo + enteroConPuntos + parteDecimal;

        if (inputElement.classList.contains('input-anticipo-tarjeta')) {
            recalcularTarjeta(inputElement);
        }
    }

    inputTotal.addEventListener('input', handleInputFormatoYRecalculo);
    inputCotizacion.addEventListener('input', handleInputFormatoYRecalculo);

    opcionesContainer.addEventListener('input', (e) => {
        if (e.target && e.target.classList.contains('input-anticipo-tarjeta')) {
            handleInputFormatoYRecalculo(e);
        }
    });

    function parseFormatedInputToFloat(formattedString) {
        if (!formattedString) return 0;
        let strLimpio = formattedString.replace(/[U\$S\s]/g, '');
        strLimpio = strLimpio.replace(/\./g, '');
        strLimpio = strLimpio.replace(/,/g, '.');
        return parseFloat(strLimpio);
    }

    // --- CÁLCULO DEL SIMULADOR ---

    btnSimular.addEventListener('click', () => {
        let totalOperacion = parseFormatedInputToFloat(inputTotal.value);
        let cotizacionDolar = 1; 

        if (isNaN(totalOperacion) || totalOperacion <= 0) {
            alert('Por favor, ingresa un monto válido para el total de la operación.');
            inputTotal.focus();
            return;
        }

        if (monedaActual === 'USD') {
            cotizacionDolar = parseFormatedInputToFloat(inputCotizacion.value);
            if (isNaN(cotizacionDolar) || cotizacionDolar <= 0) {
                alert('Por favor, ingresa una cotización del dólar válida.');
                inputCotizacion.focus();
                return;
            }
            totalOperacion = totalOperacion * cotizacionDolar;
        }

        totalOperacionPesosGlobal = totalOperacion;
        
        // Asignar el monto total al span oculto para el PDF
        pdfMontoTotal.textContent = formatearMoneda(totalOperacionPesosGlobal);
        
        calcularYMostrarOpciones(totalOperacionPesosGlobal, marcaActual);
    });


// --- LÓGICA DE DESCARGA PDF ---
    btnDescargarPDF.addEventListener('click', () => {
        // 1. Llevamos la pantalla arriba de todo para evitar el bug del espacio en blanco
        window.scrollTo(0, 0);
        
        // 2. Agregamos una clase al body para activar estilos de impresión
        document.body.classList.add('pdf-mode');

        // 3. Seleccionamos el contenedor a imprimir
        const element = document.getElementById('pdf-content');

        // 4. Opciones de html2pdf (Mejoradas para paginación y sin scroll)
        const opt = {
            margin:       [15, 10, 15, 10], // Márgenes: arriba, derecha, abajo, izquierda
            filename:     'Propuesta_Financiacion_Dietrich.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { 
                scale: 2, 
                useCORS: true, 
                scrollY: 0, // CRUCIAL: Fuerza a empezar desde el top 0 absoluto
                windowWidth: document.documentElement.offsetWidth
            },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:    { mode: ['css', 'legacy'] } // CRUCIAL: Activa los saltos de página
        };

        // 5. Generamos el PDF
        html2pdf().set(opt).from(element).save().then(() => {
            // 6. Limpiamos la clase cuando termina
            document.body.classList.remove('pdf-mode');
        });
    });

});

function calcularYMostrarOpciones(totalOperacionPesos, marca) {
    const contenedor = document.getElementById('opcionesContainer');
    const contactoContainer = document.getElementById('contactoContainer');
    const descargaContainer = document.getElementById('descargaContainer');
    
    contenedor.innerHTML = ''; 

    const tasaMensual = Math.pow(1 + TASA_ANUAL, 1 / 12) - 1;

    opcionesFinanciacion.forEach(op => {
        const anticipo = totalOperacionPesos / (op.pagos + 1);
        const remanente = totalOperacionPesos - anticipo;
        const valorCuota = calcularPMT(tasaMensual, op.pagos, remanente);
        const totalCobrado = anticipo + (valorCuota * op.pagos);

        const tarjeta = document.createElement('div');
        tarjeta.className = 'option-card';

        tarjeta.innerHTML = `
            <h3>${op.titulo}</h3>
            <ul class="option-details">
                <li class="anticipo-row">
                    <span>Anticipo a entregar:</span>
                    <input type="text" class="input-anticipo-tarjeta" data-pagos="${op.pagos}" value="${formatearMoneda(anticipo)}">
                </li>
                <li class="remanente-row">
                    <span>Remanente a Financiar:</span>
                    <span class="val-remanente">${formatearMoneda(remanente)}</span>
                </li>
                <li>
                    <span>Pagos Diferidos:</span>
                    <span>${op.pagos}</span>
                </li>
                <li>
                    <span>Valor de cada Cheque:</span>
                    <span class="val-cuota">${formatearMoneda(valorCuota)}</span>
                </li>
                <li class="total-row">
                    <span>Total Cobrado:</span>
                    <span class="val-total">${formatearMoneda(totalCobrado)}</span>
                </li>
            </ul>
        `;

        contenedor.appendChild(tarjeta);
    });

    configurarBotonesWpp(marca, totalOperacionPesos);
    
    // Mostrar botones
    contactoContainer.style.display = 'block';
    descargaContainer.style.display = 'block';
}

function recalcularTarjeta(inputElement) {
    let valorCrudoStr = inputElement.value;
    if (!valorCrudoStr) valorCrudoStr = "0";
    
    let strLimpio = valorCrudoStr.replace(/[U\$S\s]/g, '').replace(/\./g, '').replace(/,/g, '.');
    let nuevoAnticipo = parseFloat(strLimpio);
    if(isNaN(nuevoAnticipo)) nuevoAnticipo = 0;
    
    const pagos = parseInt(inputElement.getAttribute('data-pagos'));
    const card = inputElement.closest('.option-card');
    
    let remanente = totalOperacionPesosGlobal - nuevoAnticipo;
    if (remanente < 0) remanente = 0; 
    
    const tasaMensual = Math.pow(1 + TASA_ANUAL, 1 / 12) - 1;
    const valorCuota = calcularPMT(tasaMensual, pagos, remanente);
    const totalCobrado = nuevoAnticipo + (valorCuota * pagos);
    
    card.querySelector('.val-remanente').textContent = formatearMoneda(remanente);
    card.querySelector('.val-cuota').textContent = formatearMoneda(valorCuota);
    card.querySelector('.val-total').textContent = formatearMoneda(totalCobrado);
}

function configurarBotonesWpp(marca, totalPesosGlobal) {
    const btnGerente = document.getElementById('btnWppGerente');
    const btnLuciano = document.getElementById('btnWppLuciano');
    
    if (!btnGerente || !btnLuciano) return;

    const numeroGerente = gerentes[marca];
    const marcaNombre = marca.charAt(0).toUpperCase() + marca.slice(1);
    
    const totalString = formatearMoneda(totalPesosGlobal);

    const msjGerente = encodeURIComponent(`Hola, solicito evaluación crediticia para una operación con cheques diferidos. Marca: ${marcaNombre} | Total Operación: ${totalString}.`);
    btnGerente.href = `https://wa.me/${numeroGerente}?text=${msjGerente}`;

    const msjLuciano = encodeURIComponent(`Hola Luciano, tengo una consulta técnica/simulación sobre la calculadora PWA (Marca actual: ${marcaNombre}).`);
    btnLuciano.href = `https://wa.me/${NUMERO_LUCIANO}?text=${msjLuciano}`;
}

function calcularPMT(rate, nper, pv) {
    if (rate === 0) return pv / nper;
    const pvif = Math.pow(1 + rate, nper);
    return (rate * pv * pvif) / (pvif - 1);
}

function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valor);
}

//agregar que el anticipo se pueda modificar y que se recalculen las cuotas y el total cobrado en tiempo real.

//agregar la opcion del cambio de dolar y todo en pesos

//agregar remanente 

//agregar opcion de imprimir los resultados

//agregar opcion de telegram/nosis/bot 
