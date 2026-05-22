let refreshing;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (refreshing) return;
  refreshing = true;
  window.location.reload(); // Recarga la página automáticamente cuando hay código nuevo
});

/* ==========================================================================
   1. BASE DE DATOS DE BANCOS Y PLANES (datos.js)
   ========================================================================== */
   
const bancos = {
    santander: {
        nombre: "Santander",
        categorias: {
            general: {
                nombre: "Santander General",
                planes: [
                    { 
                        nombre: "Especial Pickups UVA", 
                        destacado: true,
                        tna: "14,90%", 
                        cft: "19,60%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Financiacion exclusiva para pickups (Ranger, Maverick, Amarok)",
                        utilPara: "Pickups",
                        plazos: [{m:12, c:91655}, {m:18, c:63762}, {m:24, c:49861}, {m:36, c:36052}, {m:48, c:29239}, {m:60, c:25222}, {m:72, c:22603}] 
                    },
                    { 
                        nombre: "Línea UVA",
                        destacado: true, 
                        tna: "19,90%", 
                        cft: "26,92%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Aplica para toda las marcas, seguro cautivo (consultar al referente por vehiculos utilitarios ligeros y vehiculos de transporte de pasajeros ya que tienen requisitos particulares).",
                        utilPara: "todas las marcas",
                        plazos: [{m:12, c:94530}, {m:18, c:66639}, {m:24, c:52775}, {m:36, c:39073}, {m:48, c:32381}, {m:60, c:28490}] 
                    },
                    { 
                        nombre: "Línea UVA con Quebranto", 
                        destacado: true,
                        ltv: 80, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Linea UVA con quebranto, aplica para todas las marcas (consultar al referente por vehiculos utilitarios ligeros y vehiculos de transporte de pasajeros ya que tienen requisitos particulares).",
                        utilPara: "todas las marcas",
                        plazos: [
                            { m: 12, c: 83334, tna: "0%", cft: "0%", g: 14, info: "TNA 0%" }, 
                            { m: 18, c: 60947, tna: "9,90%", cft: "12,66%", g: 12, info: "TNA 9,9%" }, 
                            { m: 24, c: 47030, tna: "9,90%", cft: "12,66%", g: 15, info: "TNA 9,9%" }
                        ] 
                    },
                    { 
                        nombre: "UVA Quebranto Pickups (TNA 0%)", 
                        destacado: true,
                        tna: "0,00%", 
                        cft: "0,00%", 
                        ltv: 80, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea Pickups con tasa UVA (aplica para Ranger, Maverick, Amarok)",
                        utilPara: "Pickups",
                        plazos: [{m:12, c:83334, g:10}, {m:18, c:55556, g:13}, {m:24, c:41667, g:16}] 
                    },
                    
                    { 
                        nombre: "UVA Quebranto Pickups (TNA 9,9%)", 
                        destacado: false,
                        tna: "9,90%", 
                        cft: "12,66%", 
                        ltv: 80, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea Pickups con tasa UVA (aplica para Ranger, Maverick, Amarok)",
                        utilPara: "Pickups",
                        plazos: [{m:12, c:88822, g:5}, {m:18, c:60947, g:6}, {m:24, c:47030, g:7}] 
                    },

                    { 
                        nombre: "Santander dolares", 
                        destacado: true, 
                        ltv: 80, 
                        seguro: "Cautivo", 
                        moneda: "USD",
                        baseCalculo: 10000, 
                        descripcion: "linea en dolares para personas (fisicas/juridicas) que generen dolares",
                        utilPara: "Toda las marcas",
                        plazos: [{m:24, c:465, tna: "8,90%", cft: "11,32%", g:2}, {m:36, c:329, tna:"9,50%", cft:"12,12%", g:2}, {m:48, c:263, tna:"9,90%", cft:"12,66%", g:2},{m:60, c:227, tna:"10,90%", cft:"14,02%", g:2},{m:72, c:204, tna:"11,50%", cft:"14,84", g:2},] 
                    },
                    { 
                        nombre: "Línea Fija con Quebranto", 
                        destacado: false,
                        ltv: 80, 
                        gastos: 12, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea tradicional en pesos con tasa fija con quebranto, aplica para todas las marcas (consultar al referente por vehiculos utilitarios ligeros y vehiculos de transporte de pasajeros ya que tienen requisitos particulares).",
                        utilPara: "Todas las marcas",
                        plazos: [
                            { m: 12, c: 99568, tna: "28,50%", cft: "40,49%" }, 
                            { m: 18, c: 75384, tna: "34,50%", cft: "50,73%" }, 
                            { m: 24, c: 63663, tna: "37,50%", cft: "56,11%" }, 
                            { m: 36, c: 53088, tna: "41,00%", cft: "62,60%" }, 
                            { m: 48, c: 48026, tna: "42,00%", cft: "64,50%" }, 
                            { m: 60, c: 45824, tna: "43,00%", cft: "66,42%" }
                        ] 
                    },
                    { 
                        nombre: "Tasa Fija 0km", 
                        destacado: false,
                        tna: "47,90%", 
                        cft: "76,13%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea tradicional en pesos con tasa fija, aplica para todas las marcas (consultar al referente por vehiculos utilitarios ligeros y vehiculos de transporte de pasajeros ya que tienen requisitos particulares).",
                        utilPara: "Todas las marcas",
                        plazos: [{m:12, c:111366}, {m:18, c:83851}, {m:24, c:70542}, {m:36, c:58086}, {m:48, c:52364}, {m:60, c:49900}] 
                    },
                    { 
                        nombre: "Tasa Fija Eléctricos", 
                        destacado: false,
                        tna: "41,90%", 
                        cft: "64,31%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Financiación UVA exclusiva para unidades de movilidad eléctrica.",
                        utilPara: "100% Electricos",
                        plazos: [{m:12, c:107654}, {m:18, c:80008}, {m:24, c:66534}, {m:36, c:53729}, {m:48, c:47949}, {m:60, c:44926}] 
                    },
                    { 
                        nombre: "Tasa UVA Eléctricos", 
                        destacado: false,
                        tna: "21,00%", 
                        cft: "28,59%", 
                        ltv: 80, 
                        gastos: 6, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Financiación UVA exclusiva para unidades de movilidad eléctrica.",
                        utilPara: "100% Electricos",
                        plazos: [{m:12, c:95168}, {m:18, c:67280}, {m:24, c:53427}, {m:36, c:39753}, {m:48, c:33093}, {m:60, c:29235}] 
                    }
                ]
            },
            byd: {
                nombre: "Santander ByD",
                planes: [
                    { 
                        nombre: "Línea UVA ByD (TNA 0%)", 
                        destacado: true,
                        tna: "0%", cft: "0%", ltv: 80, seguro: "Cautivo", baseCalculo: 1000000, 
                        descripcion: "Financiacion exclusiva para unidades BYD con tasa 0%",
                        utilPara: "ByD",
                        plazos: [{ m: 12, c: 83334, g: 12 }, { m: 18, c: 55556, g: 15 }, { m: 24, c: 41667, g: 19 }] 
                    },
                    { 
                        nombre: "Línea UVA ByD (TNA 9,9%)", 
                        destacado: true,
                        tna: "9,90%", cft: "12,66%", ltv: 80, seguro: "Cautivo", baseCalculo: 1000000, 
                        descripcion: "Financiacion exclusiva para unidades BYD",
                        utilPara: "ByD",
                        plazos: [{ m: 12, c: 88822, g: 5 }, { m: 18, c: 60947, g: 6 }, { m: 24, c: 47030, g: 7 }] 
                    },
                    { 
                        nombre: "Línea UVA 14,90%", 
                        destacado: false,
                        tna: "14,90%", cft: "19,60%", ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 1000000, 
                        descripcion: "Financiacion exclusiva para unidades BYD",
                        utilPara: "ByD",
                        plazos: [{ m: 12, c: 91655 }, { m: 18, c: 63762 }, { m: 24, c: 49861 }, { m: 36, c: 36052 }, { m: 48, c: 29239 },] 
                    },
                    { 
                        nombre: "Línea Tradicional ByD", 
                        destacado: false,
                        tna: "38,90%", cft: "58,68%", ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 1000000, 
                        descripcion: "Crédito prendario tradicional a tasa fija para unidades BYD.",
                        utilPara: "ByD",
                        plazos: [{ m: 12, c: 105819 }, { m: 18, c: 78118 }, { m: 24, c: 64570 }, { m: 36, c: 51606 }, { m: 48, c: 45672 }, { m: 60, c: 42509 }] 
                    }
                ]
            },
            kia: {
                nombre: "Santander KIA",
                planes: [
                    { 
                        nombre: "Seltos UVA", 
                        destacado: true,
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Financiación especial para KIA Seltos con Tasa 0%.",
                        utilPara: "Seltos",
                        plazos: [{ m: 12, c: 83.33, g: 14.85, ltv: 24000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 19.26, ltv: 16500000, info: "TNA 0%" }] 
                    },
                    
                    { 
                        nombre: "K2500 UVA", 
                        destacado: true,
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Línea comercial para KIA K2500 tasa 0%.",
                        utilPara: "K2500",
                        plazos: [{ m: 12, c: 83.33, g: 14.85, ltv: 23000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 19.26, ltv: 16000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Seltos tasa fija", 
                        destacado: true,
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Linea Tasa Fija, 0%, con quebranto",
                        utilPara: "Seltos",
                        plazos: [{ m: 12, c: 83.33, g: 29.93, ltv: 19500000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 39.12, ltv: 14500000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "K 2500 Fija", 
                        destacado: true,
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Linea tasa fija Tasa 0%, con quebranto.",
                        utilPara: "K2500",
                        plazos: [{ m: 12, c: 83.33, g: 28.84, ltv: 19000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 37.67, ltv: 14500000, info: "TNA 0%" }] 
                    },
                ]
            }
        }
    },
    icbc: {
        nombre: "Banco ICBC",
        categorias: {
            minorista: {
                nombre: "ICBC Minorista",
                planes: [
                    { 
                        nombre: "Everest", 
                        destacado: true,
                        ltv: 30000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, Esta tasa aplica solo para: Everest Titanium, la cuota incluye capital, intereses e IVA",
                        utilPara: "Everest",
                        plazos: [{ m: 18, tna: "0%", cft: "0%", ltv: 30000000, c: 55.56, g: 17 }, { m: 24, tna: "14,90%", cft: "19,60%", ltv: 30000000, c: 49.86, g: 17 }] 
                    },
                    { 
                        nombre: "Maverick", 
                        destacado: true,
                        ltv: 15000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, Esta tasa aplica para: Maverick HEV, Tremor y XLT, la cuota incluye capital, intereses e IVA",
                        utilPara: "Todas las Mavericks",
                        plazos: [{ m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 15000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Territory", 
                        destacado: true,
                        ltv: 15000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, Aplica para: Territory SEL, Territory Titanium, Territory HEV, la cuota incluye capital, intereses e IVA",
                        utilPara: "Todas las Territory",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 15000000, info: "TNA 0%" }, { m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 15000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Territory Titanium", 
                        destacado: true,
                        ltv: 25000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, Línea exclusiva para Territory Titanium, la cuota inclluye capital, intereses e IVA",
                        utilPara: "Solo Territory Titanium",
                        plazos: [{ m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 25000000, info: "TNA 0%" }] 
                    },                   
                    { 
                        nombre: "Especial Ranger XL", 
                        destacado: true,
                        ltv: 18000000, gastos: 2, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, Aplica para: Ranger XL 4x2, 4x4 y Chasis, la cuota incluye capital, intereses e IVA",
                        utilPara: "Ranger XL",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 18000000, info: "TNA 0% (Promo XL)" }] 
                    },

                    { 
                        nombre: "Especial UVA Ranger", 
                        destacado: true,
                        ltv: 60, gastos: 17, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, aplica para todas las versiones de Ranger excepto Raptor, la cuota incluye capital, intereses e IVA",
                        utilPara: "Ranger excepto Raptor",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0%" }, { m: 36, c: 27.78, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Tasa Especial Ranger (19,9% / 23,9% / 29,9%)", 
                        destacado: false,
                        ltv: 60, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, aplica para todas las versiones de Ranger, excepto Raptor, la cuota incluye capital, intereses e IVA",
                        utilPara: "Ranger excepto Raptor",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", g: 6, ltv: 25, info: "LTV hasta 25%" }, { m: 12, c: 83.33, tna: "0%", cft: "0%", g: 17, ltv: 80, info: "LTV 26% al 80%" }, { m: 24, c: 52.77, tna: "19,90%", cft: "26,92%", g: 6, ltv: 25, info: "LTV hasta 25%" }, { m: 24, c: 52.77, tna: "19,90%", cft: "26,92%", g: 17, ltv: 80, info: "LTV 26% al 80%" }, { m: 36, c: 45.47, tna: "29,90%", cft: "42,82%", g: 17, ltv: 60, info: "Gasto fijo 17%" }] 
                    },
                    { 
                        nombre: "Tasa Especial Ranger (TNA 0% / 26,9%)", 
                        destacado: false,
                        ltv: 25000000, gastos: 17, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, aplica para todas las versiones de Ranger, excepto Raptor, la cuota incluye capital, intereses e IVA",
                        utilPara: "Ranger excepto Raptor",
                        plazos: [{ m: 12, c: 94.53, tna: "19%", cft: "26,92%", ltv: 25000000, info: "TNA 19%" }, { m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 30000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Plan Cosecha (Cuotas Semestrales)", 
                        destacado: false,
                        seguro: "Liberado", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, aplica para todas las versiones de Ranger excepto Raptor, Seguro liberado, la cuota incluye capital, intereses e IVA",
                        utilPara: "Ranger excepto Raptor",
                        plazos: [{ m: 24, c: 441.28, tna: "45,90%", cft: "63,25%", g: 6, ltv: 25, info: "4 Cuotas - LTV hasta 25%" }, { m: 24, c: 441.28, tna: "45,90%", cft: "63,25%", g: 17, ltv: 80, info: "4 Cuotas - LTV 26% al 80%" }] 
                    },
                    { 
                        nombre: "Especial Transit 24/36", 
                        destacado: false,
                        gastos: 17, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, aplica para todas las versiones de Transit, excepto las E-Transit, para personas fisicas, seguro liberado, la cuota incluye capital, intereses e IVA",
                        utilPara: "Transit excepto E-Transit",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0%" }, { m: 36, c: 27.78, tna: "0%", cft: "0%", ltv: 60, info: "0%" }] 
                    },
                    
                    { 
                        nombre: "Transit Especial", 
                        destacado: false,
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 07/05/2026, Seguro liberado para Transit. aplica para todos los modelos de Transit, excepto E-Transit. la cuota incluye capital, intereses e IVA",
                        utilPara: "Transit excepto E-Transit",
                        plazos: [{ m: 12, c: 88.92, tna: "9,90%", cft: "12,66%", ltv: 60, info: "LTV Máx 60%" }, { m: 24, c: 52.77, tna: "19,90%", cft: "26,96%", ltv: 60, info: "LTV Máx 60%" }, { m: 36, c: 50.91, tna: "37,90%", cft: "56,84%", ltv: 50, info: "LTV Máx 50%" }] 
                    }
                    
                ]
            },
            comercial: {
                nombre: "ICBC Comercial",
                planes: [
                    { 
                        nombre: "Ranger XL seg. liberado", 
                        destacado: true,
                        ltv: 18000000, gastos: 2, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, Esta tasa aplica para: Ranger XL 4x2, 4x4 y Chasis, seguro de vida 0,20% sobre saldo, seguro liberado",
                        utilPara: "Ranger XL",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 18000000, info: "TNA 0%" }] 
                    },

                    { 
                        nombre: "Especial Ranger Semestral", 
                        destacado: true,
                        ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para Ranger XL y XLS, seguro liberado, sin gastos de otorgamiento, seguro de vida 0,20% sobre saldo",
                        utilPara: "Ranger XL y XLS",
                        plazos: [{ m: 12, c: 686.52, tna: "39,90%", cft: "54,11%", ltv: 50, info: "2 Cuotas Semestrales" }, { m: 24, c: 459.41, tna: "49,90%", cft: "69,49%", ltv: 50, info: "4 Cuotas Semestrales" }] 
                    },
                    { 
                        nombre: "Comercial Ranger XL/XLS (cautivo)",
                        destacado: false, 
                        gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, Financiación para Ranger XL/XLS con seguro cautivo, seguro de vida 0,20% sobre saldo.",
                        utilPara: "Ranger XL y XLS",
                        plazos: [{ m: 12, c: 90.93, tna: "14,90%", cft: "17,77%", ltv: 40, info: "max 40%" }, { m: 24, c: 63.18, tna: "39,90%", cft: "54,19", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 48.90, tna: "37,90%", cft: "50,93%", ltv: 50, info: "LTV Máx 50%" },] 
                    },
                    { 
                        nombre: "Comercial Ranger XL/XLS (liberado)", 
                        destacado: true,
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, Financiación comercial para Ranger XL y XLS con seguro liberado, seguro de vida 0,20% sobre saldo",
                        utilPara: "Ranger XL y XLS",
                        plazos: [{ m: 12, c: 91.98, tna: "16,90%", cft: "20,36%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 64.38, tna: "41,90%", cft: "57,50%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 50.18, tna: "39,90%", cft: "54,19%", ltv: 60, info: "LTV Máx 60%" },] 
                    },
                    
                    { 
                        nombre: "Especial Transit (cautivo)", 
                        destacado: false,
                        gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para Transit excepto las E-Transit, seguro de vida 0,20% sobre saldo, seguro cautivo.",
                        utilPara: "Transit excepto E-Transit",
                        plazos: [{ m: 12, c: 87.32, tna: "7,90%", cft: "9,09%", ltv: 60, info: "LTV Máx 60%" }, { m: 24, c: 50.74, tna: "17,90%", cft: "21,67%", ltv: 60, info: "LTV Máx 60%" }, { m: 36, c: 48.90, tna: "37,90%", cft: "50,93%", ltv: 50, info: "LTV Máx 50%" },] 
                    },
                    { 
                        nombre: "Especial Transit (liberado)", 
                        destacado: false,
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para Transit excepto las E-Transit, seguro liberado, seguro de vida 0,20% sobre saldo",
                        utilPara: "Transit excepto E-Transit",
                        plazos: [{ m: 12, c: 88.35, tna: "9.90%", cft: "11.51%", ltv: 60, info: "LTV Máx 60%" }, { m: 24, c: 51.81, tna: "19,90%", cft: "24,35%", ltv: 60, info: "LTV Máx 60%" }, { m: 36, c: 50.18, tna: "39,90%", cft: "54,19%", ltv: 50, info: "LTV Máx 50%" },] 
                    },
                    { 
                        nombre: "Generales Canal Comercial (cautivo)", 
                        destacado: true,
                        tna: "47,90%", ltv: 75, gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para Kuga, Maverick, F-150, Mustang, Ranger, Territory, Bronco, Transit, seguro de vida 0,20% sobre saldo",
                        utilPara: "Kuga, Maverick, F-150, Mustang, Ranger, Territory, Bronco, Transit",
                        plazos: [{ m: 12, c: 110.09, cft: "71,96%" }, { m: 24, c: 69.23, cft: "71,94%" }, { m: 36, c: 56.71, cft: "71.93%" }, { m: 48, c: 51.19, cft: "71,91%" }] 
                    },
                    { 
                        nombre: "Generales Canal Comercial (liberado)", 
                        destacado: true,
                        tna: "50,90%", ltv: 75, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para Kuga, Maverick, F-150, Mustang, Ranger, Territory, Bronco, Transit",
                        utilPara: "Kuga, Maverick, F-150, Mustang, Ranger, Territory, Bronco, Transit",
                        plazos: [{ m: 12, c: 111.81, cft: "77,49%" }, { m: 24, c: 71.11, cft: "77,47%" }, { m: 36, c: 58.76, cft: "77,45%" }, { m: 48, c: 53.40, cft: "77,44%" }] 
                    },
                    { 
                        nombre: "Mi Pyme - Ranger", 
                        destacado: false,
                        gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, Línea Mi Pyme exclusiva para unidades Ford Ranger, excepto Raptor",
                        utilPara: "Ranger excepto Raptor",
                        plazos: [{ m: 24, c: 54.93, tna: "23,90%", cft: "29,37%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 45.72, tna: "30,90%", cft: "38,94%", ltv: 60, info: "LTV Máx 60%" },] 
                    },
                    { 
                        nombre: "Mi Pyme - Transit", 
                        destacado: false,
                        gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, Línea Mi Pyme para unidades Ford Transit, excepto E-Transit.",
                        utilPara: "Transit excepto E-Transit",
                        plazos: [{ m: 24, c: 54.93, tna: "23,90%", cft: "29,37%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 45.72, tna: "30,90%", cft: "38,94%", ltv: 60, info: "LTV Máx 60%" },] 
                    },
                    { 
                        nombre: "Especial UVA Transit", 
                        destacado: false,
                        tna: "10,00%", cft: "12,79%", ltv: 60, gastos: 6, seguro: "LIBERADO", esUVA: true, valorUVA: 1706.43, baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para Transit, excepto E-Transit, para personas fisicas y juridicas, seguro liberado, la cuota incluye capital e intereses",
                        utilPara: "Transit excepto E-Transit",
                        plazos: [{ m: 24, c: 47.09 }, { m: 36, c: 33.21 }] 
                    },
                    { 
                        nombre: "General UVA Ranger", 
                        destacado: false,
                        tna: "19,00%", cft: "25,57%", ltv: 60, gastos: 6, seguro: "LIBERADO", esUVA: true, valorUVA: 1706.43, baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para todos los modelos de Ranger, la cuota incluye capital, intereses e IVA",
                        utilPara: "Ranger",
                        plazos: [{ m: 12, c: 94.01 }, { m: 24, c: 52.24 }, { m: 36, c: 38.52 }, { m: 48, c: 31.80 }, { m: 60, c: 27.89 }] 
                    },
                    { 
                        nombre: "Ranger USD 12/24", 
                        destacado: false,
                        moneda: "USD", ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para todas las versiones de Ranger excepto Raptor, seguro de vida 0,20% sobre saldo.",
                        utilPara: "Ranger excepto Raptor",
                        plazos: [{ m: 12, c: 84.42, tna: "0,00%", cft: "2,41%", info: "TNA 0% USD" }, { m: 24, c: 44.91, tna: "4,50%", cft: "7,38%", info: "TNA 4,5% USD" }] 
                    },
                    { 
                        nombre: "Ranger USD", 
                        destacado: false,
                        moneda: "USD", tna: "11,00%", cft: "14,56%", ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Fecha de vigencia: 06/05/2026, aplica para todas las versiones de Ranger, excepto Raptor, seguro de vida 0,20% sobre saldo",
                        utilPara: "Ranger",
                        plazos: [{ m: 12, c: 90.01 }, { m: 24, c: 48.20 }, { m: 36, c: 34.34 }] 
                    }
                ]
            }
        }
    },
    vw_financial: {
        nombre: "Volkswagen Financiera",
        categorias: {
            volkswagen: {
                nombre: "Volkswagen",
                planes: [

                    { 
                        nombre: "Amarok financia mas", 
                        destacado: true,
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Aplica para Amarok, seguro cautivo de VW Broker, disponible para persona juridica, fisica y venta directa, disponible de 07/05/2026 hasta el 31/05/2026",
                        utilPara: "Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   g: 15.915,   ltv: 40000000 },
                            { m: 18, c: 55.56, tna: "0%",   g: 16.52, ltv: 26000000 },
                            { m: 24, c: 41.67, tna: "0%",   g: 15.31, ltv: 18000000 },
                        ] 
                    },
                    { 
                        nombre: "Amarok sin quebranto", 
                        destacado: true,
                        tna: "0%", gastos: 2, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Aplica para Amarok, seguro cautivo de VW Broker, disponible para persona juridica, fisica y venta directa, disponible de 07/05/2026 hasta el 31/05/2026",
                        utilPara: "Amarok",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", ltv: 20000000, g: 2 }] 
                    },
                    { 
                        nombre: "UVA Amarok (24)", 
                        destacado: true,
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Aplica para Amarok, para persona fisica, seguro cautivo de VW Broker, vigencia: 07/05/2026-31/05/2026",
                        utilPara: "Amarok",
                        plazos: [
                            { m: 24, c: 41.67, tna: "0%", g: 2, ltv: 20000000 },
                        ] 
                    },
                    { 
                        nombre: "Autos financia mas", 
                        destacado: true,
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tera (todas las versiones), T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos Highline y Highline Bi Tono y Nivus Highline y Nivus Outfit Vigencia: desde el 22/05/2026 hasta el 31/05/2026, Disponible: Persona física, jurídica y venta directa, Seguro cautivo de VW Broker",
                        utilPara: "Tera, T-Cross, Polo, Taos, Nivus",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",    g: 11.075, ltv: 28000000 },
                            { m: 18, c: 55.56, tna: "0%",    g: 15.31, ltv: 22000000 },
                            { m: 24, c: 41.67, tna: "0%",    g: 17.73, ltv: 19000000 }
                        ] 
                    },

                    { 
                        nombre: "Autos sin quebranto", 
                        destacado: true,
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tera (todas las versiones), T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos Highline y Highline Bi Tono y Nivus Highline y Nivus Outfit Vigencia: desde el 22/05/2026 hasta el 31/05/2026, Disponible: Persona física, jurídica y venta directa, Seguro cautivo de VW Broker",
                        utilPara: "Tera, T-Cross, Polo, Taos, Nivus",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   g: 2,   ltv: 17000000 },
                        ] 
                    },

                    { 
                        nombre: "UVA Autos", 
                        destacado: true,
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tera Highline y Outfit, T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos Highline y Highline Bi Tono y Nivus Highline y Nivus Outfit Vigencia: 7/05/2026 hasta el 31/05/2026, Disponible: Persona física Seguro cautivo de VW Broker",
                        utilPara: "Tera, T-Cross, Polo, Taos, Nivus",
                        plazos: [
                            { m: 24, c: 41.67, tna: "0%",   g: 2,   ltv: 19000000 },
                        ] 
                    },

                    { 
                        nombre: "Especial Autos", 
                        destacado: false,
                        tna: "varios",  seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Aplica para todos los modelos excepto Amarok, disponible para persona fisica, juridica, seguro cautivo de BW Broker, vigencia: 07/05/2026-31/05/2026",
                        utilPara: "Todos los modelos excepto Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",    g: 14.705, ltv: 25000000 },
                            { m: 18, c: 55.56, tna: "0%",    g: 16.52, ltv: 17000000 },
                            { m: 24, c: 47.03, tna: "9,90%",    g: 16.52, ltv: 17000000 }
                        ] 
                    },
                    
                    { 
                        nombre: "Autos largo plazo", 
                        destacado: false,
                        tna: "varios",  seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Aplica para todos los modelos excepto Amarok, disponible para persona fisica, juridica, seguro cautivo de BW Broker, vigencia: 07/05/2026-31/05/2026",
                        utilPara: "Todos los modelos excepto Amarok",
                        plazos: [
                            { m: 36, c: 45.47, tna: "9,50%",    g: 2, ltv: 32000000 },
                            { m: 48, c: 39.12, tna: "10,00%",    g: 2, ltv: 32000000 }
                        ] 
                    },

                    { 
                        nombre: "Rentadoras Autos", 
                        destacado: true,
                        tna: "varios",  seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Aplica para todos los modelos excepto Amarok, disponible para persona fisica, juridica, seguro liberado, vigencia: 11/05/2026-31/05/2026",
                        utilPara: "Todos los modelos excepto Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0,00%",    g: 16.52, ltv: 26000000 },
                            { m: 18, c: 63.80, tna: "15,00%",    g: 15.31, ltv: 26000000 },
                            { m: 24, c: 53.96, tna: "21,90%",    g: 15.31, ltv: 26000000 }
                        ] 
                    },

                    { 
                        nombre: "Rentadoras Amarok", 
                        destacado: true,
                        tna: "varios",  seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Aplica para Amarok, disponible para persona fisica, juridica, seguro liberado, vigencia: 11/05/2026-31/05/2026",
                        utilPara: "Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0,00%",    g: 16.52, ltv: 32000000 },
                            { m: 18, c: 63.53, tna: "14,50%",    g: 15.31, ltv: 32000000 },
                            { m: 24, c: 53.72, tna: "21,50%",    g: 15.31, ltv: 32000000 }
                        ] 
                    },
                ]
            },
            audi: {
                nombre: "Audi",
                planes: [
                    { 
                        nombre: "Audi A1 y Q2", 
                        destacado: true,
                        tna: "0% / 9,9%", seguro: "CAUTIVO", gastos: 13.495, baseCalculo: 1000, 
                        descripcion: "Para los modelos Audi A1 y Q2, vigencia: 1/05/2026-31/05/2026, persona fisica y juridica, seguro cautivo de VW Broker",
                        utilPara: "A1 y Q2",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   ltv: 20000000, g: 13.495 }, 
                            { m: 12, c: 88.82, tna: "9.9%", ltv: 30500000, g: 13.495 }
                        ] 
                    },

                    { 
                        nombre: "UVA Audi", 
                        destacado: true,
                        tna: "0%", seguro: "CAUTIVO", gastos: 2, baseCalculo: 1000, 
                        descripcion: "Para los A1 y Q2, vigencia: 1/05/2026-31/05/2026, para persona fisica, seguro cautivo de VW Broker",
                        utilPara: "A1 y Q2",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   ltv: 20000000, g: 2 }, 
                        ] 
                    }
                ]
            }
        }
    },

    supervielle: {
        nombre: "Banco Supervielle",
        categorias: {
            prendarios: {
                nombre: "Prendarios",
                planes: [
                    { 
                        nombre: "Tasa Fija 0km (R3)",
                        destacado: true, 
                        ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Supervielle tasa fija. LTV hasta 65%.",
                        utilPara: "Todas las marcas",
                        plazos: [
                            { m: 12, c: 118.38, tna: "59,00%" }, 
                            { m: 18, c: 89.83, tna: "57,00%" },
                            { m: 24, c: 76.12, tna: "56,00%" }, 
                            { m: 30, c: 68.75, tna: "56,00%" }, 
                            { m: 36, c: 63.42, tna: "55,00%" }, 
                            { m: 48, c: 56.56, tna: "54,00%" },
                            { m: 60, c: 55.13, tna: "54,00%" },
                        ] 
                    },

                    { 
                        nombre: "Tasa Fija 0km (R0)",
                        destacado: true, 
                        ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Supervielle tasa fija. LTV hasta 65%.",
                        utilPara: "Todas las marcas",
                        plazos: [
                            { m: 12, c: 114.56, tna: "53,00%" }, 
                            { m: 18, c: 87.18, tna: "53,00%" },
                            { m: 24, c: 74.03, tna: "53,00%" }, 
                            { m: 30, c: 66.56, tna: "53,00%" }, 
                            { m: 36, c: 61.90, tna: "53,00%" }, 
                            { m: 48, c: 56.74, tna: "53,00%" },
                            { m: 60, c: 54.26, tna: "53,00%" },
                        ] 
                    },

                    { 
                        nombre: "Tasa UVA 0km (R3)",
                        destacado: true, 
                        ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Supervielle tasa UVAs. LTV hasta 65%.",
                        utilPara: "Todas las marcas",
                        plazos: [
                            { m: 12, c: 100.08, tna: "26,00%" }, 
                            { m: 18, c: 70.90, tna: "24,00%" },
                            { m: 24, c: 56.40, tna: "23,00%" }, 
                            { m: 30, c: 48.16, tna: "23,00%" }, 
                            { m: 36, c: 42.04, tna: "22,00%" }, 
                            { m: 48, c: 34.64, tna: "21,00%" },
                            { m: 60, c: 30.73, tna: "21,00%" },
                        ] 
                    },

                    { 
                        nombre: "Tasa UVA 0km (R0)",
                        destacado: true, 
                        ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Supervielle tasa UVAs. LTV hasta 65%.",
                        utilPara: "Todas las marcas",
                        plazos: [
                            { m: 12, c: 96.13, tna: "20,00%" }, 
                            { m: 18, c: 68.26, tna: "20,00%" },
                            { m: 24, c: 54.40, tna: "20,00%" }, 
                            { m: 30, c: 46.13, tna: "20,00%" }, 
                            { m: 36, c: 40.66, tna: "20,00%" }, 
                            { m: 48, c: 33.93, tna: "20,00%" },
                            { m: 60, c: 29.99, tna: "20,00%" },
                        ] 
                    },
                ]
            }
        }
    },

    galicia: {
        nombre: "Banco Galicia",
        categorias: {
            prendarios: {
                nombre: "Préstamos Prendarios",
                planes: [
                    { 
                        nombre: "Tasa Fija 0km",
                        destacado: true, 
                        tna: "71,00%", cft: "129,27%", ltv: 80, gastos: 6, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Galicia tasa fija. LTV hasta 80%.",
                        utilPara: "Todas las marcas",
                        plazos: [{ m: 12, c: 141.53 }, { m: 24, c: 94.25 }, { m: 36, c: 80.72 }, { m: 48, c: 75.30 }, { m: 60, c: 72.84 }] 
                    },
                    { 
                        nombre: "Prendario UVA 0km", 
                        destacado: true,
                        tna: "UVA + 37%", cft: "36,30%", ltv: 80, gastos: 6, valorUVA: 1706.43, baseCalculo: 1000, esUVA: true, 
                        descripcion: "Línea UVA Banco Galicia para unidades 0km.",
                        utilPara: "Todas las marcas",
                        plazos: [{ m: 12, c: 70.52 }, { m: 24, c: 41.61 }, { m: 36, c: 32.39 }, { m: 48, c: 28.07 }, { m: 60, c: 25.69 }] 
                    }
                ]
            }
        }
    },
    
    usados: {
        nombre: "Tasas para usados",
        categorias: {
            Usados: {
                nombre: "Volkswagen Financiera - Usados",
                planes: [

                    { 
                        nombre: "Usados Tasa Fija - VW Financiera",
                        destacado: true, 
                        tna: "Varios", ltv: 50, gastos: 14.10, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Usados multimarca hasta 10 años, vigencia 07/07/2026-31/05/2026, persona fisica y juridica, seguro cautivo de VW Broker.",
                        utilPara: "Usados hasta 10 años",
                        plazos: [
                            { m: 12, c: 99.81, tna: "28,90%", g: 14.10, ltv: 50 },
                            { m: 18, c: 75.63, tna: "34,90%", g: 14.10, ltv: 50 },
                            { m: 24, c: 63.92, tna: "37,90%", g: 14.10, ltv: 50 },
                            { m: 36, c: 52.73, tna: "40,50%", g: 14.10, ltv: 50 }
                        ] 
                    },
                    { 
                        nombre: "Usados UVAs - VW Financiera", 
                        destacado: true,
                        tna: "Varios", ltv: 50, gastos: 14.10, seguro: "CAUTIVO", baseCalculo: 1000, esUVA: true, 
                        descripcion: "Usados multimarca hasta 6 años, vigencia 07/05/2026-31/05/2026, persona fisica, seguro cautivo de VW Broker",
                        utilPara: "Usados hasta 6 años",
                        plazos: [
                            { m: 12, c: 87.48, tna: "7,50%",  g: 14.10, ltv: 50 },
                            { m: 18, c: 62.63, tna: "12,90%", g: 14.10, ltv: 50 },
                            { m: 24, c: 50.21, tna: "15,50%", g: 14.10, ltv: 50 },
                            { m: 36, c: 37.61, tna: "17,50%", g: 14.10, ltv: 50 }
                        ] 
                    }
                ]
            },
            UsadosICBC: {
                nombre: "ICBC - Usados",
                planes: [
                    {
                        idPlan: 56, 
                        nombre: "Tasa Especial Usados (ICBC)",
                        destacado: true,
                        tipoPersona: "Física",
                        moneda: "ARS",
                        baseCalculo: 1000, 
                        aplicaATodo: false, 
                        utilPara: "Usados multimarca hasta 13 años",
                        descripcion: "Vigencia: Mayo 2026. LTV: 80% (0-1 año), 70% (2-5 años), 60% (6-10 años), 50% (11-13 años).",
                        vehiculosIds: [], 
                        plazos: [
                            { m: 12, c: 100.40, tna: "29,90%", cft: "42,82%", ltv: 80, g: 6, seguro: "Cautivo" },
                            { m: 24, c: 65.22,  tna: "39,90%", cft: "60,53%", ltv: 80, g: 6, seguro: "Cautivo" },
                            { m: 36, c: 56.62,  tna: "45,90%", cft: "72,10%", ltv: 80, g: 6, seguro: "Cautivo" }
                        ]
                    }
                ]
            }
        }
    },


};
/* ==========================================================================
   2. CONFIGURACIÓN Y NAVEGACIÓN
   ========================================================================== */
