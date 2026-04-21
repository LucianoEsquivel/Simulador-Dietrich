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
        nombre: "Santander Río",
        categorias: {
            general: {
                nombre: "Santander Río General",
                planes: [
                    { 
                        nombre: "Especial Pickups UVA", 
                        tna: "12,90%", 
                        cft: "16,78%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Financiacion exclusiva para pickups (Ranger, Maverick, Amarok)",
                        plazos: [{m:12, c:90517}, {m:18, c:62628}, {m:24, c:48719}, {m:36, c:34878}, {m:48, c:28026}, {m:60, c:23969}, {m:72, c:21309}] 
                    },
                    { 
                        nombre: "Línea UVA", 
                        tna: "19,90%", 
                        cft: "26,92%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Aplica para toda la gama",
                        plazos: [{m:12, c:94530}, {m:18, c:66639}, {m:24, c:52775}, {m:36, c:39073}, {m:48, c:32381}, {m:60, c:28490}] 
                    },
                    { 
                        nombre: "Línea UVA con Quebranto", 
                        ltv: 80, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Tasa preferencial con esquema de quebranto bonificado.",
                        plazos: [
                            { m: 12, c: 83334, tna: "0%", cft: "0%", g: 14, info: "TNA 0%" }, 
                            { m: 18, c: 60947, tna: "9,90%", cft: "12,66%", g: 11, info: "TNA 9,9%" }, 
                            { m: 24, c: 47030, tna: "9,90%", cft: "12,66%", g: 15, info: "TNA 9,9%" }
                        ] 
                    },
                    { 
                        nombre: "UVA Quebranto Pickups (TNA 0%)", 
                        tna: "0,00%", 
                        cft: "0,00%", 
                        ltv: 80, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Tasa 0% exclusiva para Pickups con gastos de otorgamiento diferenciales.",
                        plazos: [{m:12, c:83334, g:10}, {m:18, c:55556, g:12}, {m:24, c:41667, g:15}] 
                    },
                    { 
                        nombre: "UVA Quebranto Pickups (TNA 9,9%)", 
                        tna: "9,90%", 
                        cft: "12,66%", 
                        ltv: 80, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea Pickups con tasa fija promocional y ajuste UVA.",
                        plazos: [{m:12, c:88822, g:7.1}, {m:18, c:60947, g:9.3}, {m:24, c:47030, g:11.3}] 
                    },
                    { 
                        nombre: "Línea Fija con Quebranto", 
                        ltv: 80, 
                        gastos: 12, 
                        seguro: "Cautivo", 
                        baseCalculo: 1000000, 
                        descripcion: "Cuotas fijas en pesos durante todo el plan.",
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
                        tna: "47,90%", 
                        cft: "76,13%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea tradicional en pesos con tasa fija.",
                        plazos: [{m:12, c:111366}, {m:18, c:83851}, {m:24, c:70542}, {m:36, c:58086}, {m:48, c:52364}, {m:60, c:49900}] 
                    },
                    { 
                        nombre: "Tasa Fija Eléctricos", 
                        tna: "41,90%", 
                        cft: "64,31%", 
                        ltv: 80, 
                        gastos: 2, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Beneficio exclusivo para movilidad sustentable (Vehículos Eléctricos/Híbridos).",
                        plazos: [{m:12, c:107654}, {m:18, c:80008}, {m:24, c:66534}, {m:36, c:53729}, {m:48, c:47949}, {m:60, c:44926}] 
                    },
                    { 
                        nombre: "Tasa UVA Eléctricos", 
                        tna: "21,00%", 
                        cft: "28,59%", 
                        ltv: 80, 
                        gastos: 6, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Financiación UVA exclusiva para unidades de movilidad eléctrica.",
                        plazos: [{m:12, c:95168}, {m:18, c:67280}, {m:24, c:53427}, {m:36, c:39753}, {m:48, c:33093}, {m:60, c:29235}] 
                    }
                ]
            },
            byd: {
                nombre: "Santander Río ByD",
                planes: [
                    { 
                        nombre: "Línea UVA ByD (TNA 0%)", 
                        tna: "0%", cft: "0%", ltv: 80, seguro: "Cautivo", baseCalculo: 1000000, 
                        descripcion: "Financiacion exclusiva para unidades BYD con tasa 0%",
                        plazos: [{ m: 12, c: 83334, g: 12 }, { m: 18, c: 55556, g: 15 }, { m: 24, c: 41667, g: 19 }] 
                    },
                    { 
                        nombre: "Línea UVA ByD (TNA 9,9%)", 
                        tna: "9,90%", cft: "12,66%", ltv: 80, seguro: "Cautivo", baseCalculo: 1000000, 
                        descripcion: "Tasa fija promocional BYD con ajuste UVA.",
                        plazos: [{ m: 12, c: 88822, g: 5 }, { m: 18, c: 60947, g: 6 }, { m: 24, c: 47030, g: 7 }] 
                    },
                    { 
                        nombre: "Línea UVA 19,90%", 
                        tna: "14,90%", cft: "19,60%", ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 100000, 
                        descripcion: "Esquema UVA competitivo para toda la gama BYD.",
                        plazos: [{ m: 12, c: 91655 }, { m: 18, c: 63762 }, { m: 24, c: 49861 }, { m: 36, c: 36052 }, { m: 48, c: 29239 }, { m: 60, c: 25222 }] 
                    },
                    { 
                        nombre: "Línea Tradicional ByD", 
                        tna: "38,90%", cft: "58,68%", ltv: 80, gastos: 6, seguro: "Cautivo", baseCalculo: 100000, 
                        descripcion: "Crédito prendario tradicional a tasa fija para unidades BYD.",
                        plazos: [{ m: 12, c: 105819 }, { m: 18, c: 78118 }, { m: 24, c: 64570 }, { m: 36, c: 51606 }, { m: 48, c: 45672 }, { m: 60, c: 42509 }] 
                    }
                ]
            },
            kia: {
                nombre: "Santander Río KIA",
                planes: [
                    { 
                        nombre: "Seltos", 
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Financiación especial para KIA Seltos con Tasa 0%.",
                        plazos: [{ m: 12, c: 83.33, g: 12, ltv: 24000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 16.5, ltv: 17000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "K3", 
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Plan de ahorro y crédito para KIA K3 con Tasa bonificada.",
                        plazos: [{ m: 12, c: 83.33, g: 12, ltv: 20000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 16.5, ltv: 14000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "K2500", 
                        tna: "0%", cft: "-", seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Línea comercial para KIA K2500 con beneficios de tasa.",
                        plazos: [{ m: 12, c: 83.33, g: 12, ltv: 24000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 14.5, ltv: 16000000, info: "TNA 0%" }] 
                    }
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
                        ltv: 30000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Esta tasa aplica solo para: Everest Titanium, la cuota incluye capita, intereses e IVA",
                        plazos: [{ m: 18, tna: "0%", cft: "0%", ltv: 30000000, c: 55.56, g: 17 }, { m: 24, tna: "14,90%", cft: "19,60%", ltv: 30000000, c: 49.86, g: 17 }] 
                    },
                    { 
                        nombre: "Maverick", 
                        ltv: 15000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Esta tasa aplica para: Maverick HEV, Tremor y XLT, la cuota incluye capita, intereses e IVA",
                        plazos: [{ m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 15000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Territory", 
                        ltv: 15000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tasa 0% para Ford Territory. Sujeto a disponibilidad de stock.",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 15000000, info: "TNA 0%" }, { m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 15000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "Territory Titanium", 
                        ltv: 25000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Línea exclusiva para Territory Titanium.",
                        plazos: [{ m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 25000000, info: "TNA 0%" }] 
                    },                   
                    { 
                        nombre: "Especial Ranger XL", 
                        ltv: 18000000, gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Promoción especial para Ranger XL",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 18000000, info: "TNA 0% (Promo XL)" }] 
                    },

                    { 
                        nombre: "Especial Ranger Cabina simple", 
                        ltv: 25000000, gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Esta tasa aplica solo para: Ranger XL 2.0L Diesel Chasis 4x4 MT, XL 2.0L Diesel Cabina Simple 4x2 MT y XL 2.0L Diesel Cabina Simple 4x4 MT, la cuota incluye capita, intereses e IVA",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 25000000, info: "TNA 0% (Promo Cabina simple)" }] 
                    },
                    { 
                        nombre: "Especial UVA Ranger", 
                        ltv: 60, gastos: 17, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Plan UVA Ranger: Hasta 60% del valor de la unidad.",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0%" }, { m: 36, c: 33.21, tna: "10,00%", cft: "12,79%", ltv: 60, info: "TNA 10,00%" }] 
                    },
                    { 
                        nombre: "Tasa Especial Ranger (19,9% / 23,9% / 29,9%)", 
                        ltv: 60, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Esquema de tasas escalonadas según LTV y plazos para Ranger.",
                        plazos: [{ m: 12, c: 94.53, tna: "19,90%", cft: "26,92%", g: 6, ltv: 25, info: "LTV hasta 25%" }, { m: 12, c: 94.53, tna: "19,90%", cft: "26,92%", g: 17, ltv: 60, info: "LTV 26% al 60%" }, { m: 24, c: 55.16, tna: "23,90%", cft: "33,08%", g: 6, ltv: 25, info: "LTV hasta 25%" }, { m: 24, c: 55.16, tna: "23,90%", cft: "33,08%", g: 17, ltv: 60, info: "LTV 26% al 60%" }, { m: 36, c: 45.47, tna: "29,90%", cft: "42,82%", g: 17, ltv: 60, info: "Gasto fijo 17%" }] 
                    },
                    { 
                        nombre: "Tasa Especial Ranger (TNA 0% / 26,9%)", 
                        ltv: 25000000, gastos: 17, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Línea combinada Tasa 0% y Tasa Fija para Ranger.",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 25000000, info: "TNA 0%" }, { m: 18, c: 55.56, tna: "0%", cft: "0%", ltv: 25000000, info: "TNA 0%" }, { m: 24, c: 56.99, tna: "26,90%", cft: "37,87%", ltv: 25000000, info: "TNA 26,90%" }] 
                    },
                    { 
                        nombre: "Plan Cosecha (Cuotas Semestrales)", 
                        ltv: 60, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Plan Cosecha: Pensado para el agro con pagos cada 6 meses.",
                        plazos: [{ m: 12, c: 686.52, tna: "39,90%", cft: "54,11%", g: 6, ltv: 25, info: "2 Cuotas - LTV hasta 25%" }, { m: 12, c: 686.52, tna: "39,90%", cft: "54,11%", g: 17, ltv: 60, info: "2 Cuotas - LTV 26% al 60%" }, { m: 24, c: 441.28, tna: "45,90%", cft: "63,25%", g: 6, ltv: 25, info: "4 Cuotas - LTV hasta 25%" }, { m: 24, c: 441.28, tna: "45,90%", cft: "63,25%", g: 17, ltv: 60, info: "4 Cuotas - LTV 26% al 60%" }] 
                    },
                    { 
                        nombre: "Especial Transit 24/36", 
                        gastos: 17, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Financiación para Transit con seguro liberado y tasas competitivas.",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0%" }, { m: 36, c: 33.21, tna: "10,00", cft: "12,79%", ltv: 60, info: "TNA 12,79%" }] 
                    },
                    { 
                        nombre: "Transit UVA", 
                        ltv: 60, gastos: 17, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea UVA para Transit. Sujeto a condiciones de Banco ICBC.",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0% (UVA)" }, { m: 36, c: 33.21, tna: "10,00%", cft: "12,79%", ltv: 60, info: "TNA 10,00% (UVA)" }] 
                    },
                    { 
                        nombre: "Transit Especial", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Seguro liberado para Transit. aplica para todos los modelos de Transit, excepto E-Transit.",
                        plazos: [{ m: 12, c: 86.90, tna: "9,90%", cft: "12,66%", ltv: 60, info: "LTV Máx 60%" }, { m: 24, c: 52.77, tna: "19,90%", cft: "26,96%", ltv: 60, info: "LTV Máx 60%" }, { m: 36, c: 56.62, tna: "45,90%", cft: "72,10%", ltv: 50, info: "LTV Máx 50%" }, { m: 48, c: 52.63, tna: "47,90%", cft: "76,13%", ltv: 50, info: "LTV Máx 50%" }] 
                    }
                    
                ]
            },
            comercial: {
                nombre: "ICBC Comercial",
                planes: [
                    { 
                        nombre: "Ranger XL seg. liberado", 
                        ltv: 18000000, gastos: 2, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Esta tasa aplica para: Ranger XL 4x2, 4x4 y Chasis, seguro de vida 0,20% sobre saldo, seguro liberado",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", ltv: 18000000, info: "TNA 0%" }] 
                    },

                    { 
                        nombre: "Ranger XL C/S", 
                        ltv: 25000000, gastos: 2, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Esta tasa aplica para: Ranger XL 4x2, 4x4 y Chasis, seguro de vida 0,20% sobre saldo, seguro liberado",
                        plazos: [{ m: 24, c: 42.00, tna: "0%", cft: "0%", ltv: 25000000, info: "TNA 0%" }] 
                    },

                    { 
                        nombre: "Especial Ranger Semestral", 
                        ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea comercial para Ranger con esquema de pagos semestrales.",
                        plazos: [{ m: 12, c: 686.52, tna: "39,90%", cft: "54,11%", ltv: 50, info: "2 Cuotas Semestrales" }, { m: 24, c: 459.41, tna: "49,90%", cft: "69,49%", ltv: 50, info: "4 Cuotas Semestrales" }] 
                    },
                    { 
                        nombre: "Comercial Ranger XL/XLS (cautivo)", 
                        gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación para Ranger XL/XLS con seguro cautivo del banco.",
                        plazos: [{ m: 12, c: 90.93, tna: "14,90%", cft: "17,77%", ltv: 40, info: "max 40%" }, { m: 24, c: 63.18, tna: "39,90%", cft: "54,19", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 54.12, tna: "45,90%", cft: "64,34%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 48.43, tna: "45,90%", cft: "64,34%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "Comercial Ranger XL/XLS (liberado)", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Financiación comercial para Ranger con seguro liberado.",
                        plazos: [{ m: 12, c: 91.98, tna: "16,90%", cft: "20,36%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 64.38, tna: "41,90%", cft: "57,50%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 55.46, tna: "47,90%", cft: "67,86%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 49.87, tna: "47,90%", cft: "67,86%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    
                    { 
                        nombre: "Especial Transit (cautivo)", 
                        gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Línea Transit canal comercial con seguro del banco.",
                        plazos: [{ m: 12, c: 87.32, tna: "7,90%", cft: "9,09%", ltv: 60, info: "LTV Máx 60%" }, { m: 24, c: 50.74, tna: "17,90%", cft: "21,67%", ltv: 60, info: "LTV Máx 60%" }, { m: 36, c: 54.12, tna: "45,90%", cft: "64,34%", ltv: 50, info: "LTV Máx 50%" }, { m: 48, c: 48.43, tna: "45,90%", cft: "64,34%", ltv: 50, info: "LTV Máx 50%" }] 
                    },
                    { 
                        nombre: "Especial Transit (liberado)", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea Transit canal comercial con seguro a elección.",
                        plazos: [{ m: 12, c: 88.35, tna: "9.90%", cft: "11.51%", ltv: 60, info: "LTV Máx 60%" }, { m: 24, c: 51.81, tna: "19,90%", cft: "24,35%", ltv: 60, info: "LTV Máx 60%" }, { m: 36, c: 55.46, tna: "47,90%", cft: "67,86%", ltv: 50, info: "LTV Máx 50%" }, { m: 48, c: 49.87, tna: "47,90%", cft: "67,86%", ltv: 50, info: "LTV Máx 50%" }] 
                    },
                    { 
                        nombre: "Generales Canal Comercial (cautivo)", 
                        tna: "47,90%", ltv: 75, gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Créditos generales para empresas con seguro cautivo.",
                        plazos: [{ m: 12, c: 110.09, cft: "71,96%" }, { m: 24, c: 69.23, cft: "71,94%" }, { m: 36, c: 56.71, cft: "71.93%" }, { m: 48, c: 51.19, cft: "71,91%" }] 
                    },
                    { 
                        nombre: "Generales Canal Comercial (liberado)", 
                        tna: "50,90%", ltv: 75, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Créditos generales para empresas con seguro liberado.",
                        plazos: [{ m: 12, c: 111.81, cft: "77,49%" }, { m: 24, c: 71.11, cft: "77,47%" }, { m: 36, c: 58.76, cft: "77,45%" }, { m: 48, c: 53.40, cft: "77,44%" }] 
                    },
                    { 
                        nombre: "Mi Pyme - Ranger", 
                        gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Línea Mi Pyme exclusiva para unidades Ford Ranger, excepto Raptor",
                        plazos: [{ m: 24, c: 58.76, tna: "30,80%", cft: "38,25%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 50.05, tna: "37,80%", cft: "48,56%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 44.02, tna: "37,80%", cft: "48,55%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "Mi Pyme - Transit", 
                        gastos: 6, seguro: "Cautivo", baseCalculo: 1000, 
                        descripcion: "Línea Mi Pyme para unidades Ford Transit, excepto E-Transit.",
                        plazos: [{ m: 24, c: 58.76, tna: "30,80%", cft: "38,25%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 50.05, tna: "37,80%", cft: "48,56%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 44.02, tna: "37,80%", cft: "48,55%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "Especial UVA Transit", 
                        tna: "19,00%", cft: "25,57%", ltv: 60, gastos: 6, seguro: "LIBERADO", esUVA: true, valorUVA: 1706.43, baseCalculo: 1000, 
                        descripcion: "Financiación UVA canal comercial para Transit.",
                        plazos: [{ m: 24, c: 52.24 }, { m: 36, c: 38.52 }] 
                    },
                    { 
                        nombre: "General UVA Ranger", 
                        tna: "26,90%", cft: "37,87%", ltv: 60, gastos: 6, seguro: "LIBERADO", esUVA: true, valorUVA: 1706.43, baseCalculo: 1000, 
                        descripcion: "Plan UVA Ranger comercial. Plazos hasta 60 meses.",
                        plazos: [{ m: 12, c: 98.62 }, { m: 24, c: 56.99 }, { m: 36, c: 43.50 }, { m: 48, c: 37.04 }, { m: 60, c: 33.38 }] 
                    },
                    { 
                        nombre: "Ranger USD 12/24", 
                        moneda: "USD", ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Crédito prendario en dólares para Ford Ranger.",
                        plazos: [{ m: 12, c: 83.50, tna: "0,00%", cft: "2,41%", info: "TNA 0% USD" }, { m: 24, c: 44.91, tna: "4,50%", cft: "7,38%", info: "TNA 4,5% USD" }] 
                    },
                    { 
                        nombre: "Ranger USD", 
                        moneda: "USD", tna: "11,00%", cft: "14,56%", ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Crédito en dólares para Ranger. Tasa fija 11%.",
                        plazos: [{ m: 12, c: 90.10 }, { m: 24, c: 48.20 }, { m: 36, c: 34.34 }] 
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
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tasa 0% para Amarok, seguro cautivo de VW Broker, disponible para persona juridica, fisica y venta directa, disponible de 17/04/2026 hasta el 30/04/2026",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   g: 15.915,   ltv: 44000000 },
                            { m: 18, c: 55.56, tna: "0%",   g: 16.52, ltv: 28000000 },
                            { m: 24, c: 41.67, tna: "0%",   g: 15.31, ltv: 20000000 },
                        ] 
                    },
                    { 
                        nombre: "Amarok sin quebranto", 
                        tna: "0%", gastos: 2, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tasa 0% para Amarok, seguro cautivo de VW Broker, disponible para persona juridica, fisica y venta directa, disponible de 17/04/2026 hasta el 30/04/2026",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", ltv: 21500000, g: 2 }] 
                    },
                    { 
                        nombre: "UVA Amarok (24)", 
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación UVA para Amarok con tasa 0% durante los primeros 24 meses.",
                        plazos: [
                            { m: 24, c: 41.67, tna: "0%", g: 2, ltv: 21500000 },
                        ] 
                    },
                    { 
                        nombre: "Autos financia mas", 
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación bonificada para Volkswagen, excepto Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",    g: 11.075, ltv: 32000000 },
                            { m: 18, c: 55.56, tna: "0%",    g: 15.31, ltv: 25500000 },
                            { m: 24, c: 41.67, tna: "0%",    g: 17.73, ltv: 21000000 }
                        ] 
                    },

                    { 
                        nombre: "Autos sin quebranto", 
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiacion exclusiva para Tera Highline y Outfit, T-Cross, Highline y Extreme, Polo Comfortline y Highline y Taos (todas las versioens), seguro cautivo de VW Broker, disponible para persona juridica, fisica y venta directa, disponible de 17/04/2026 hasta el 30/04/2026",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   g: 2,   ltv: 21000000 },
                        ] 
                    },

                    { 
                        nombre: "UVA Autos", 
                        tna: "0%", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiacion exclusiva para Tera Highline y Outfit, T-Cross, Highline y Extreme, Polo Comfortline y Highline y Taos (todas las versioens), seguro cautivo de VW Broker, disponible para persona juridica, fisica y venta directa, disponible de 17/04/2026 hasta el 30/04/2026",
                        plazos: [
                            { m: 24, c: 41.67, tna: "0%",   g: 2,   ltv: 21000000 },
                        ] 
                    },

                    { 
                        nombre: "Especial Amarok", 
                        tna: "varios", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación exclusiva para Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",    g: 16.52, ltv: 27000000 },
                            { m: 18, c: 55.56, tna: "0%",    g: 16.52, ltv: 17000000 },
                            { m: 24, c: 52.77, tna: "19,90%", g: 14.705, ltv: 24000000 }
                        ] 
                    },

                    { 
                        nombre: "Especial Autos", 
                        tna: "varios",  seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación exclusiva para Volkswagen, excepto Amarok",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",    g: 14.705, ltv: 25000000 },
                            { m: 18, c: 55.56, tna: "0%",    g: 16.52, ltv: 17000000 },
                            { m: 24, c: 47.03, tna: "9,90%",    g: 16.52, ltv: 17000000 }
                        ] 
                    },

                    { 
                        nombre: "Usados Tasa Fija", 
                        tna: "Varios", ltv: 50, gastos: 14.10, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Créditos para vehículos usados a tasa fija en pesos.",
                        plazos: [
                            { m: 12, c: 99.81, tna: "28,90%", g: 14.10, ltv: 50 },
                            { m: 18, c: 75.63, tna: "34,90%", g: 14.10, ltv: 50 },
                            { m: 24, c: 63.92, tna: "37,90%", g: 14.10, ltv: 50 },
                            { m: 36, c: 52.73, tna: "40,50%", g: 14.10, ltv: 50 }
                        ] 
                    },
                    { 
                        nombre: "Usados UVAs", 
                        tna: "Varios", ltv: 50, gastos: 14.10, seguro: "CAUTIVO", baseCalculo: 1000, esUVA: true, 
                        descripcion: "Financiación UVA para unidades usadas de la marca.",
                        plazos: [
                            { m: 12, c: 87.48, tna: "7,50%",  g: 14.10, ltv: 50 },
                            { m: 18, c: 62.63, tna: "12,90%", g: 14.10, ltv: 50 },
                            { m: 24, c: 50.21, tna: "15,50%", g: 14.10, ltv: 50 },
                            { m: 36, c: 37.61, tna: "17,50%", g: 14.10, ltv: 50 }
                        ] 
                    }
                ]
            },
            audi: {
                nombre: "Audi",
                planes: [
                    { 
                        nombre: "Audi A1", 
                        tna: "0% / 9,9%", seguro: "CAUTIVO", gastos: 19.5, baseCalculo: 1000, 
                        descripcion: "Línea exclusiva para Audi A1. Tasa bonificada.",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   ltv: 20000000, g: 13.495 }, 
                            { m: 12, c: 88.82, tna: "9.9%", ltv: 30500000, g: 13.495 }
                        ] 
                    },

                    { 
                        nombre: "UVA Audi", 
                        tna: "0%", seguro: "CAUTIVO", gastos: 2, baseCalculo: 1000, 
                        descripcion: "Línea exclusiva para Audi A1. Tasa bonificada.",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   ltv: 20000000, g: 2 }, 
                        ] 
                    }
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
                        tna: "71,00%", cft: "129,27%", ltv: 57000000, ltv: 80, gastos: 6, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Galicia tasa fija. LTV hasta 80%.",
                        plazos: [{ m: 12, c: 141.53 }, { m: 24, c: 94.25 }, { m: 36, c: 80.72 }, { m: 48, c: 75.30 }, { m: 60, c: 72.84 }] 
                    },
                    { 
                        nombre: "Prendario UVA 0km", 
                        tna: "UVA + 37%", cft: "36,30%", ltv: 57000000, ltv: 80, gastos: 6, valorUVA: 1706.43, baseCalculo: 1000, esUVA: true, 
                        descripcion: "Línea UVA Banco Galicia para unidades 0km.",
                        plazos: [{ m: 12, c: 70.52 }, { m: 24, c: 41.61 }, { m: 36, c: 32.39 }, { m: 48, c: 28.07 }, { m: 60, c: 25.69 }] 
                    }
                ]
            }
        }
    }
};
/* ==========================================================================
   2. CONFIGURACIÓN Y NAVEGACIÓN
   ========================================================================== */
