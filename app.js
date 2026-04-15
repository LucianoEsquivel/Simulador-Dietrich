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
                        nombre: "(1) Especial Pickups UVA", 
                        tna: "19,90%", 
                        cft: "26,92%", 
                        ltv: 80, 
                        gastos: 6, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Esto es una testeo de las descargas 1.0.9",
                        plazos: [{m:12, c:94530}, {m:18, c:66639}, {m:24, c:52775}, {m:36, c:39073}, {m:48, c:32381}, {m:60, c:28490}, {m:72, c:25996}] 
                    },
                    { 
                        nombre: "(2) Línea UVA", 
                        tna: "26,00%", 
                        cft: "36,42%", 
                        ltv: 80, 
                        gastos: 6, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Segundo testeo en v1.0.5",
                        plazos: [{m:12, c:98091}, {m:18, c:70230}, {m:24, c:56438}, {m:36, c:42918}, {m:48, c:36423}, {m:60, c:32728}] 
                    },
                    { 
                        nombre: "(3) Línea UVA con Quebranto", 
                        ltv: 80, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Tasa preferencial con esquema de quebranto bonificado.",
                        plazos: [
                            { m: 12, c: 83334, tna: "0%", cft: "0%", g: 18, info: "TNA 0%" }, 
                            { m: 18, c: 60947, tna: "9,90%", cft: "12,66%", g: 16.5, info: "TNA 9,9%" }, 
                            { m: 24, c: 47030, tna: "9,90%", cft: "12,66%", g: 19.5, info: "TNA 9,9%" }
                        ] 
                    },
                    { 
                        nombre: "(4.a) UVA Quebranto Pickups (TNA 0%)", 
                        tna: "0,00%", 
                        cft: "0,00%", 
                        ltv: 80, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Tasa 0% exclusiva para Pickups con gastos de otorgamiento diferenciales.",
                        plazos: [{m:12, c:83334, g:12}, {m:18, c:55556, g:16.1}, {m:24, c:41667, g:20.1}] 
                    },
                    { 
                        nombre: "(4.b) UVA Quebranto Pickups (TNA 9,9%)", 
                        tna: "9,90%", 
                        cft: "12,66%", 
                        ltv: 80, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea Pickups con tasa fija promocional y ajuste UVA.",
                        plazos: [{m:12, c:88822, g:7.1}, {m:18, c:60947, g:9.3}, {m:24, c:47030, g:11.3}] 
                    },
                    { 
                        nombre: "(5) Línea Fija con Quebranto", 
                        ltv: 80, 
                        gastos: 12, 
                        seguro: "A DEFINIR", 
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
                        nombre: "(6) Tasa Fija 0km", 
                        tna: "49,50%", 
                        cft: "79,41%", 
                        ltv: 80, 
                        gastos: 6, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Línea tradicional en pesos con tasa fija.",
                        plazos: [{m:12, c:112365}, {m:18, c:84889}, {m:24, c:71629}, {m:36, c:59272}, {m:48, c:53911}, {m:60, c:51256}] 
                    },
                    { 
                        nombre: "(7) Tasa Fija Eléctricos", 
                        tna: "41,90%", 
                        cft: "64,31%", 
                        ltv: 80, 
                        gastos: 6, 
                        seguro: "A DEFINIR", 
                        baseCalculo: 1000000, 
                        descripcion: "Beneficio exclusivo para movilidad sustentable (Vehículos Eléctricos/Híbridos).",
                        plazos: [{m:12, c:107654}, {m:18, c:80008}, {m:24, c:66534}, {m:36, c:53729}, {m:48, c:47949}, {m:60, c:44926}] 
                    },
                    { 
                        nombre: "(8) Tasa UVA Eléctricos", 
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
                        nombre: "(1.a) Línea UVA ByD (TNA 0%)", 
                        tna: "0%", cft: "0%", ltv: 80, seguro: "A DEFINIR", baseCalculo: 1000000, 
                        descripcion: "Línea BYD Tasa 0% UVA. Ideal para plazos de 12 a 24 meses.",
                        plazos: [{ m: 12, c: 83334, g: 14 }, { m: 18, c: 55556, g: 18 }, { m: 24, c: 41667, g: 23 }] 
                    },
                    { 
                        nombre: "(1.b) Línea UVA ByD (TNA 9,9%)", 
                        tna: "9,90%", cft: "12,66%", ltv: 80, seguro: "A DEFINIR", baseCalculo: 1000000, 
                        descripcion: "Tasa fija promocional BYD con ajuste UVA.",
                        plazos: [{ m: 12, c: 88822, g: 10 }, { m: 18, c: 60947, g: 12 }, { m: 24, c: 47030, g: 16 }] 
                    },
                    { 
                        nombre: "(2) Línea UVA 19,90%", 
                        tna: "19,90%", cft: "36,43%", ltv: 80, gastos: 6, seguro: "A DEFINIR", baseCalculo: 100000, 
                        descripcion: "Esquema UVA competitivo para toda la gama BYD.",
                        plazos: [{ m: 12, c: 9809 }, { m: 18, c: 7023 }, { m: 24, c: 5644 }, { m: 36, c: 4292 }, { m: 48, c: 3642 }] 
                    },
                    { 
                        nombre: "(3) Línea Tradicional ByD", 
                        tna: "39,90%", cft: "79,41%", ltv: 80, gastos: 6, seguro: "A DEFINIR", baseCalculo: 100000, 
                        descripcion: "Crédito prendario tradicional a tasa fija para unidades BYD.",
                        plazos: [{ m: 12, c: 11236 }, { m: 18, c: 8849 }, { m: 24, c: 7163 }, { m: 36, c: 5927 }, { m: 48, c: 5391 }, { m: 60, c: 5126 }] 
                    }
                ]
            },
            kia: {
                nombre: "Santander Río KIA",
                planes: [
                    { 
                        nombre: "(1) Seltos", 
                        tna: "0%", cft: "-", seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Financiación especial para KIA Seltos con Tasa 0%.",
                        plazos: [{ m: 12, c: 83.33, g: 12, max: 24000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 16.5, max: 17000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "(2) K3", 
                        tna: "0%", cft: "-", seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Plan de ahorro y crédito para KIA K3 con Tasa bonificada.",
                        plazos: [{ m: 12, c: 83.33, g: 12, max: 20000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 16.5, max: 14000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "(3) K2500", 
                        tna: "0%", cft: "-", seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Línea comercial para KIA K2500 con beneficios de tasa.",
                        plazos: [{ m: 12, c: 83.33, g: 12, max: 24000000, info: "TNA 0%" }, { m: 18, c: 55.55, g: 14.5, max: 16000000, info: "TNA 0%" }] 
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
                        nombre: "(1) Everest", 
                        maxFinanciable: 30000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Línea Everest: Máxima financiación para unidades seleccionadas.",
                        plazos: [{ m: 18, tna: "0%", cft: "0%", ltv: "Máx $30M", c: 55.56, g: 17 }, { m: 24, tna: "14,90%", cft: "19,60%", ltv: "Máx $30M", c: 49.86, g: 17 }] 
                    },
                    { 
                        nombre: "(2) Maverick", 
                        maxFinanciable: 15000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación exclusiva para Ford Maverick.",
                        plazos: [{ m: 18, c: 55.56, tna: "0%", cft: "0%", max: 15000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "(3) Territory", 
                        maxFinanciable: 15000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tasa 0% para Ford Territory. Sujeto a disponibilidad de stock.",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", max: 15000000, info: "TNA 0%" }, { m: 18, c: 55.56, tna: "0%", cft: "0%", max: 15000000, info: "TNA 0%" }] 
                    },
                    { 
                        nombre: "(3.b) Territory Titanium", 
                        maxFinanciable: 25000000, gastos: 17, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Línea premium para Territory Titanium con tasa diferencial.",
                        plazos: [{ m: 18, c: 63.19, tna: "13,90%", cft: "18,18%", max: 18000000, info: "TNA 13,90%" }] 
                    },                   
                    { 
                        nombre: "(4) Especial Ranger XL", 
                        maxFinanciable: 18000000, gastos: 6, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Promoción especial para Ranger XL con bajos gastos de otorgamiento.",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", max: 18000000, info: "TNA 0% (Promo XL)" }] 
                    },
                    { 
                        nombre: "(5) Especial UVA Ranger", 
                        ltv: 60, gastos: 17, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Plan UVA Ranger: Hasta 60% del valor de la unidad.",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0%" }, { m: 36, c: 33.21, tna: "10,00%", cft: "12,79%", ltv: 60, info: "TNA 10,00%" }] 
                    },
                    { 
                        nombre: "(6.a) Tasa Especial Ranger (19,9% / 23,9% / 29,9%)", 
                        ltv: 60, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Esquema de tasas escalonadas según LTV y plazos para Ranger.",
                        plazos: [{ m: 12, c: 94.53, tna: "19,90%", cft: "26,92%", g: 6, ltv: 25, info: "LTV hasta 25%" }, { m: 12, c: 94.53, tna: "19,90%", cft: "26,92%", g: 17, ltv: 60, info: "LTV 26% al 60%" }, { m: 24, c: 55.16, tna: "23,90%", cft: "33,08%", g: 6, ltv: 25, info: "LTV hasta 25%" }, { m: 24, c: 55.16, tna: "23,90%", cft: "33,08%", g: 17, ltv: 60, info: "LTV 26% al 60%" }, { m: 36, c: 45.47, tna: "29,90%", cft: "42,82%", g: 17, ltv: 60, info: "Gasto fijo 17%" }] 
                    },
                    { 
                        nombre: "(6.b) Tasa Especial Ranger (TNA 0% / 26,9%)", 
                        maxFinanciable: 25000000, gastos: 17, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Línea combinada Tasa 0% y Tasa Fija para Ranger.",
                        plazos: [{ m: 12, c: 83.33, tna: "0%", cft: "0%", max: 25000000, info: "TNA 0%" }, { m: 18, c: 55.56, tna: "0%", cft: "0%", max: 25000000, info: "TNA 0%" }, { m: 24, c: 56.99, tna: "26,90%", cft: "37,87%", max: 25000000, info: "TNA 26,90%" }] 
                    },
                    { 
                        nombre: "(7) Plan Cosecha (Cuotas Semestrales)", 
                        ltv: 60, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Plan Cosecha: Pensado para el agro con pagos cada 6 meses.",
                        plazos: [{ m: 12, c: 686.52, tna: "39,90%", cft: "54,11%", g: 6, ltv: 25, info: "2 Cuotas - LTV hasta 25%" }, { m: 12, c: 686.52, tna: "39,90%", cft: "54,11%", g: 17, ltv: 60, info: "2 Cuotas - LTV 26% al 60%" }, { m: 24, c: 441.28, tna: "45,90%", cft: "63,25%", g: 6, ltv: 25, info: "4 Cuotas - LTV hasta 25%" }, { m: 24, c: 441.28, tna: "45,90%", cft: "63,25%", g: 17, ltv: 60, info: "4 Cuotas - LTV 26% al 60%" }] 
                    },
                    { 
                        nombre: "(8) Especial Transit 12/24", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Financiación para Transit con seguro liberado y tasas competitivas.",
                        plazos: [{ m: 12, c: 88.82, tna: "9,90%", cft: "12,66%", max: 45000000, info: "TNA 9,9% (Tope $45M)" }, { m: 24, c: 52.77, tna: "19,90%", cft: "26,92%", max: 40000000, info: "TNA 19,9% (Tope $40M)" }] 
                    },
                    { 
                        nombre: "(9) Transit Especial UVA", 
                        ltv: 60, gastos: 17, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea UVA para Transit. Sujeto a condiciones de Banco ICBC.",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", cft: "0%", ltv: 60, info: "TNA 0% (UVA)" }, { m: 36, c: 33.21, tna: "10,00%", cft: "12,79%", ltv: 60, info: "TNA 10,00% (UVA)" }] 
                    },
                    { 
                        nombre: "(10) Transit Especial (Tasa Fija)", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Crédito a tasa fija para unidades Transit. Seguro a elección.",
                        plazos: [{ m: 12, c: 106.43, tna: "39,90%", cft: "60,53%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 73.27, tna: "51,90%", cft: "84,43%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 61.07, tna: "51,90%", cft: "84,43%", ltv: 50, info: "LTV Máx 50%" }, { m: 48, c: 55.85, tna: "51,90%", cft: "84,43%", ltv: 50, info: "LTV Máx 50%" }] 
                    },
                    { 
                        nombre: "(11) Tasa General Green", 
                        tna: "47,00%", cft: "74,30%", ltv: 80, gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Línea Green: Crédito prendario tradicional con LTV hasta el 80%.",
                        plazos: [{ m: 12, c: 110.81 }, { m: 24, c: 69.93 }, { m: 36, c: 57.42 }, { m: 48, c: 51.92 }, { m: 60, c: 49.14 }] 
                    }
                ]
            },
            comercial: {
                nombre: "ICBC Comercial",
                planes: [
                    { 
                        nombre: "(1) Especial Ranger Semestral", 
                        ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea comercial para Ranger con esquema de pagos semestrales.",
                        plazos: [{ m: 12, c: 653.07, tna: "32,90%", cft: "43,77%", ltv: 50, info: "2 Cuotas Semestrales" }, { m: 24, c: 459.41, tna: "49,90%", cft: "69,49%", ltv: 50, info: "4 Cuotas Semestrales" }] 
                    },
                    { 
                        nombre: "(2.a) Comercial Ranger XL/XLS (cautivo)", 
                        gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación para Ranger XL/XLS con seguro cautivo del banco.",
                        plazos: [{ m: 12, c: 90.93, tna: "14,90%", cft: "17,77%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 63.18, tna: "39,90%", cft: "54,90%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 56.81, tna: "49,90%", cft: "71,45%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 51.33, tna: "49,90%", cft: "71,45%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "(2.b) Comercial Ranger XL/XLS (liberado)", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Financiación comercial para Ranger con seguro liberado.",
                        plazos: [{ m: 12, c: 91.98, tna: "16,90%", cft: "20,36%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 64.38, tna: "41,90%", cft: "57,50%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 58.18, tna: "51,90%", cft: "75,10%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 52.81, tna: "51,90%", cft: "75,10%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "(3) Transit 12M y 24", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Préstamos para Transit canal comercial plazos cortos.",
                        plazos: [{ m: 12, c: 88.35, tna: "9,90%", cft: "11,51%", max: 45000000, info: "TNA 9,9% (Máx $45M)" }, { m: 24, c: 51.81, tna: "19,90%", cft: "24,35%", max: 40000000, info: "TNA 19,9% (Máx $40M)" }] 
                    },
                    { 
                        nombre: "(4.a) Especial Transit (cautivo)", 
                        gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Línea Transit canal comercial con seguro del banco.",
                        plazos: [{ m: 12, c: 103.31, tna: "37,90%", cft: "50,93%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 69.28, tna: "49,90%", cft: "71,45%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 56.81, tna: "49,90%", cft: "71,45%", ltv: 50, info: "LTV Máx 50%" }, { m: 48, c: 51.33, tna: "49,90%", cft: "71,45%", ltv: 50, info: "LTV Máx 50%" }] 
                    },
                    { 
                        nombre: "(4.b) Especial Transit (liberado)", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea Transit canal comercial con seguro a elección.",
                        plazos: [{ m: 12, c: 104.43, tna: "39,90%", cft: "54,19%", ltv: 40, info: "LTV Máx 40%" }, { m: 24, c: 70.53, tna: "51,90%", cft: "75,10%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 58.18, tna: "51,90%", cft: "75,10%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 52.81, tna: "51,90%", cft: "75,10%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "(5.a) Generales Canal Comercial (cautivo)", 
                        tna: "52,00%", ltv: 75, gastos: 6, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Créditos generales para empresas con seguro cautivo.",
                        plazos: [{ m: 12, c: 112.45, cft: "79,55%" }, { m: 24, c: 71.80, cft: "79,53%" }, { m: 36, c: 59.52, cft: "79,52%" }, { m: 48, c: 54.22, cft: "79,50%" }] 
                    },
                    { 
                        nombre: "(5.b) Generales Canal Comercial (liberado)", 
                        tna: "55,00%", ltv: 75, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Créditos generales para empresas con seguro liberado.",
                        plazos: [{ m: 12, c: 114.18, cft: "85,30%" }, { m: 24, c: 73.71, cft: "85,28%" }, { m: 36, c: 61.62, cft: "85,26%" }, { m: 48, c: 56.48, cft: "85,25%" }] 
                    },
                    { 
                        nombre: "(6.a) Mi Pyme - Ranger", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea Mi Pyme exclusiva para unidades Ford Ranger.",
                        plazos: [{ m: 24, c: 58.76, tna: "30,80%", cft: "38,25%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 52.05, tna: "40,90%", cft: "53,07%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 46.18, tna: "40,90%", cft: "53,07%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "(6.b) Mi Pyme - Transit", 
                        gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Línea Mi Pyme para unidades Ford Transit.",
                        plazos: [{ m: 24, c: 65.86, tna: "30,80%", cft: "55,34%", ltv: 50, info: "LTV Máx 50%" }, { m: 36, c: 53.43,tna: "30,80%", cft: "56,20%", ltv: 60, info: "LTV Máx 60%" }, { m: 48, c: 47.66, tna: "30,80%", cft: "56,20%", ltv: 60, info: "LTV Máx 60%" }] 
                    },
                    { 
                        nombre: "(7) Especial UVA Transit", 
                        tna: "19,00%", cft: "25,57%", ltv: 60, gastos: 6, seguro: "LIBERADO", esUVA: true, valorUVA: 1706.43, baseCalculo: 1000, 
                        descripcion: "Financiación UVA canal comercial para Transit.",
                        plazos: [{ m: 24, c: 52.24 }, { m: 36, c: 38.52 }] 
                    },
                    { 
                        nombre: "(8) General UVA Ranger", 
                        tna: "31,00%", cft: "44,68%", ltv: 60, gastos: 6, seguro: "LIBERADO", esUVA: true, valorUVA: 1706.43, baseCalculo: 1000, 
                        descripcion: "Plan UVA Ranger comercial. Plazos hasta 60 meses.",
                        plazos: [{ m: 12, c: 101.06 }, { m: 24, c: 59.53 }, { m: 36, c: 46.20 }, { m: 48, c: 39.90 }, { m: 60, c: 36.39 }] 
                    },
                    { 
                        nombre: "(9.a) Ranger USD", 
                        moneda: "USD", ltv: 50, gastos: 6, seguro: "LIBERADO", baseCalculo: 1000, 
                        descripcion: "Crédito prendario en dólares para Ford Ranger.",
                        plazos: [{ m: 12, c: 83.50, tna: "0,00%", cft: "2,41%", info: "TNA 0% USD" }, { m: 24, c: 44.91, tna: "4,50%", cft: "7,38%", info: "TNA 4,5% USD" }] 
                    },
                    { 
                        nombre: "(9.b) Ranger USD", 
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
                        nombre: "(1) Especial Polo High/Comfort", 
                        tna: "0%", cft: "0%", ltv: "Máx $20M", gastos: 17.73, seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Tasa 0% para VW Polo Highline y Comfortline.",
                        plazos: [{ m: 24, c: 41.67, tna: "0%", ltv: "Máx $20M", g: 17.73 }] 
                    },
                    { 
                        nombre: "(2) Especial Autos", 
                        tna: "0% / 9,9%", ltv: "Varios", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Planes especiales para la línea de autos Volkswagen.",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   g: 9.14,   ltv: "Máx $15M" },
                            { m: 18, c: 55.56, tna: "0%",   g: 16.33, ltv: "Máx $15M" },
                            { m: 24, c: 41.67, tna: "0%",   g: 12.29, ltv: "Máx $10M" },
                            { m: 24, c: 47.03, tna: "9,90%", g: 17.13, ltv: "Máx $15M" }
                        ] 
                    },
                    { 
                        nombre: "(3) Especial Amarok", 
                        tna: "0% / 24,5%", ltv: "Varios", seguro: "CAUTIVO", baseCalculo: 1000, 
                        descripcion: "Financiación bonificada para Volkswagen Amarok.",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",    g: 12.89, ltv: "Máx $24M" },
                            { m: 18, c: 55.56, tna: "0%",    g: 15.31, ltv: "Máx $20M" },
                            { m: 24, c: 55.53, tna: "24,50%", g: 17.73, ltv: "Máx $20M" }
                        ] 
                    },
                    { 
                        nombre: "(4) Usados Tasa Fija", 
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
                        nombre: "(5) Usados UVAs", 
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
                        nombre: "(1) Audi A1", 
                        tna: "0% / 9,9%", ltv: "Varios", seguro: "CAUTIVO", gastos: 19.5, baseCalculo: 1000, 
                        descripcion: "Línea exclusiva para Audi A1. Tasa bonificada.",
                        plazos: [
                            { m: 12, c: 83.33, tna: "0%",   ltv: "Máx $16.5M", g: 19.5 }, 
                            { m: 12, c: 88.82, tna: "9.9%", ltv: "Máx $22.5M", g: 19.5 }
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
                        nombre: "(1) Tasa Fija 0km", 
                        tna: "71,00%", cft: "129,27%", maxFinanciable: 57000000, minFinanciable: 1000000, ltv: 80, gastos: 6, seguro: "A DEFINIR", baseCalculo: 1000, 
                        descripcion: "Crédito prendario Galicia tasa fija. LTV hasta 80%.",
                        plazos: [{ m: 12, c: 141.53 }, { m: 24, c: 94.25 }, { m: 36, c: 80.72 }, { m: 48, c: 75.30 }, { m: 60, c: 72.84 }] 
                    },
                    { 
                        nombre: "(2) Prendario UVA 0km", 
                        tna: "UVA + 37%", cft: "36,30%", maxFinanciable: 57000000, ltv: 80, gastos: 6, valorUVA: 1706.43, baseCalculo: 1000, esUVA: true, 
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
        bancos: ["vw_financial-audi"]
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

        // Creamos el "puente": Un solo botón de Santander
        const btnBydBridge = document.createElement('div'); 
        btnBydBridge.className = 'card-sub-categoria cat-general'; // cat-general ya tiene el logo de Santander en CSS
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
    cont.innerHTML = ""; // Limpiamos el botón antiguo
    
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

    // Mostramos u ocultamos el grupo de cotización para planes en USD
    const grupoDolar = document.getElementById('grupo-cotizacion');
    if (grupoDolar) {
        grupoDolar.style.display = (plan.moneda === "USD") ? "block" : "none";
    }

    // Renderizamos la tabla de condiciones (la de la derecha)
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
        let ltvDato = p.ltv || (p.max ? "Máx $" + (p.max / 1000000) + "M" : null) || plan.ltv || "---";
        tablaTasas += `
            <tr>
                <td><strong>${p.m} Meses</strong></td>
                <td>${p.tna || plan.tna || "---"}</td>
                <td>${p.cft || plan.cft || "---"}</td>
                <td>${typeof ltvDato === 'number' ? ltvDato + '%' : ltvDato}</td>
                <td>${p.g || plan.gastos || "0"}%</td>
            </tr>`;
    });
    tablaTasas += `</tbody></table></div></div>`;

    document.getElementById('ficha-tecnica').innerHTML = tablaTasas;
    document.getElementById('resultado-cuotas').innerHTML = "";

    // Limpiamos todos los campos al entrar
    ['precio-lista', 'precio', 'anticipo', 'monto-directo'].forEach(id => {
        document.getElementById(id).value = "";
    });

    vincularEventosCalculo();
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

    // Si no hay datos en ninguno de los dos bloques, no calculamos
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

        // DETERMINAMOS EL MONTO A FINANCIAR SEGÚN EL BLOQUE USADO
        if (montoDirecto > 0) {
            // Caso 1: Ingreso Directo (aplica para todas las marcas ahora)
            montoFin = montoDirecto / factor;
        } else {
            // Caso 2: Cálculo por Precios (Precio Venta - Anticipo)
            const pLista = pListaPesos / factor;
            const vVenta = vVentaPesos / factor;
            const antIngresado = anticipoPesos / factor;
            
            let ltvPlan = p.ltv || financiacionActual.ltv;
            let topeMax = p.max || financiacionActual.maxFinanciable || 999999999999;
            let maxPermitidoPorLTV = (typeof ltvPlan === 'number') ? (pLista * (ltvPlan / 100)) : 999999999999;
            let techoFinalBanco = Math.min(maxPermitidoPorLTV, topeMax);

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
    const inputBloque2 = 'monto-directo';
    const inputDolar = 'cotizacion-dolar';

    // Eventos para Bloque 1 (Cálculo por Precios)
    inputsBloque1.forEach(id => {
        document.getElementById(id).oninput = (e) => {
            formatCurrencyInput(e.target);
            // Si escribo aquí, borro el monto directo
            document.getElementById('monto-directo').value = ""; 
            calcularSimulacion();
        };
    });

    // Evento para Bloque 2 (Monto Directo)
    document.getElementById(inputBloque2).oninput = (e) => {
        formatCurrencyInput(e.target);
        // Si escribo aquí, borro los 3 del Bloque 1
        inputsBloque1.forEach(id => document.getElementById(id).value = "");
        calcularSimulacion();
    };

    document.getElementById(inputDolar).oninput = () => calcularSimulacion();
}

function irAComparador() {
    mostrarSeccion('vista-comparador');
    poblarSelectoresBanco(1);
    poblarSelectoresBanco(2);

    // Aseguramos que el input maestro limpie los resultados viejos y aplique puntos
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
    // Limpiamos resultados previos de esa columna
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
    
    // Si ya había un monto, calculamos automáticamente al elegir el plan
    calcularComparacion(); 
}

function calcularComparacion() {
    const input = document.getElementById('comp-monto');
    if (!input) return;
    
    // LIMPIEZA INFALIBLE: Removemos todo lo que no sea número
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
        
        let ltvFila = p.ltv || plan.ltv || (p.max ? p.max : "---");
        if (typeof ltvFila === 'number') {
            ltvFila = ltvFila > 1000 ? "Máx $" + (ltvFila / 1000000) + "M" : ltvFila + "%";
        }

        let cuotaHtml = "";
        let gastosCeldaHtml = `<td>${gasPct}%</td>`; // Por defecto solo %

        if (tieneMonto) {
            // Cálculo de Cuota
            const valorCuota = (monto / base) * p.c;
            cuotaHtml = `<td class="cuota-resaltada-comp">$${Math.round(valorCuota).toLocaleString('es-AR')}</td>`;
            
            // Cálculo de Gastos en Pesos
            const valorGastos = (monto * gasPct) / 100;
            
            // Celda de gastos combinada: Pesos + Porcentaje pequeño debajo
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
/* ==========================================================================
   6. UTILIDADES GLOBALES (Faltantes)
   ========================================================================== */
function formatCurrencyInput(input) {
    // Solo permitimos números
    let value = input.value.replace(/\D/g, "");
    if (value === "") {
        input.value = "";
        return;
    }
    // Formateamos con puntos de miles usando el estándar de Argentina
    input.value = new Intl.NumberFormat('es-AR').format(value);
}

function toggleNovedades() {
    const panel = document.getElementById('panel-lateral');
    if (panel) {
        // Removemos o agregamos la clase 'hidden' para mostrar/ocultar
        panel.classList.toggle('hidden');
    } else {
        console.error("No se encontró el elemento 'panel-lateral'");
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