let bancoActual = null;
let financiacionActual = null;
let origenNavegacion = 'inicio'; 
let vistaActual = 'vista-inicio'; 
let historialNavegacion = [];

const marcasConfig = {
    ford: { 
        nombre: "Ford", 
        bancos: ["santander-general", "icbc-minorista", "icbc-comercial", "galicia-prendarios", "supervielle-prendarios"] 
    },
    vw: { 
        nombre: "Volkswagen", 
        bancos: ["vw_financial-volkswagen", "santander-general", "galicia-prendarios", "supervielle-prendarios"] 
    },
    byd: { 
        nombre: "BYD", 
        bancos: ["santander-general", "santander-byd"] 
    },
    kia: { 
        nombre: "KIA", 
        bancos: ["santander-general", "santander-kia", "galicia-prendarios", "supervielle-prendarios"] 
    },
    audi: {
        nombre: "Audi",
        bancos: ["vw_financial-audi", "santander-general", "galicia-prendarios", "supervielle-prendarios"]
    }
};

/* --- NUEVA LÓGICA DE NAVEGACIÓN CENTRALIZADA --- */
function mostrarSeccion(id, esVolver = false) {
    // Si no es un movimiento de "volver", guardamos la vista donde estamos antes de cambiar
    if (!esVolver && vistaActual && vistaActual !== id) {
        historialNavegacion.push(vistaActual);
    }

    vistaActual = id;
    document.querySelectorAll('section').forEach(s => s.classList.replace('active', 'hidden'));
    document.getElementById(id).classList.replace('hidden', 'active');

    // Control del botón Volver Fijo (Ocultar solo en el inicio)
    const nav = document.getElementById('navegacion-fija');
    if (nav) {
        if (id === 'vista-inicio') {
            nav.classList.add('hidden');
            historialNavegacion = []; // Limpiamos el historial al llegar al inicio
        } else {
            nav.classList.remove('hidden');
        }
    }
}