let bancoActual = null;
let financiacionActual = null;
let origenNavegacion = 'inicio'; 
let vistaActual = 'vista-inicio'; // Nueva variable para seguimiento

const marcasConfig = {
    ford: { 
        nombre: "Ford", 
        bancos: ["santander-general", "icbc-minorista", "icbc-comercial", "galicia-prendarios"] 
    },
    vw: { 
        nombre: "Volkswagen", 
        bancos: ["vw_financial-volkswagen", "santander-general", "galicia-prendarios"] 
    },
    byd: { 
        nombre: "BYD", 
        directo: { banco: 'santander', cat: 'byd' } 
    },
    kia: { 
        nombre: "KIA", 
        bancos: ["santander-general", "santander-kia", "galicia-prendarios"] 
    },
    audi: {
        nombre: "Audi",
        bancos: ["vw_financial-audi", "santander-general", "galicia-prendarios"]
    }
};

/* --- NUEVA LÓGICA DE NAVEGACIÓN CENTRALIZADA --- */
function mostrarSeccion(id) {
    vistaActual = id;
    document.querySelectorAll('section').forEach(s => s.classList.replace('active', 'hidden'));
    document.getElementById(id).classList.replace('hidden', 'active');

    // Control del botón Volver Fijo (Ocultar solo en el inicio)
    const nav = document.getElementById('navegacion-fija');
    if (nav) {
        if (id === 'vista-inicio') {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
    }
}

// El "cerebro" del botón VOLVER fijo
function manejadorVolver() {
    if (vistaActual === 'vista-calculo') {
        mostrarSeccion('vista-financiaciones');
    } else if (vistaActual === 'vista-financiaciones') {
        const destino = (origenNavegacion === 'marcas') ? 'vista-marcas' : 'vista-bancos';
        mostrarSeccion(destino);
    } else {
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

    if (marcaKey === 'byd') {
        const bancoByd = bancos['santander'];
        const catByd = bancoByd.categorias['byd'];
        
        mostrarSeccion('vista-financiaciones');
        document.getElementById('nombre-banco-seleccionado').innerText = "Seleccione Entidad para BYD";

        const cont = document.getElementById('lista-financiaciones');
        cont.innerHTML = ""; 

        const gridTarjetas = document.createElement('div');
        gridTarjetas.className = 'contenedor-tarjetas-subcat'; 
        cont.appendChild(gridTarjetas);

        const btnBydBridge = document.createElement('div'); 
        btnBydBridge.className = 'card-sub-categoria cat-general'; 
        btnBydBridge.innerHTML = `<span>Santander Río</span>`; 
        
        btnBydBridge.onclick = () => {
            bancoActual = bancoByd;
            bancoActual.key = 'santander';
            mostrarPlanes(catByd, 'santander');
        };
        
        gridTarjetas.appendChild(btnBydBridge);
        return;
    }

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
        btn.className = `card-sub-categoria cat-${catKey}`; 
        
        let nombreMostrar = categoria.nombre;
        if (bancoKey === 'vw_financial' && catKey === 'volkswagen') nombreMostrar = "Volkswagen";
        if (catKey === 'prendarios') nombreMostrar = "Galicia Prendario";
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
        btn.className = `card-sub-categoria cat-${key}`; 
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

    const contenedorGrid = document.createElement('div');
    contenedorGrid.className = 'grid-planes-pc'; 
    cont.appendChild(contenedorGrid);

    categoria.planes.forEach(plan => {
        const btn = document.createElement('button');
        btn.className = 'btn-banco';
        btn.innerText = plan.nombre;
        btn.onclick = () => abrirFormulario(plan);
        contenedorGrid.appendChild(btn);
    });
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

    ['precio-lista', 'precio', 'anticipo', 'monto-directo'].forEach(id => {
        document.getElementById(id).value = "";
    });

    vincularEventosCalculo();
    window.scrollTo(0, 0);
}

/* ==========================================================================
   4. MOTOR DE CÁLCULO (CORREGIDO)
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

    if (montoDirecto === 0 && vVentaPesos === 0) return;

    const esUSD = (financiacionActual.moneda === "USD");
    const factor = esUSD ? cotizacion : 1;
    const moneda = esUSD ? "USD " : "$ ";

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

        // --- LÓGICA DE LTV UNIFICADA Y SEGURA ---
        let ltvValor = p.ltv || financiacionActual.ltv || 999999999999;
        let techoFinalBanco;

        if (ltvValor <= 100) {
            // Caso Porcentaje: Si no hay precio de lista, ponemos un techo infinito para no romper el Monto Directo
            if (pListaPesos > 0) {
                const pLista = pListaPesos / factor;
                techoFinalBanco = pLista * (ltvValor / 100);
            } else {
                techoFinalBanco = 999999999999; 
            }
        } else {
            // Caso Monto Fijo
            techoFinalBanco = ltvValor / factor;
        }

        if (montoDirecto > 0) {
            // Aplicamos el techo (Si es monto fijo lo respetará, si es % y no hay precio de lista, usará el directo)
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

    // Evento para Bloque 2 (Monto Directo) - AQUÍ ESTABA EL ERROR
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
    // 1. Intentamos actualizar el registro del Service Worker
    if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let registration of registrations) {
            await registration.update();
        }
        
        // 2. Limpiamos todos los cachés guardados (fotos, css, js antiguos)
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames.map(name => caches.delete(name))
        );

        // 3. Notificamos al usuario y forzamos recarga dura (Hard Reload)
        alert("Buscando actualizaciones... El simulador se reiniciará para aplicar los cambios.");
        window.location.reload(true); 
    } else {
        // Si no hay service worker (navegador viejo), solo recargamos
        window.location.reload(true);
    }
}