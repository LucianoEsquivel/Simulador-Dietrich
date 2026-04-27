import { vehiculos, financiaciones } from './base.js';

const content = document.getElementById('content');
window.filtroPersonaActual = "Ambas"; 
window.filtrosSeleccionados = []; 

// --- PANTALLAS DE NAVEGACIÓN ---

window.renderMarcas = function() {
    const marcas = [...new Set(vehiculos.map(v => v.marca))];
    content.innerHTML = `
        <div class="navigation-bar">
            <button class="btn-back" onclick="window.location.href='../index.html'">VOLVER AL SIMULADOR</button>
            <h1 class="title">Seleccioná una marca</h1>
        </div>
        <div class="grid-marcas">
            ${marcas.map(marca => `
                <div class="card-marca" onclick="seleccionarMarca('${marca}')">
                    <div class="card-overlay">
                        <img src="logos/${marca.toLowerCase()}.png" class="marca-logo">
                        <span>${marca}</span>
                    </div>
                    <img src="fondos/${marca.toLowerCase()}.jpg" class="card-bg">
                </div>
            `).join('')}
        </div>
    `;
}

window.seleccionarMarca = (marcaElegida) => {
    const modelosUnicos = [...new Set(vehiculos.filter(v => v.marca === marcaElegida).map(v => v.modelo))];
    content.innerHTML = `
        <div class="navigation-bar">
            <button class="btn-back" onclick="renderMarcas()">⬅ Marcas</button>
            <h1 class="title">Modelos ${marcaElegida}</h1>
        </div>
        <div class="grid-modelos">
            ${modelosUnicos.map(modelo => `
                <div class="card-modelo" onclick="seleccionarModelo('${marcaElegida}', '${modelo}')">
                    <img src="logos/${marcaElegida.toLowerCase()}.png" class="brand-bg-watermark">
                    <div class="card-modelo-content"><h3>${modelo}</h3><p>Ver versiones</p></div>
                </div>
            `).join('')}
        </div>
    `;
};

window.seleccionarModelo = (marca, modelo) => {
    const versiones = vehiculos.filter(v => v.marca === marca && v.modelo === modelo);
    content.innerHTML = `
        <div class="navigation-bar">
            <button class="btn-back" onclick="seleccionarMarca('${marca}')">⬅ Modelos</button>
            <h1 class="title">${modelo}</h1>
        </div>
        <div class="grid-versiones">
            ${versiones.map(v => `
                <div class="card-version" onclick="mostrarFinanciacion(${v.id})">
                    <img src="logos/${marca.toLowerCase()}.png" class="brand-bg-watermark">
                    <div class="version-info"><strong>${v.version}</strong></div>
                    <button class="btn-select">Ver opciones</button>
                </div>
            `).join('')}
        </div>
    `;
};

// --- PANTALLA DE RESULTADOS ---

window.mostrarFinanciacion = (idVehiculo) => {
    const auto = vehiculos.find(v => v.id === idVehiculo);
    content.innerHTML = `
        <div class="navigation-bar">
            <button class="btn-back" onclick="seleccionarModelo('${auto.marca}', '${auto.modelo}')">⬅ Volver</button>
            <h1 class="title">Opciones para ${auto.modelo} ${auto.version}</h1>
        </div>
        <div class="config-superior">
            <div class="monto-card">
                <label>Monto a financiar ($)</label>
                <input type="text" id="inputMonto" placeholder="$ 14.500.000" oninput="manejarInputMonto(this, ${idVehiculo})">
            </div>
            <div class="filtro-persona-principal">
                <label>Tipo de Cliente</label>
                <div class="btn-group-filtros">
                    <button class="btn-filtro active" onclick="cambiarFiltroPersona('Ambas', ${idVehiculo}, this)">Cualquiera</button>
                    <button class="btn-filtro" onclick="cambiarFiltroPersona('Física', ${idVehiculo}, this)">Física</button>
                    <button class="btn-filtro" onclick="cambiarFiltroPersona('Jurídica', ${idVehiculo}, this)">Jurídica</button>
                </div>
            </div>
        </div>

        <div id="contenedor-recomendado"></div> 
        <div id="bloques-plazos-container"></div> <div id="dashboard-atributos" class="top3-grid"></div> <div class="seccion-filtros-avanzados">
            <div class="toolbar-filtros-botones">
                <strong>Ordenar:</strong>
                <button class="btn-add-filter" onclick="agregarFiltro('tna', ${idVehiculo})">+ TNA</button>
                <button class="btn-add-filter" onclick="agregarFiltro('gastos', ${idVehiculo})">+ Gasto</button>
                <button class="btn-add-filter" onclick="agregarFiltro('ltv', ${idVehiculo})">+ LTV</button>
                <button class="btn-limpiar" onclick="limpiarFiltros(${idVehiculo})">Limpiar</button>
            </div>
            <div id="badges-filtros" class="badges-container"></div>
        </div>
        <div id="lista-planes" class="results-container"></div>
    `;
    actualizarDashboard(idVehiculo);
};
// --- MOTOR DE INTELIGENCIA Y DASHBOARD ---