// El "cerebro" del botón VOLVER fijo
function manejadorVolver() {
    if (historialNavegacion.length > 0) {
        // Sacamos la última vista del historial
        const vistaAnterior = historialNavegacion.pop();
        
        // Vamos a esa vista indicando que es un movimiento de "volver" (para no duplicar el historial)
        mostrarSeccion(vistaAnterior, true);

        // Limpiezas visuales opcionales según la vista a la que volvemos
        if (vistaAnterior === 'vista-inicio') {
            const tituloNoPrendaria = document.getElementById('nombre-categoria-no-prendaria');
            if (tituloNoPrendaria) tituloNoPrendaria.innerText = "Opciones No Prendarias";
        }
    } else {
        // Por seguridad, si el historial está vacío, mandamos al inicio
        mostrarSeccion('vista-inicio');
    }
}

function mostrarSeccionMarcas() { 
    origenNavegacion = 'marcas'; 
    mostrarSeccion('vista-marcas'); 
}

function mostrarSeccionBancos() { 
    origenNavegacion = 'inicio'; 
    document.querySelectorAll('.card-banco').forEach(t => t.style.display = "flex");
    mostrarSeccion('vista-bancos'); 
}

function seleccionarMarca(marcaKey) {
    const config = marcasConfig[marcaKey];
    if (!config) return;

    origenNavegacion = 'marcas';

    // Lógica estándar para todas las marcas (incluyendo BYD)
    mostrarSeccion('vista-financiaciones');
    document.getElementById('nombre-banco-seleccionado').innerText = `Opciones para ${config.nombre}`;
    
    const cont = document.getElementById('lista-financiaciones');
    cont.innerHTML = ""; 
    
    const gridTarjetas = document.createElement('div');
    gridTarjetas.className = 'contenedor-tarjetas-subcat'; 
    cont.appendChild(gridTarjetas);

    config.bancos.forEach(idCompuesto => {
        const [bancoKey, catKey] = idCompuesto.split('-');
        const banco = bancos[bancoKey];
        const categoria = banco.categorias[catKey];

        const btn = document.createElement('div'); 
        btn.className = `card-sub-categoria cat-${catKey} ${bancoKey}`; 
        
        let nombreMostrar = categoria.nombre;
        
        // Mantenemos tus correcciones de nombres
        if (bancoKey === 'vw_financial' && catKey === 'volkswagen') nombreMostrar = "Volkswagen";
        if (bancoKey === 'galicia' && catKey === 'prendarios') nombreMostrar = "Galicia Prendario";
        if (bancoKey === 'supervielle' && catKey === 'prendarios') nombreMostrar = "Supervielle Prendarios";
        if (catKey === 'comercial') nombreMostrar = "ICBC Mayorista";

        btn.innerHTML = `<span>${nombreMostrar}</span>`; 
        
        btn.onclick = () => {
            bancoActual = banco;
            bancoActual.key = bancoKey;
            mostrarPlanes(categoria, bancoKey);
        };
        gridTarjetas.appendChild(btn);
    });
}

/* ==========================================================================
   3. MANEJO DE CATEGORÍAS Y PLANES
   ========================================================================== */
function mostrarCategorias(bancoKey) {
    if (!bancos[bancoKey]) return;
    bancoActual = bancos[bancoKey];
    bancoActual.key = bancoKey;
    origenNavegacion = 'inicio';

    mostrarSeccion('vista-financiaciones');
    document.getElementById('nombre-banco-seleccionado').innerText = bancoActual.nombre;

    const cont = document.getElementById('lista-financiaciones');
    cont.innerHTML = ""; 
    
    const gridTarjetas = document.createElement('div');
    gridTarjetas.className = 'contenedor-tarjetas-subcat'; 
    cont.appendChild(gridTarjetas);

    for (let key in bancoActual.categorias) {
        const cat = bancoActual.categorias[key];
        const btn = document.createElement('div'); 
        btn.className = `card-sub-categoria cat-${key} ${bancoActual.key}`;
        btn.innerHTML = `<span>${cat.nombre}</span>`; 
        btn.onclick = () => mostrarPlanes(cat, bancoKey);
        gridTarjetas.appendChild(btn);
    }
}

function mostrarPlanes(categoria, bancoKey) {
    mostrarSeccion('vista-financiaciones');
    document.getElementById('nombre-banco-seleccionado').innerText = categoria.nombre;

    const cont = document.getElementById('lista-financiaciones');
    cont.innerHTML = ""; 

    // 1. Separamos los planes en dos grupos
    const destacados = categoria.planes.filter(plan => plan.destacado === true);
    const otros = categoria.planes.filter(plan => plan.destacado !== true);

    // --- FUNCIÓN INTERNA PARA CREAR BOTONES CON FICHA RÁPIDA ---
    const crearBotonConTooltip = (plan, contenedor) => {
        const btn = document.createElement('button');
        
        // CAMBIO CLAVE: Usamos 'btn-plan-ficha' para evitar herencias de .btn-banco
        btn.className = plan.destacado ? 'btn-plan-ficha destacado' : 'btn-plan-ficha';
        btn.innerText = plan.nombre;
        
        // Extraemos datos clave del primer plazo para el tooltip
        const p1 = plan.plazos[0];
        const tna = p1.tna || plan.tna || "Consultar";
        const gastos = p1.g !== undefined ? p1.g : (plan.gastos || "0");
        const plazoMin = plan.plazos[0].m;
        const plazoMax = plan.plazos[plan.plazos.length - 1].m;

        // --- NUEVO: Lógica para formatear LTV (Porcentaje o Monto Fijo) ---
        let ltvRaw = p1.ltv || plan.ltv || "---";
        let ltvMostrar = ltvRaw;
        if (typeof ltvRaw === 'number') {
            // Si es menor a 100 lo muestra como %, si es mayor lo muestra en Millones
            ltvMostrar = (ltvRaw <= 100) ? `${ltvRaw}%` : `Máx $${ltvRaw / 1000000}M`;
        }

        // Construimos el texto del cuadro agregando el LTV al final
        const infoRapida = `📍 ${plan.utilPara || 'Toda la gama'}\n📈 TNA: ${tna}\n⏱ Plazos: ${plazoMin} a ${plazoMax} meses\n💰 Gastos: ${gastos}%\n🏦 LTV: ${ltvMostrar}`;
        
        // Seteamos el atributo que leerá el CSS
        btn.setAttribute('data-tooltip', infoRapida);
        
        btn.onclick = () => abrirFormulario(plan);
        contenedor.appendChild(btn);
    };

    // 2. Contenedor para los planes destacados
    const contenedorDestacados = document.createElement('div');
    contenedorDestacados.className = 'grid-planes-pc'; 
    cont.appendChild(contenedorDestacados);

    destacados.forEach(plan => crearBotonConTooltip(plan, contenedorDestacados));

    // 3. Sistema de "Ver más" para planes no destacados
    if (otros.length > 0) {
        const btnVerMas = document.createElement('button');
        btnVerMas.className = 'btn-ver-mas-opciones';
        btnVerMas.innerHTML = `🔽 VER OTRAS OPCIONES DE TASAS`;
        cont.appendChild(btnVerMas);

        const contenedorOtros = document.createElement('div');
        contenedorOtros.id = 'extra-planes-container';
        contenedorOtros.className = 'grid-planes-pc hidden-opciones';
        cont.appendChild(contenedorOtros);

        otros.forEach(plan => crearBotonConTooltip(plan, contenedorOtros));

        btnVerMas.onclick = () => {
            const estaOculto = contenedorOtros.classList.contains('hidden-opciones');
            if (estaOculto) {
                contenedorOtros.classList.remove('hidden-opciones');
                btnVerMas.innerHTML = `🔼 OCULTAR OPCIONES EXTRA`;
            } else {
                contenedorOtros.classList.add('hidden-opciones');
                btnVerMas.innerHTML = `🔽 VER OTRAS OPCIONES DE TASAS`;
            }
        };
    }
}