function obtenerPlanRecomendado(planesDelVehiculo) {
    if (!planesDelVehiculo || planesDelVehiculo.length === 0) return null;
    const tnas = planesDelVehiculo.map(p => parseFloat(p.cuotasPorMillon[0].tna.replace('%', '').replace(',', '.')));
    const ltvs = planesDelVehiculo.map(p => p.cuotasPorMillon[0].ltv.includes('$') ? 100 : parseInt(p.cuotasPorMillon[0].ltv.replace('%', '')));
    const gastos = planesDelVehiculo.map(p => parseFloat(p.cuotasPorMillon[0].gastos.replace('%', '').replace(',', '.')));

    const minTNA = Math.min(...tnas), maxTNA = Math.max(...tnas);
    const maxLTV = Math.max(...ltvs), minLTV = Math.min(...ltvs);
    const minGastos = Math.min(...gastos), maxGastos = Math.max(...gastos);

    planesDelVehiculo.forEach(plan => {
        let score = 0;
        const ref = plan.cuotasPorMillon[0];
        const tnaAct = parseFloat(ref.tna.replace('%', '').replace(',', '.'));
        const ltvAct = ref.ltv.includes('$') ? 100 : parseInt(ref.ltv.replace('%', ''));
        const gasAct = parseFloat(ref.gastos.replace('%', '').replace(',', '.'));

        if (tnaAct === minTNA) score += 3; else if (tnaAct < (minTNA + maxTNA) / 2) score += 1; else score -= 3;
        if (ltvAct === maxLTV) score += 3; else if (ltvAct > minLTV) score += 1; else score -= 3;
        if (gasAct === minGastos) score += 3; else if (gasAct < (minGastos + maxGastos) / 2) score += 1; else score -= 3;
        plan.scoreComercial = score;
    });
    return [...planesDelVehiculo].sort((a, b) => b.scoreComercial - a.scoreComercial)[0];
}

window.actualizarDashboard = (idVehiculo) => {
    // 1. Obtenemos el input y limpiamos todo lo que no sea número
    const inputMonto = document.getElementById('inputMonto');
    const valorLimpio = inputMonto.value.replace(/\D/g, ""); 
    
    // 2. Convertimos a número y definimos el valor por defecto si está vacío
    const montoFinal = valorLimpio && parseInt(valorLimpio) > 0 ? parseInt(valorLimpio) : 14500000;
    
    // 3. Filtrado de planes por vehículo
    let planes = financiaciones.filter(plan => 
        plan.aplicaATodo === true || plan.vehiculosIds.includes(idVehiculo)
    );

    // 4. Filtrado por tipo de persona
    if (window.filtroPersonaActual !== "Ambas") {
        planes = planes.filter(p => p.tipoPersona === window.filtroPersonaActual || p.tipoPersona === "Ambas");
    }

    // 5. Identificamos al ganador dinámico
    const recomendado = obtenerPlanRecomendado(planes);

    // 6. Ordenamiento (mismo que ya tenías)
    planes.sort((a, b) => {
        for (let criterio of window.filtrosSeleccionados) {
            if (criterio === 'tna') {
                const valA = Math.min(...a.cuotasPorMillon.map(c => parseFloat(c.tna.replace(',','.')) || 0));
                const valB = Math.min(...b.cuotasPorMillon.map(c => parseFloat(c.tna.replace(',','.')) || 0));
                if (valA !== valB) return valA - valB;
            }
            if (criterio === 'gastos') {
                const valA = Math.min(...a.cuotasPorMillon.map(c => parseFloat(c.gastos.replace(',','.')) || 0));
                const valB = Math.min(...b.cuotasPorMillon.map(c => parseFloat(c.gastos.replace(',','.')) || 0));
                if (valA !== valB) return valA - valB;
            }
            if (criterio === 'ltv') {
                const valA = Math.max(...a.cuotasPorMillon.map(c => parseFloat(c.ltv.replace('%','')) || 0));
                const valB = Math.max(...b.cuotasPorMillon.map(c => parseFloat(c.ltv.replace('%','')) || 0));
                if (valA !== valB) return valB - valA;
            }
        }
        return 0;
    });

    // 7. Renderizado: EL ORDEN ES CLAVE AQUÍ
    renderizarBadges(idVehiculo);
    renderizarCardRecomendada(recomendado, montoFinal); // 1° La Recomendación
    renderizarBloquesPorPlazo(planes, montoFinal);      // 2° Las Cuotas (Negras)
    renderizarAtributos(planes);                        // 3° Los Atributos (Blancos)
    renderizarListadoConBoton(planes, montoFinal);      // 4° El listado oculto
};