function abrirFormulario(plan) {
    financiacionActual = plan;
    mostrarSeccion('vista-calculo');
    
    document.getElementById('nombre-financiacion-seleccionada').innerText = plan.nombre;
    document.getElementById('texto-informativo-dinamico').innerText = plan.descripcion || "Consulte condiciones vigentes.";

    const grupoDolar = document.getElementById('grupo-cotizacion');
    if (grupoDolar) {
        grupoDolar.style.display = (plan.moneda === "USD") ? "block" : "none";
    }

    let tablaTasas = `
        <div class="ficha-tecnica-detallada">
            <h4 style="text-align:center; padding:10px;">Condiciones de la financiación</h4>
            <div class="table-container">
                <table class="tabla-condiciones">
                    <thead>
                        <tr><th>Plazo</th><th>TNA</th><th>CFT</th><th>LTV</th><th>Gastos</th></tr>
                    </thead>
                    <tbody>`;
    
    plan.plazos.forEach(p => {
        // --- MODIFICACIÓN UNIFICACIÓN LTV ---
        let ltvRaw = p.ltv || plan.ltv || "---";
        let ltvMostrar = ltvRaw;

        if (typeof ltvRaw === 'number') {
            ltvMostrar = (ltvRaw <= 100) ? ltvRaw + "%" : "$" + (ltvRaw / 1000000) + "M";
        }

        tablaTasas += `
            <tr>
                <td><strong>${p.m} Meses</strong></td>
                <td>${p.tna || plan.tna || "---"}</td>
                <td>${p.cft || plan.cft || "---"}</td>
                <td>${ltvMostrar}</td>
                <td>${p.g || plan.gastos || "0"}%</td>
            </tr>`;
    });
    tablaTasas += `</tbody></table></div></div>`;

    document.getElementById('ficha-tecnica').innerHTML = tablaTasas;
    document.getElementById('resultado-cuotas').innerHTML = "";

    // 1. Limpiamos todos los inputs primero por defecto
    ['precio-lista', 'precio', 'anticipo', 'monto-directo'].forEach(id => {
        document.getElementById(id).value = "";
    });

    // 2. Vinculamos los eventos para que el usuario pueda escribir
    vincularEventosCalculo();

    // --- NUEVO: LÓGICA DE AUTOCOMPLETADO PARA LTV EN PESOS ---
    // Buscamos el LTV general del plan o, si no lo tiene, el del primer plazo
    let ltvBase = plan.ltv || plan.plazos[0].ltv || 0;
    
    // Si el LTV es un número mayor a 100, sabemos que es plata (ej: 44000000) y no un porcentaje (ej: 80)
    if (typeof ltvBase === 'number' && ltvBase > 100) {
        const inputMonto = document.getElementById('monto-directo');
        
        // Escribimos el LTV máximo formateado con puntos (ej: 44.000.000)
        inputMonto.value = new Intl.NumberFormat('es-AR').format(ltvBase);
        
        // Simulamos automáticamente para que ya aparezcan las cuotas en pantalla
        calcularSimulacion();
    }

    window.scrollTo(0, 0);
}

/* ==========================================================================
   4. MOTOR DE CÁLCULO
   ========================================================================== */

function calcularSimulacion() {
    const obtenerNumeroLimpio = (id) => {
        const input = document.getElementById(id);
        if (!input) return 0;
        return parseFloat(input.value.replace(/\./g, '')) || 0;
    };

    const montoDirecto = obtenerNumeroLimpio('monto-directo');
    const pListaPesos = obtenerNumeroLimpio('precio-lista');
    const vVentaPesos = obtenerNumeroLimpio('precio');
    const anticipoPesos = obtenerNumeroLimpio('anticipo');
    const cotizacion = parseFloat(document.getElementById('cotizacion-dolar').value) || 1;

    const esUSD = (financiacionActual.moneda === "USD");
    const factor = esUSD ? cotizacion : 1;
    const moneda = esUSD ? "USD " : "$ ";

    // --- LÓGICA: MOSTRAR MÁXIMO FINANCIABLE EN TIEMPO REAL (CORREGIDA PARA MONEDA) ---
    const divMaximo = document.getElementById('info-maximo-financiable');
    const spanMontoMax = document.getElementById('monto-max-ltv');
    const ltvGeneral = financiacionActual.ltv || 0;

    if (pListaPesos > 0 && typeof ltvGeneral === 'number' && ltvGeneral <= 100) {
        // Calculamos el máximo en la moneda del plan (si es USD, divide por el factor)
        const maximoLTV = (pListaPesos / factor) * (ltvGeneral / 100);
        if (spanMontoMax) spanMontoMax.innerText = `${moneda}${Math.round(maximoLTV).toLocaleString('es-AR')}`;
        if (divMaximo) divMaximo.style.display = "block";
    } else {
        if (divMaximo) divMaximo.style.display = "none";
    }

    if (montoDirecto === 0 && vVentaPesos === 0) return;

    let html = `
        <table class="tabla-condiciones">
            <thead>
                <tr><th>Plazo</th><th>Cuota</th><th>Financiado</th><th>Gastos</th></tr>
            </thead>
            <tbody>`;

    financiacionActual.plazos.forEach(p => {
        let montoFin;
        let filaClase = "";
        let advertenciaTexto = "";

        // --- LÓGICA DE LTV UNIFICADA Y SEGURA (CORREGIDA PARA USD) ---
        let ltvValor = p.ltv || financiacionActual.ltv || 999999999999;
        let techoFinalBanco;

        if (ltvValor <= 100) {
            if (pListaPesos > 0) {
                // Convertimos el precio de lista a la moneda del plan ANTES de aplicar el %
                const pListaEnMonedaPlan = pListaPesos / factor;
                techoFinalBanco = pListaEnMonedaPlan * (ltvValor / 100);
            } else {
                techoFinalBanco = 999999999999; 
            }
        } else {
            // Si el LTV es un monto fijo, también lo ajustamos a la moneda del plan
            techoFinalBanco = ltvValor / factor;
        }

        if (montoDirecto > 0) {
            montoFin = Math.min((montoDirecto / factor), techoFinalBanco);
        } else {
            const vVenta = vVentaPesos / factor;
            const antIngresado = anticipoPesos / factor;
            
            montoFin = Math.min((vVenta - antIngresado), techoFinalBanco);
            let antMinimoReal = (vVenta - techoFinalBanco) * factor;

            if (anticipoPesos < (antMinimoReal - 100)) {
                filaClase = "fila-error-anticipo"; 
                advertenciaTexto = `<br><small style="color:red">Anticipo bajo</small>`;
            }
        }
        
        const base = financiacionActual.baseCalculo || 1000;
        let cuota = (montoFin / base) * p.c;
        const gPct = p.g || financiacionActual.gastos || 0;

        if (montoFin > 0) {
            html += `
                <tr class="${filaClase}">
                    <td><strong>${p.m} m</strong>${advertenciaTexto}</td>
                    <td style="font-weight:900; color:#343a40;">${moneda}${Math.round(cuota).toLocaleString('es-AR')}</td>
                    <td>${moneda}${Math.round(montoFin).toLocaleString('es-AR')}</td>
                    <td>$${Math.round(montoFin * factor * gPct / 100).toLocaleString('es-AR')}</td>
                </tr>`;
        }
    });

    html += `</tbody></table>`;
    document.getElementById('resultado-cuotas').innerHTML = html;
}