// --- FUNCIONES DE RENDERIZADO ESPECÍFICAS ---

function renderizarCardRecomendada(plan, monto) {
    const container = document.getElementById('contenedor-recomendado');
    if (!container) return; // Seguridad si el contenedor no existe

    // Si no hay plan recomendado (ej: por filtros), limpiamos el espacio y salimos
    if (!plan) {
        container.innerHTML = "";
        return;
    }

    const factor = plan.factorCalculo || 1000000;
    const ref = plan.cuotasPorMillon[0];
    const cuotaReal = (monto / factor) * parseFloat(ref.valor.replace('$', '').replace(/\./g, '').replace(',', '.'));

    const plazosNumericos = plan.cuotasPorMillon.map(c => parseInt(c.plazo));
    const minPlazo = Math.min(...plazosNumericos);
    const maxPlazo = Math.max(...plazosNumericos);
    const textoPlazo = minPlazo === maxPlazo ? `${minPlazo} meses` : `${minPlazo} a ${maxPlazo} meses`;

    // Usamos innerHTML para limpiar y renderizar de forma controlada
    container.innerHTML = `
        <div class="card-recomendada-premium" onclick="irAPlan('plan-${plan.idPlan}')">
            <div class="etiqueta-destacada">⭐ RECOMENDACIÓN DESTACADA</div>
            <div class="recomendada-header">
                <img src="logos/${plan.banco.split(' ')[0].toLowerCase()}.png" class="logo-recomendada">
                <div>
                    <h3>${plan.banco} - ${plan.nombre}</h3>
                    <p>${plan.descripcion}</p>
                </div>
            </div>
            <div class="recomendada-grid">
                <div class="item-destacado">
                    <span>Cuota Ref.</span>
                    <strong>$${Math.round(cuotaReal).toLocaleString('es-AR')}</strong>
                </div>
                <div class="item-destacado">
                    <span>TNA</span>
                    <strong>${ref.tna}</strong>
                </div>
                <div class="item-destacado">
                    <span>Plazo</span>
                    <strong>${textoPlazo}</strong>
                </div>
                <div class="item-destacado">
                    <span>Gastos</span>
                    <strong>${ref.gastos}</strong>
                </div>
            </div>
        </div>`;
}

function renderizarAtributos(planes) {
    const container = document.getElementById('dashboard-atributos');
    if (!container || planes.length === 0) return;

    let mejorTasa = { valor: 1000 }, mejorPlazo = { valor: 0 }, mejorLTV = { valor: 0 };

    planes.forEach(p => {
        p.cuotasPorMillon.forEach(c => {
            const t = parseFloat(c.tna.replace('%','').replace(',','.')), pl = parseInt(c.plazo), l = parseInt(c.ltv.replace('%',''));
            if (t < mejorTasa.valor) mejorTasa = { valor: t, banco: p.banco, tna: c.tna, plazo: c.plazo, idPlan: p.idPlan };
            if (pl > mejorPlazo.valor) mejorPlazo = { valor: pl, banco: p.banco, idPlan: p.idPlan };
            if (l > mejorLTV.valor) mejorLTV = { valor: l, banco: p.banco, idPlan: p.idPlan };
        });
    });

    container.innerHTML = `
        <div class="card-top tasa" onclick="irAPlan('plan-${mejorTasa.idPlan}')">
            <img src="logos/${mejorTasa.banco.split(' ')[0].toLowerCase()}.png" class="bank-watermark">
            <div class="top-tag">Oportunidad Tasa</div><h3>TNA ${mejorTasa.tna}</h3><p>${mejorTasa.banco}</p>
        </div>
        <div class="card-top plazo" onclick="irAPlan('plan-${mejorPlazo.idPlan}')">
            <img src="logos/${mejorPlazo.banco.split(' ')[0].toLowerCase()}.png" class="bank-watermark">
            <div class="top-tag">Máxima Flexibilidad</div><h3>${mejorPlazo.valor} Meses</h3><p>${mejorPlazo.banco}</p>
        </div>
        <div class="card-top ltv" onclick="irAPlan('plan-${mejorLTV.idPlan}')">
            <img src="logos/${mejorLTV.banco.split(' ')[0].toLowerCase()}.png" class="bank-watermark">
            <div class="top-tag">Acceso Directo</div><h3>${mejorLTV.valor}% LTV</h3><p>${mejorLTV.banco}</p>
        </div>`;
}