/* ==========================================================================
   5. COMPARADOR Y UTILIDADES
   ========================================================================== */

function vincularEventosCalculo() {
    const inputsBloque1 = ['precio-lista', 'precio', 'anticipo'];
    const inputBloque2 = 'monto-directo'; // Esta es la variable correcta
    const inputDolar = 'cotizacion-dolar';

    // Eventos para Bloque 1 (Cálculo por Precios)
    inputsBloque1.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.oninput = (e) => {
                formatCurrencyInput(e.target);
                document.getElementById('monto-directo').value = ""; 
                calcularSimulacion();
            };
        }
    });

    // Evento para Bloque 2 (Monto Directo)
    const elDirecto = document.getElementById(inputBloque2);
    if (elDirecto) {
        elDirecto.oninput = (e) => {
            formatCurrencyInput(e.target);
            inputsBloque1.forEach(id => {
                const inputLimpio = document.getElementById(id);
                if (inputLimpio) inputLimpio.value = "";
            });
            calcularSimulacion();
        };
    }

    const elDolar = document.getElementById(inputDolar);
    if (elDolar) elDolar.oninput = () => calcularSimulacion();
}

function irAComparador() {
    mostrarSeccion('vista-comparador');
    poblarSelectoresBanco(1);
    poblarSelectoresBanco(2);

    const inputMontoMaster = document.getElementById('comp-monto');
    if (inputMontoMaster) {
        inputMontoMaster.oninput = (e) => {
            formatCurrencyInput(e.target); 
            calcularComparacion(); 
        };
    }
    window.scrollTo(0, 0);
}

function poblarSelectoresBanco(col) {
    const selectBanco = document.getElementById(`select-banco-${col}`);
    if (!selectBanco) return;
    let options = `<option value="">-- Seleccionar Banco --</option>`;
    for (let key in bancos) { 
        options += `<option value="${key}">${bancos[key].nombre}</option>`; 
    }
    selectBanco.innerHTML = options;
}

function actualizarCategoriasComp(col) {
    const bancoKey = document.getElementById(`select-banco-${col}`).value;
    const selectCat = document.getElementById(`select-cat-${col}`);
    if (!bancoKey || !selectCat) return;
    let options = `<option value="">-- Categoría --</option>`;
    for (let key in bancos[bancoKey].categorias) { 
        options += `<option value="${key}">${bancos[bancoKey].categorias[key].nombre}</option>`; 
    }
    selectCat.innerHTML = options;
    document.getElementById(`res-${col}`).innerHTML = "";
}

function actualizarPlanesComp(col) {
    const bancoKey = document.getElementById(`select-banco-${col}`).value;
    const catKey = document.getElementById(`select-cat-${col}`).value;
    const selectPlan = document.getElementById(`select-plan-${col}`);
    if (!bancoKey || !catKey || !selectPlan) return;
    let options = `<option value="">-- Plan --</option>`;
    bancos[bancoKey].categorias[catKey].planes.forEach((plan, index) => { 
        options += `<option value="${index}">${plan.nombre}</option>`; 
    });
    selectPlan.innerHTML = options;
    calcularComparacion(); 
}

function calcularComparacion() {
    const input = document.getElementById('comp-monto');
    if (!input) return;
    const montoRaw = input.value.replace(/\D/g, '');
    const monto = parseFloat(montoRaw) || 0;
    renderizarResultadoCol(1, monto);
    renderizarResultadoCol(2, monto);
}

function renderizarResultadoCol(col, monto) {
    const bK = document.getElementById(`select-banco-${col}`).value;
    const cK = document.getElementById(`select-cat-${col}`).value;
    const pI = document.getElementById(`select-plan-${col}`).value;
    const resDiv = document.getElementById(`res-${col}`);
    
    if (!bK || !cK || pI === "" || !resDiv) {
        if (resDiv) resDiv.innerHTML = "";
        return;
    }

    const plan = bancos[bK].categorias[cK].planes[pI];
    const base = plan.baseCalculo || 1000;
    const tieneMonto = monto > 0;

    let html = `
        <div class="mini-ficha-tecnica">
            <table class="tabla-info-comp">
                <thead>
                    <tr>
                        <th>PLAZO</th>
                        ${tieneMonto ? '<th>CUOTA</th>' : ''}
                        <th>TNA</th>
                        <th>LTV</th>
                        <th>GASTOS</th>
                    </tr>
                </thead>
                <tbody>`;

    plan.plazos.forEach(p => {
        const tnaFila = p.tna || plan.tna || "---";
        const gasPct = p.g !== undefined ? p.g : (plan.gastos || 0);
        
        // --- MODIFICACIÓN UNIFICACIÓN LTV EN COMPARADOR ---
        let ltvRaw = p.ltv || plan.ltv || "---";
        let ltvFila = ltvRaw;

        if (typeof ltvRaw === 'number') {
            ltvFila = (ltvRaw <= 100) ? ltvRaw + "%" : "Máx $" + (ltvRaw / 1000000) + "M";
        }

        let cuotaHtml = "";
        let gastosCeldaHtml = `<td>${gasPct}%</td>`; 

        if (tieneMonto) {
            const valorCuota = (monto / base) * p.c;
            cuotaHtml = `<td class="cuota-resaltada-comp">$${Math.round(valorCuota).toLocaleString('es-AR')}</td>`;
            const valorGastos = (monto * gasPct) / 100;
            gastosCeldaHtml = `
                <td>
                    <div style="font-weight:700;">$${Math.round(valorGastos).toLocaleString('es-AR')}</div>
                    <div style="font-size:0.8em; color:#888;">(${gasPct}%)</div>
                </td>`;
        }

        html += `
            <tr>
                <td><strong>${p.m} m</strong></td>
                ${cuotaHtml}
                <td>${tnaFila}</td>
                <td>${ltvFila}</td>
                ${gastosCeldaHtml}
            </tr>`;
    });

    html += `</tbody></table></div>`;
    resDiv.innerHTML = html;
}