function renderizarBloquesPorPlazo(planes, monto) {
    const container = document.getElementById('bloques-plazos-container');
    const plazos = ["12 meses", "18 meses", "24 meses", "36 meses"];
    let html = '<div class="toolbar-filtros"><span>Mejor cuota por plazo:</span></div><div class="bloques-grid">';
    
    plazos.forEach(plazo => {
        let mejor = null;
        planes.forEach(plan => {
            const c = plan.cuotasPorMillon.find(cu => cu.plazo.toLowerCase().includes(plazo));
            if (c) {
                const valor = (monto / (plan.factorCalculo || 1000000)) * parseFloat(c.valor.replace('$', '').replace(/\./g, '').replace(',', '.'));
                if (!mejor || valor < mejor.v) mejor = { v: valor, b: plan.banco, id: plan.idPlan, t: c.tna };
            }
        });
        if (mejor) html += `<div class="card-bloque" onclick="irAPlan('plan-${mejor.id}')">
            <img src="logos/${mejor.b.split(' ')[0].toLowerCase()}.png" class="bank-watermark">
            <div class="bloque-plazo">${plazo.toUpperCase()}</div>
            <div class="bloque-monto">$${Math.round(mejor.v).toLocaleString('es-AR')}</div>
            <div class="bloque-info"><strong>${mejor.b}</strong><br><small>TNA: ${mejor.t}</small></div>
        </div>`;
    });
    container.innerHTML = html + '</div>';
}

function renderizarListadoConBoton(planes, monto) {
    const container = document.getElementById('lista-planes');
    container.innerHTML = `
        <button class="btn-toggle-final" id="btnToggle" onclick="toggleListado()">🔍 VER TODAS LAS TASAS (${planes.length})</button>
        <div id="listado-tasas-completo" style="display:none;">${generarHTMLAcordeones(planes, monto)}</div>`;
}

function generarHTMLAcordeones(planes, monto) {
    return planes.map(plan => `
        <details class="acordeon-plan" id="plan-${plan.idPlan}">
            <summary>
                <img src="logos/${plan.banco.split(' ')[0].toLowerCase()}.png" class="bank-watermark">
                <div class="resumen-plan"><strong>${plan.banco}</strong><span>${plan.nombre}</span></div>
            </summary>
            <div class="contenido-expandido">
                <table class="tabla-cuotas">
                    <thead><tr><th>Plazo</th><th>TNA</th><th class="th-resaltado">CUOTA</th><th>LTV</th><th>Gtos</th></tr></thead>
                    <tbody>${plan.cuotasPorMillon.map(c => `<tr>
                        <td>${c.plazo}</td><td>${c.tna}</td>
                        <td class="cuota-final">$${Math.round((monto / (plan.factorCalculo || 1000000)) * parseFloat(c.valor.replace('$', '').replace(/\./g, '').replace(',', '.'))).toLocaleString('es-AR')}</td>
                        <td>${c.ltv}</td><td>${c.gastos}</td>
                    </tr>`).join('')}</tbody>
                </table>
            </div>
        </details>`).join('');
}

// --- UTILIDADES ---

window.toggleListado = () => {
    const listado = document.getElementById('listado-tasas-completo'), btn = document.getElementById('btnToggle');
    const oculto = listado.style.display === "none";
    listado.style.display = oculto ? "block" : "none";
    btn.innerText = oculto ? "🔼 OCULTAR LISTADO" : `🔍 VER TODAS LAS TASAS`;
};

window.irAPlan = (id) => {
    const el = document.getElementById(id);
    if (el) { el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
};

window.cambiarFiltroPersona = (tipo, id, btn) => {
    window.filtroPersonaActual = tipo;
    btn.parentElement.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    actualizarDashboard(id);
};

window.agregarFiltro = (tipo, id) => { if (!window.filtrosSeleccionados.includes(tipo)) { window.filtrosSeleccionados.push(tipo); actualizarDashboard(id); } };
window.limpiarFiltros = (id) => { window.filtrosSeleccionados = []; actualizarDashboard(id); };

function renderizarBadges(id) {
    const c = document.getElementById('badges-filtros'), etiquetas = { tna: 'TNA', gastos: 'Gasto', ltv: 'LTV' };
    if (c) c.innerHTML = window.filtrosSeleccionados.map(f => `<span class="badge-filtro">${etiquetas[f]}</span>`).join('');
}

// Función para que el usuario vea el formato lindo
window.manejarInputMonto = (input, idVehiculo) => {
    // 1. Limpiamos el valor de cualquier cosa que no sea número
    let valor = input.value.replace(/\D/g, "");
    
    // 2. Si está vacío, limpiamos el campo
    if (!valor) {
        input.value = "";
        actualizarDashboard(idVehiculo);
        return;
    }

    // 3. Formateamos con puntos y el signo $
    input.value = "$ " + new Intl.NumberFormat('es-AR').format(valor);

    // 4. Llamamos al dashboard (el dashboard usará el valor limpio)
    actualizarDashboard(idVehiculo);
};


renderMarcas();