function formatCurrencyInput(input) {
    let value = input.value.replace(/\D/g, "");
    if (value === "") {
        input.value = "";
        return;
    }
    input.value = new Intl.NumberFormat('es-AR').format(value);
}

function toggleNovedades() {
    const panel = document.getElementById('panel-lateral');
    if (panel) {
        panel.classList.toggle('hidden');
    }
}

/* Descargar PDF */

//
function descargarPDF() {
    const elemento = document.getElementById('vista-calculo');
    const botonPdf = document.getElementById('btn-generar-pdf');
    
    // Opciones para corregir el encuadre y el desplazamiento
    const opciones = {
        margin: [10, 5, 10, 5], // Margen: superior, izquierdo, inferior, derecho
        filename: `Cotizacion-Dietrich-${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            logging: false, 
            letterRendering: true,
            useCORS: true,
            scrollY: 0, // FUERZA a que empiece desde arriba del elemento
            windowHeight: elemento.scrollHeight 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Ocultamos el botón para que no salga en la foto
    botonPdf.style.display = 'none';

    // Generamos el PDF
    html2pdf().set(opciones).from(elemento).save().then(() => {
        botonPdf.style.display = 'block';
    });
}

/* - Función para obligar la descarga de la última versión */
async function forzarActualizacion() {
    // Avisamos de inmediato para que el usuario sepa que algo está pasando
    console.log("Iniciando actualización forzada...");
    
    if ('serviceWorker' in navigator) {
        try {
            // 1. Buscamos el registro y lo actualizamos
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.update();
            }
            
            // 2. Limpiamos TODOS los cachés (esto borra las fotos y archivos viejos)
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.map(name => caches.delete(name))
            );

            alert("Actualización completada. El cotizador se reiniciará.");
            // 3. Forzamos la recarga añadiendo un parámetro para engañar al navegador
            window.location.href = window.location.pathname + '?v=' + Date.now();
        } catch (err) {
            console.error("Error al actualizar:", err);
            window.location.reload();
        }
    } else {
        window.location.reload();
    }
}

/* =========================================
   LÓGICA DE INSTALACIÓN PWA
   ========================================= */

let deferredPrompt;
const btnInstalar = document.getElementById('btnInstalar');

// 1. Escuchar el evento que indica que la app se puede instalar
window.addEventListener('beforeinstallprompt', (e) => {
    // Evita que el navegador muestre su cartel por defecto
    e.preventDefault();
    // Guarda el evento para dispararlo cuando el usuario haga clic
    deferredPrompt = e;
    // Muestra nuestro botón personalizado
    if (btnInstalar) {
        btnInstalar.style.display = 'flex'; // Usamos flex para mantener el diseño del CSS
    }
});

// 2. Ejecutar la instalación al hacer clic en el botón
if (btnInstalar) {
    btnInstalar.addEventListener('click', async () => {
        if (!deferredPrompt) return;

        // Muestra el prompt de instalación oficial del navegador
        deferredPrompt.prompt();

        // Espera la respuesta del usuario
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Respuesta del usuario a la instalación: ${outcome}`);

        // Limpiamos la variable, ya no se puede usar de nuevo el mismo evento
        deferredPrompt = null;

        // Escondemos el botón
        btnInstalar.style.display = 'none';
    });
}

// 3. Opcional: Esconder el botón si la app ya fue instalada
window.addEventListener('appinstalled', (evt) => {
    console.log('¡App Dietrich instalada con éxito!');
    if (btnInstalar) btnInstalar.style.display = 'none';
});



/* =========================================
   OPCIONES NO PRENDARIAS
   ========================================= */

function mostrarSeccionNoPrendaria() {
    origenNavegacion = 'inicio'; // Para que el botón volver sepa a dónde regresar
    mostrarSeccion('vista-no-prendaria');
    
    const cont = document.getElementById('lista-opciones-no-prendarias');
    cont.innerHTML = ""; // Limpiamos el contenedor

    // Creamos el botón de BNA dinámicamente
    const btnBna = document.createElement('div');
    btnBna.className = 'card-banco bna';
    btnBna.innerHTML = `<span class="nombre-banco">BANCO NACIÓN</span>`;
    
    // Al hacer clic, iremos al siguiente nivel (BNA + Autos / BNA Conecta)
    btnBna.onclick = () => mostrarSubOpcionesBNA();
    
    cont.appendChild(btnBna);
}

function mostrarSubOpcionesBNA() {
    const cont = document.getElementById('lista-opciones-no-prendarias');
    const titulo = document.getElementById('nombre-categoria-no-prendaria');
    
    // Cambiamos el título para dar contexto al usuario
    titulo.innerText = "BNA - Seleccione Producto";
    
    // Limpiamos el botón anterior y generamos los nuevos
    cont.innerHTML = `
        <div class="card-banco" onclick="verDetalleBNA('autos')">
            <span class="nombre-banco">BNA + AUTOS</span>
        </div>
        <div class="card-banco" onclick="verDetalleBNA('conecta')">
            <span class="nombre-banco">BNA CONECTA</span>
        </div>
    `;
}

function verDetalleBNA(tipo) {
    const cont = document.getElementById('lista-opciones-no-prendarias');
    const titulo = document.getElementById('nombre-categoria-no-prendaria');

    // Configuración de contenidos por producto
    const infoProductos = {
        'autos': {
            nombre: "BNA + AUTOS",
            descripcion: "Línea de créditos personales para la adquisición de unidades 0km. El cliente gestiona el crédito en la sucursal y el desembolso se realiza mediante orden de pago.",
            pdf: "manual_bna_autos.pdf",
            wa: "5492804006499"
        },
        'conecta': {
            nombre: "BNA CONECTA",
            descripcion: "Plataforma digital de BNA para la compra de unidades. Proceso 100% online donde el cliente elige Dietrich dentro del marketplace y califica de forma inmediata.",
            pdf: "manual_bna_conecta.pdf",
            wa: "5492804006499"
        }
    };

    const info = infoProductos[tipo];
    titulo.innerText = info.nombre;

    cont.innerHTML = `
        <div class="formulario-card" style="grid-column: 1 / span 2; text-align: center; padding: 30px;">
            <!-- EXPLICACIÓN COMERCIAL DINÁMICA -->
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #005a9c;">
                <p style="color: #333; font-size: 0.95em; line-height: 1.5; text-align: left; margin: 0;">
                    <strong>¿Cómo funciona?</strong><br>
                    ${info.descripcion}
                </p>
            </div>

            <p style="margin-bottom: 20px; color: #666; font-size: 0.85em;">
                Este proceso se gestiona de forma externa al cotizador.
            </p>

            <div style="display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: 0 auto;">
                <a href="https://wa.me/${info.wa}" target="_blank" class="btn-whatsapp" style="text-decoration: none; justify-content: center; width: 100%;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" style="width:20px;">
                    CONSULTAR REFERENTE
                </a>
            </div>

            <button onclick="mostrarSubOpcionesBNA()" class="btn-ver-mas-opciones" style="margin-top: 30px; border-style: solid; width: auto; padding: 10px 20px;">
                ← VOLVER A PRODUCTOS BNA
            </button>
        </div>
    `;
}

// Detectar si es iOS y mostrar instrucciones manuales
const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const estaEnNavegador = !window.navigator.standalone; // Detecta si NO está instalado ya

if (esIOS && estaEnNavegador) {
    // Mostramos el mensaje de iOS después de 3 segundos para no asustar al usuario
    setTimeout(() => {
        document.getElementById('ios-install-prompt').classList.remove('hidden');
    }, 3000);
}

function cerrarPromptIOS() {
    document.getElementById('ios-install-prompt').classList.add('hidden');
}