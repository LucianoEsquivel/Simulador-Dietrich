
// base.js
export const financiaciones = [
    {
        idPlan: 1,
        banco: "Santander",
        nombre: "Especial pickups UVA",
        descripcion: "Financiacion exclusiva para pickups",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        aplicaATodo: false,
        factorCalculo: 1000000, // Para calcular el valor de la cuota por millón financiado
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 88, 89, 90, 91, 92, 93, 94, 95], // Aquí van los IDs que definimos antes
        
        // Estructura completa por cada plazo:
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$90.517", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$62.628", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$48.719", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$34.878", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$28.026", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$23.969", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "72 meses", valor: "$21.309", tna: "12,90%", cft: "16,78%", ltv: "80%", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 2,
        banco: "Santander",
        nombre: "Linea UVA 0km",
        descripcion: "Financiación para toda la gama",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
    
    // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$94.530", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$66.639", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$52.775", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$39.073", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$32.381", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$28.490", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 3,
        banco: "Santander",
        nombre: "Linea UVA c/quebranto",
        descripcion: "esta financiacion aplica para toda la gama",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83.333", tna: "0%", cft: "0%", ltv: "80%", gastos: "14%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$60.045", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "11%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$46.100", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "15%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 4,
        banco: "Santander",
        nombre: "Linea UVA c/quebranto (pickups)",
        descripcion: "esta aplica para pickups nomas",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos específicos (bandera en false)
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 88, 89, 90, 91, 92, 93, 94, 95], 

        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            // Opción con TNA 9,90%
            { plazo: "12 meses (Tasa 9,9%)", valor: "$88.822", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "7,10%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 9,9%)", valor: "$60.947", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "9,30%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 9,9%)", valor: "$47.030", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "11,30%", seguro: "Cautivo" },
            
            // Opción con TNA 0%
            { plazo: "12 meses (Tasa 0%)", valor: "$83.334", tna: "0%", cft: "0%", ltv: "80%", gastos: "10%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 0%)", valor: "$55.556", tna: "0%", cft: "0%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 0%)", valor: "$41.667", tna: "0%", cft: "0%", ltv: "80%", gastos: "15%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 5,
        banco: "Santander",
        nombre: "Linea c/quebranto 10%",
        descripcion: "esta financiacion aplica para toda la gama",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$99.568", tna: "28,50%", cft: "40,49%", ltv: "80%", gastos: "12%", seguro: "Cautivo"},
            { plazo: "18 meses", valor: "$75.384", tna: "34,50%", cft: "50,73%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$63.663", tna: "37,50%", cft: "56,11%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$53.088", tna: "41%", cft: "62,60%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$48.026", tna: "42%", cft: "64,50%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$45.824", tna: "43%", cft: "66,42%", ltv: "80%", gastos: "12%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 6,
        banco: "Santander",
        nombre: "Tasa fija 0km",
        descripcion: "esta financiacion aplica para toda la gama",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$111.366", tna: "47,90%", cft: "76,13%", ltv: "80%", gastos: "4%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$83.851", tna: "47,90%", cft: "76,13%", ltv: "80%", gastos: "4%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$70.542", tna: "47,90%", cft: "76,13%", ltv: "80%", gastos: "4%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$58.086", tna: "47,90%", cft: "76,13%", ltv: "80%", gastos: "4%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$52.364", tna: "47,90%", cft: "76,13%", ltv: "80%", gastos: "4%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$49.900", tna: "47,90%", cft: "76,13%", ltv: "80%", gastos: "4%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 7,
        banco: "Santander",
        nombre: "Tasa fija Green",
        descripcion: "financiacion exclusiva para vehiculos 100% electricos",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos eléctricos (bandera en false)
        vehiculosIds: [33, 35, 40, 103, 104, 105, 106, 107, 108, 109], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$107.654", tna: "41,90%", cft: "64,31%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$80.008", tna: "41,90%", cft: "64,31%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$66.534", tna: "41,90%", cft: "64,31%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$53.729", tna: "41,90%", cft: "64,31%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$47.949", tna: "41,90%", cft: "64,31%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$44.926", tna: "41,90%", cft: "64,31%", ltv: "80%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 8,
        banco: "Santander",
        nombre: "UVA Electricos",
        descripcion: "financiacion exclusiva para vehiculos 100% electricos",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos eléctricos (bandera en false)
        vehiculosIds: [33, 35, 40, 103, 104, 105, 106, 107, 108, 109], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$95.168", tna: "21%", cft: "28,59%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$67.280", tna: "21%", cft: "28,59%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$53.427", tna: "21%", cft: "28,59%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$39.753", tna: "21%", cft: "28,59%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$33.093", tna: "21%", cft: "28,59%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$29.235", tna: "21%", cft: "28,59%", ltv: "80%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 9,
        banco: "Santander",
        nombre: "Linea UVA ByD Electricos",
        descripcion: "financiacion exclusiva para vehiculos de ByD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos BYD (bandera en false)
        vehiculosIds: [103, 104, 105, 106, 107, 108, 109], 
        
        // Tabla de plazos detallada con las dos opciones de tasa
        cuotasPorMillon: [
            // Opciones con TNA 9,90%
            { plazo: "12 meses (Tasa 9,9%)", valor: "$88.822", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "5%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 9,9%)", valor: "$60.947", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 9,9%)", valor: "$47.030", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "7%", seguro: "Cautivo" },
            
            // Opciones con TNA 0%
            { plazo: "12 meses (Tasa 0%)", valor: "$83.334", tna: "0%", cft: "0%", ltv: "80%", gastos: "10%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 0%)", valor: "$55.556", tna: "0%", cft: "0%", ltv: "80%", gastos: "13%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 0%)", valor: "$41.667", tna: "0%", cft: "0%", ltv: "80%", gastos: "16%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 10,
        banco: "Santander",
        nombre: "UVA ByD Green electricos",
        descripcion: "financiacion exclusiva para byd",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos BYD (bandera en false)
        vehiculosIds: [103, 104, 105, 106, 107, 108, 109], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$91.655", tna: "14,90%", cft: "19,60%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$63.762", tna: "14,90%", cft: "19,60%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$49.861", tna: "14,90%", cft: "19,60%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$36.052", tna: "14,90%", cft: "19,60%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$29.239", tna: "14,90%", cft: "19,60%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$25.222", tna: "14,90%", cft: "19,60%", ltv: "80%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 11,
        banco: "Santander",
        nombre: "Linea tradicional ByD",
        descripcion: "financiacion exclusiva para ByD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos BYD (bandera en false)
        vehiculosIds: [103, 104, 105, 106, 107, 108, 109], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$105.819", tna: "38,90%", cft: "58,68%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$78.118", tna: "38,90%", cft: "58,68%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$64.570", tna: "38,90%", cft: "58,68%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$51.606", tna: "38,90%", cft: "58,68%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$45.672", tna: "38,90%", cft: "58,68%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$42.509", tna: "38,90%", cft: "58,68%", ltv: "80%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 12,
        banco: "Santander",
        nombre: "Seltos",
        descripcion: "financiacion exclusiva para KIA Seltos",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [98], 
        
        // Tabla de plazos en formato compacto (un objeto por línea)
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$24.000.000", gastos: "12%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "16,50%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 13,
        banco: "Santander",
        nombre: "k3",
        descripcion: "financiacion exclusiva para KIA K3",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [96, 97], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "12%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$14.000.000", gastos: "16,50%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 14,
        banco: "Santander",
        nombre: "k2500",
        descripcion: "financiacion exclusiva para KIA K2500",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [102], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$24.000.000", gastos: "12%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$16.000.000", gastos: "14,5%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 15,
        banco: "ICBC",
        nombre: "Especial Ranger XL (Mayorista)",
        descripcion: "Financiacion exclusiva para Ranger XL DC y chasis",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 110, 111, 4], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$18.000.000", gastos: "4%", seguro: "Liberado"}
        ]
    },

    {
        idPlan: 16,
        banco: "ICBC",
        nombre: "Especial Ranger C/S (Mayorista)",
        descripcion: "Financiacion exclusiva para Ranger XL CS y chasis",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [3, 4, 5], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$42,00", tna: "0%", cft: "0%", ltv: "$25.000.000", gastos: "6%", seguro: "Liberado" }
        ]
    },


    {
        idPlan: 17,
        banco: "ICBC",
        nombre: "Especial Ranger XL y XLS (mayorista)",
        descripcion: "Financiacion exclusiva para Ranger XL y XLS",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        aplicaATodo: false, 
        factorCalculo: 1000,
        vehiculosIds: [1, 2, 110, 111,7, 8], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            // Opciones Seguro Cautivo
            { plazo: "12 meses", valor: "$90,93", tna: "14,90%", cft: "17,77%", ltv: "40%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$63,18", tna: "39,90%", cft: "54,19%", ltv: "50%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$54,12", tna: "45,90%", cft: "64,34%", ltv: "60%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$48,43", tna: "45,90%", cft: "64,34%", ltv: "60%", gastos: "6%", seguro: "Cautivo" },
            
            // Opciones Seguro Liberado
            { plazo: "12 meses", valor: "$91,90", tna: "16,90%", cft: "20,36%", ltv: "40%", gastos: "6%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$64,38", tna: "41,90%", cft: "57,50%", ltv: "50%", gastos: "6%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$55,46", tna: "47,90%", cft: "67,86%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$47,30", tna: "47,90%", cft: "67,86%", ltv: "60%", gastos: "6%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 18,
        banco: "ICBC",
        nombre: "Transit lib. y caut. (mayorista)",
        descripcion: "Financiacion exclusiva para Transit menos E-Transit",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        aplicaATodo: false,
        factorCalculo: 1000, 
        vehiculosIds: [29, 30, 31, 32, 34, 36, 37], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            // Opciones Seguro Cautivo
            { plazo: "12 meses", valor: "$87,32", tna: "7,90%", cft: "9,09%", ltv: "60%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$50,74", tna: "17,90%", cft: "21,67%", ltv: "60%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$54,12", tna: "45,90%", cft: "64,34%", ltv: "50%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$48,43", tna: "45,90%", cft: "64,34%", ltv: "50%", gastos: "6%", seguro: "Cautivo" },
            
            // Opciones Seguro Liberado
            { plazo: "12 meses", valor: "$88,35", tna: "9,90%", cft: "11,51%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$51,81", tna: "19,90%", cft: "24,35%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$55,46", tna: "47,90%", cft: "68,86%", ltv: "50%", gastos: "6%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$49,87", tna: "47,90%", cft: "67,86%", ltv: "50%", gastos: "6%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 19,
        banco: "ICBC",
        nombre: "General (liberado, cautivo) (mayorista)",
        descripcion: "Financiacion exclusiva para toda la gama Ford",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        aplicaATodo: false,
        factorCalculo: 1000, 
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 20, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] , 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            // Opciones Seguro Cautivo
            { plazo: "12 meses", valor: "$112,45", tna: "47,90%", cft: "71,96%", ltv: "75%", gastos: "60%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$71,72", tna: "47,90%", cft: "71,94%", ltv: "75%", gastos: "60%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$59,02", tna: "47,90%", cft: "71,93%", ltv: "75%", gastos: "60%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$53,31", tna: "47,90%", cft: "71,91%", ltv: "75%", gastos: "60%", seguro: "Cautivo" },
            
            // Opciones Seguro Liberado
            { plazo: "12 meses", valor: "$111,81", tna: "50,90%", cft: "77,49%", ltv: "75%", gastos: "60%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$71,11", tna: "50,90%", cft: "77,47%", ltv: "75%", gastos: "60%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$58,76", tna: "50,90%", cft: "77,45%", ltv: "75%", gastos: "60%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$53,40", tna: "50,90%", cft: "77,44%", ltv: "75%", gastos: "60%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 20,
        banco: "ICBC",
        nombre: "Especial Mi Pyme Ranger (mayorista)",
        descripcion: "Financiacion exclusiva para Ranger (excepto Raptor)",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$58,76", tna: "30,80%", cft: "38,25%", ltv: "50%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$50,05", tna: "37,80%", cft: "48,56%", ltv: "60%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$44.02", tna: "37,80%", cft: "48,55%", ltv: "60%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 21,
        banco: "ICBC",
        nombre: "Especial mi Pyme transit (mayorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [29, 30, 31, 32, 34, 36, 37], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$58,76", tna: "30,80%", cft: "38,25%", ltv: "50%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$50,05", tna: "37,80%", cft: "48,56%", ltv: "60%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$44,02", tna: "37,80%", cft: "45,55%", ltv: "60%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 22,
        banco: "ICBC",
        nombre: "tasa especial transit UVA (mayorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [29, 30, 31, 32, 34, 36, 37], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$52,24", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$38,52", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "6%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 23,
        banco: "ICBC",
        nombre: "Especial Ranger UVA (lib) (mayorista)",
        descripcion: "Financiacion exclusiva para Ranger",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$98,63", tna: "26,90%", cft: "37,87%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$56,99", tna: "26,90%", cft: "37,87%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$43,50", tna: "26,90%", cft: "37,87%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$37,04", tna: "26,90%", cft: "37,87%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$33,38", tna: "26,90%", cft: "37,87%", ltv: "60%", gastos: "6%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 24,
        banco: "ICBC",
        nombre: "Everest (minorista)",
        descripcion: "Financiacion exclusiva para Everest",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [28], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$30.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$49,86", tna: "14,90%", cft: "19,60%", ltv: "$30.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 25,
        banco: "ICBC",
        nombre: "maverick (minorista)",
        descripcion: "Financiacion exclusiva para Maverick",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [15, 16, 17], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$15.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 26,
        banco: "ICBC",
        nombre: "Territory Titanium (minorista)",
        descripcion: "Financiacion exclusiva para Territory Titanium",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [23], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 27,
        banco: "ICBC",
        nombre: "Territory (minorista)",
        descripcion: "Financiacion exclusiva para Territory",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [21, 22, 23], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$15.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$15.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 28,
        banco: "ICBC",
        nombre: "ranger XL (minorista)",
        descripcion: "Financiacion exclusiva para Ranger XL",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 110, 111, 5], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$18.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 29,
        banco: "ICBC",
        nombre: "ranger cs y chasis (minorista)",
        descripcion: "Financiacion exclusiva para Ranger XL CS y chasis",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [3, 4, 5], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "0%", ltv: "$25.000.000", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 30,
        banco: "ICBC",
        nombre: "tasa especial uva ranger (minorista)",
        descripcion: "Financiacion exclusiva para Ranger, excepto Raptor",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "0%", ltv: "60%", gastos: "17%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$33,21", tna: "10%", cft: "12,79%", ltv: "60%", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 31,
        banco: "ICBC",
        nombre: "tasa especial ranger (minorista)",
        descripcion: "Financiacion exclusiva para Ranger, excepto Raptor",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 110, 111, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 
        
        // Tabla de plazos compacta - Ordenada por combinación de Tasa/Gastos
        cuotasPorMillon: [
            { plazo: "12 meses (Tasa 20% - Gtos 6%)", valor: "$94,53", tna: "20%", cft: "27%", ltv: "25%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 24% - Gtos 6%)", valor: "$55,16", tna: "24%", cft: "33%", ltv: "25%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "12 meses (Tasa 0% - Gtos 17%)", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 0% - Gtos 17%)", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "12 meses (Tasa 20% - Gtos 17%)", valor: "$94,53", tna: "20%", cft: "27%", ltv: "60%", gastos: "17%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 24% - Gtos 17%)", valor: "$55,16", tna: "24%", cft: "33%", ltv: "60%", gastos: "17%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 27% - Gtos 17%)", valor: "$56,99", tna: "27%", cft: "38%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "36 meses (Tasa 30% - Gtos 17%)", valor: "$45,47", tna: "30%", cft: "43%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 32,
        banco: "ICBC",
        nombre: "nueva tasa transit UVA (minorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [29, 30, 31, 32, 34, 36, 37], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "0%", ltv: "60%", gastos: "17%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$33,21", tna: "10%", cft: "13%", ltv: "60%", gastos: "17%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 33,
        banco: "ICBC",
        nombre: "tasa especial transit (minorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [29, 30, 31, 32, 34, 36, 37], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$88,82", tna: "10%", cft: "13%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$52,77", tna: "20%", cft: "27%", ltv: "60%", gastos: "6%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$56,62", tna: "46%", cft: "72%", ltv: "50%", gastos: "6%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$52,63", tna: "48%", cft: "76%", ltv: "50%", gastos: "6%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 34,
        banco: "Galicia",
        nombre: "prendario tasa fija",
        descripcion: "Financiacion exclusiva para toda la gama",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: true, 
        vehiculosIds: [], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$141,53", tna: "71%", cft: "129,27%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$94,25", tna: "71%", cft: "129,27%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$80,72", tna: "71%", cft: "129,27%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$75,30", tna: "71%", cft: "129,27%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$72,84", tna: "71%", cft: "129,27%", ltv: "80%", gastos: "6%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 35,
        banco: "Volkswagen Financiera",
        nombre: "Audi A1",
        descripcion: "Financiacion exclusiva para Audi A1",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [41], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses (Tasa 0%)", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "13,495%", seguro: "Cautivo" },
            { plazo: "12 meses (Tasa 9.9%)", valor: "$88,82", tna: "9,90%", cft: "S/D", ltv: "$30.500.000", gastos: "13,495%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 36,
        banco: "Volkswagen Financiera",
        nombre: "UVA Audi",
        descripcion: "Financiacion exclusiva para audi A1",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [41],
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 37, //cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "Amarok financia mas",
        descripcion: "Financiacion exclusiva para amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [88, 89, 90, 91, 92, 93, 94, 95], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$44.000.000", gastos: "15,915%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "S/D", ltv: "$28.000.000", gastos: "16,52%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "15,31%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 38, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "Amarok sin quebranto",
        descripcion: "Financiacion exclusiva para amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [88, 89, 90, 91, 92, 93, 94, 95], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$21.500.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 39, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "UVA Amarok (24)",
        descripcion: "Financiacion exclusiva para amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [88, 89, 90, 91, 92, 93, 94, 95], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$21.500.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    
    {
        idPlan: 40, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "Autos financia mas",
        descripcion: "Tera Highline y Outfit, T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos (todas las versiones) Vigencia: desde el 17/04/2026 hasta el 30/04/2026, Disponible: Persona física, jurídica y venta directa ",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [63, 64, 67, 68, 69, 78, 79, 74], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$32.000.000", gastos: "11,075%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "S/D", ltv: "$25.500.000", gastos: "15,31%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$21.000.000", gastos: "17,73%", seguro: "Cautivo" }
        ]
    },
    
    {
        idPlan: 41, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "UVA Autos",
        descripcion: "Tera Highline y Outfit, T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos (todas las versiones) Vigencia: desde el 17/04/2026 hasta el 30/04/2026, Disponible: Persona física, jurídica y venta directa ",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [63, 64, 67, 68, 69, 78, 79, 74], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$21.000.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 42,
        banco: "Volkswagen Financiera",
        nombre: "especial amarok",
        descripcion: "Financiacion exclusiva para amarok nomas",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [88, 89, 90, 91, 92, 93, 94, 95], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$27.000.000", gastos: "16,52%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "16,52%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$52,77", tna: "19,90%", cft: "S/D", ltv: "$24.000.000", gastos: "14,705%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 43,
        banco: "Volkswagen Financiera",
        nombre: "especial autos",
        descripcion: "Financiacion exclusiva para volkswagen, excepto amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87], 

        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$25.000.000", gastos: "14,705%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "16,52%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$47,03", tna: "9,90%", cft: "S/D", ltv: "$17.000.000", gastos: "16,52%", seguro: "Cautivo" }
        ]
    },

];

export const vehiculos = [

/******************************** Ford ******************************************/

    { id: 1, marca: "Ford", modelo: "Ranger", version: "XL 4x2 MT", tags: [] },
    { id: 2, marca: "Ford", modelo: "Ranger", version: "XL 4x4 MT", tags: [] },
    { id: 110, marca: "Ford", modelo: "Ranger", version: "XL 4x2 AT", tags: [] },
    { id: 111, marca: "Ford", modelo: "Ranger", version: "XL 4x4 AT", tags: [] },
    { id: 3, marca: "Ford", modelo: "Ranger", version: "XL 4x2 C/S", tags: [] },
    { id: 4, marca: "Ford", modelo: "Ranger", version: "XL 4x4 C/S", tags: [] },
    { id: 5, marca: "Ford", modelo: "Ranger", version: "XL 4x4 Chasis", tags: [] },
    { id: 6, marca: "Ford", modelo: "Ranger", version: "Black 4x4", tags: [] },
    { id: 7, marca: "Ford", modelo: "Ranger", version: "XLS 4x2", tags: [] },
    { id: 8, marca: "Ford", modelo: "Ranger", version: "XLS 4x4 3.0 V6", tags: [] },
    { id: 9, marca: "Ford", modelo: "Ranger", version: "XLT 4x2", tags: [] },
    { id: 10, marca: "Ford", modelo: "Ranger", version: "XLT 4x4", tags: [] },
    { id: 11, marca: "Ford", modelo: "Ranger", version: "XLT 4x4 3.0 V6", tags: [] },
    { id: 12, marca: "Ford", modelo: "Ranger", version: "Limited 2.0", tags: [] },
    { id: 13, marca: "Ford", modelo: "Ranger", version: "Limited + 3.0", tags: [] },
    { id: 14, marca: "Ford", modelo: "Ranger", version: "Raptor", tags: [] },

    { id: 15, marca: "Ford", modelo: "Maverick", version: "XLT", tags: [] },
    { id: 16, marca: "Ford", modelo: "Maverick", version: "Lariat Hibrida", tags: [] },
    { id: 17, marca: "Ford", modelo: "Maverick", version: "Tremor", tags: [] },

    { id: 18, marca: "Ford", modelo: "F-150", version: "Lariat", tags: [] },
    { id: 19, marca: "Ford", modelo: "F-150", version: "Tremor", tags: [] },
    { id: 20, marca: "Ford", modelo: "F-150", version: "Raptor", tags: [] },

    { id: 21, marca: "Ford", modelo: "Territory", version: "SEL", tags: [] },
    { id: 22, marca: "Ford", modelo: "Territory", version: "Trend Hibrida", tags: [] },
    { id: 23, marca: "Ford", modelo: "Territory", version: "Titanium", tags: [] },

    { id: 24, marca: "Ford", modelo: "Bronco Sport", version: "BigBend", tags: [] },
    { id: 25, marca: "Ford", modelo: "Bronco Sport", version: "Badlands", tags: [] },

    { id: 26, marca: "Ford", modelo: "Kuga", version: "Platinum", tags: [] },
    { id: 27, marca: "Ford", modelo: "Bronco ", version: "Badlands", tags: [] },
    { id: 28, marca: "Ford", modelo: "Everest ", version: "Titanium", tags: [] },

    { id: 29, marca: "Ford", modelo: "Transit Van", version: "Mediana MT", tags: [] },
    { id: 30, marca: "Ford", modelo: "Transit Van", version: "Mediana TE MT", tags: [] },
    { id: 31, marca: "Ford", modelo: "Transit Van", version: "Larga TE MT", tags: [] },
    { id: 32, marca: "Ford", modelo: "Transit Van", version: "Larga AT", tags: [] },
    { id: 33, marca: "Ford", modelo: "Transit Van", version: "E-Transit", tags: [] },
    { id: 34, marca: "Ford", modelo: "Transit Chasis", version: "Chasis", tags: [] },
    { id: 35, marca: "Ford", modelo: "Transit Chasis", version: "Chasis-E", tags: [] },
    { id: 36, marca: "Ford", modelo: "Transit Minibus", version: "MT", tags: [] },
    { id: 37, marca: "Ford", modelo: "Transit Minibus", version: "AT", tags: [] },

    { id: 38, marca: "Ford", modelo: "Mustang", version: "Dark Horse", tags: [] },
    { id: 39, marca: "Ford", modelo: "Mustang", version: "GT Performance", tags: [] },
    { id: 40, marca: "Ford", modelo: "Mustang", version: "Mach-E", tags: [] },

/******************************** AUDI ******************************************/

    { id: 41, marca: "Audi", modelo: "A1", version: "Sportback", tags: [] },

    { id: 42, marca: "Audi", modelo: "A3", version: "Sportback", tags: [] },
    { id: 43, marca: "Audi", modelo: "A3", version: "Sedan", tags: [] },
    { id: 44, marca: "Audi", modelo: "A3", version: "S3 Sportback", tags: [] },
    { id: 45, marca: "Audi", modelo: "A3", version: "S3 Sedan", tags: [] },
    { id: 46, marca: "Audi", modelo: "A3", version: "RS 3 Sportback", tags: [] },
    { id: 47, marca: "Audi", modelo: "A3", version: "RS 3 Sedan", tags: [] },

    { id: 48, marca: "Audi", modelo: "A5", version: "Sedan", tags: [] },

    { id: 49, marca: "Audi", modelo: "A6", version: "Sedan", tags: [] },
    { id: 50, marca: "Audi", modelo: "A6", version: "AllRoad Quattro", tags: [] },

    { id: 51, marca: "Audi", modelo: "Q2", version: "Q2", tags: [] },

    { id: 52, marca: "Audi", modelo: "Q3", version: "Q3", tags: [] },
    { id: 53, marca: "Audi", modelo: "Q3", version: "Sportback", tags: [] },
    { id: 54, marca: "Audi", modelo: "Q3", version: "RS Sportback", tags: [] },

    { id: 55, marca: "Audi", modelo: "Q5", version: "Sportback", tags: [] },
    { id: 56, marca: "Audi", modelo: "Q5", version: "Q5", tags: [] },
    { id: 57, marca: "Audi", modelo: "Q5", version: "SQ5 Sportback", tags: [] },

    { id: 58, marca: "Audi", modelo: "Q7", version: "Q7", tags: [] },

    { id: 59, marca: "Audi", modelo: "Q8", version: "Q8", tags: [] },
    { id: 60, marca: "Audi", modelo: "Q8", version: "RS Performance", tags: [] },

/******************************** Volkswagen ******************************************/

    { id: 61, marca: "Volkswagen", modelo: "Tera", version: "Trend", tags: [] },
    { id: 62, marca: "Volkswagen", modelo: "Tera", version: "Comfort", tags: [] },
    { id: 63, marca: "Volkswagen", modelo: "Tera", version: "High", tags: [] },
    { id: 64, marca: "Volkswagen", modelo: "Tera", version: "Outfit", tags: [] },

    { id: 65, marca: "Volkswagen", modelo: "Nivus", version: "170  TSI", tags: [] },
    { id: 66, marca: "Volkswagen", modelo: "Nivus", version: "Trendile 200 TSI", tags: [] },
    { id: 67, marca: "Volkswagen", modelo: "Nivus", version: "Comfortline 200 TSI", tags: [] },
    { id: 68, marca: "Volkswagen", modelo: "Nivus", version: "Highline 200 TSI", tags: [] },
    { id: 69, marca: "Volkswagen", modelo: "Nivus", version: "Highline Outfit 200 TSI", tags: [] },

    { id: 70, marca: "Volkswagen", modelo: "T-Cross", version: "Trendline 170 TSI", tags: [] },
    { id: 71, marca: "Volkswagen", modelo: "T-Cross", version: "Trendline 200 TSI", tags: [] },
    { id: 72, marca: "Volkswagen", modelo: "T-Cross", version: "Comfortline 200 TSI", tags: [] },
    { id: 73, marca: "Volkswagen", modelo: "T-Cross", version: "Extreme 200 TSI", tags: [] },

    { id: 74, marca: "Volkswagen", modelo: "Taos", version: "Comfortline 250 TSI", tags: [] },

    { id: 75, marca: "Volkswagen", modelo: "Tiguan", version: "Life", tags: [] },
    { id: 76, marca: "Volkswagen", modelo: "Tiguan", version: "R-Line", tags: [] },

    { id: 77, marca: "Volkswagen", modelo: "Polo", version: "Track", tags: [] },
    { id: 78, marca: "Volkswagen", modelo: "Polo", version: "Comfortline", tags: [] },
    { id: 79, marca: "Volkswagen", modelo: "Polo", version: "Highline", tags: [] },

    { id: 80, marca: "Volkswagen", modelo: "Virtus", version: "MSI", tags: [] },
    { id: 81, marca: "Volkswagen", modelo: "Virtus", version: "Trendline", tags: [] },
    { id: 82, marca: "Volkswagen", modelo: "Virtus", version: "Highline", tags: [] },
    { id: 83, marca: "Volkswagen", modelo: "Virtus", version: "Exclusive", tags: [] },

    { id: 84, marca: "Volkswagen", modelo: "Vento", version: "GLI", tags: [] },

    { id: 85, marca: "Volkswagen", modelo: "Saveiro", version: "CS Trendline", tags: [] },
    { id: 86, marca: "Volkswagen", modelo: "Saveiro", version: "CD Comfortline", tags: [] },
    { id: 87, marca: "Volkswagen", modelo: "Saveiro", version: "CD Extreme", tags: [] },

    { id: 88, marca: "Volkswagen", modelo: "Amarok", version: "Trendline 4x2", tags: [] },
    { id: 89, marca: "Volkswagen", modelo: "Amarok", version: "Trendline 4x4", tags: [] },
    { id: 90, marca: "Volkswagen", modelo: "Amarok", version: "Comfortline 4x2", tags: [] },
    { id: 91, marca: "Volkswagen", modelo: "Amarok", version: "Highline", tags: [] },
    { id: 92, marca: "Volkswagen", modelo: "Amarok", version: "V6 Comfortline", tags: [] },
    { id: 93, marca: "Volkswagen", modelo: "Amarok", version: "V6 Highline", tags: [] },
    { id: 94, marca: "Volkswagen", modelo: "Amarok", version: "V6 Hero", tags: [] },
    { id: 95, marca: "Volkswagen", modelo: "Amarok", version: "V6 Black Style", tags: [] },

/******************************** KIA ******************************************/

    { id: 96, marca: "KIA", modelo: "K3", version: "Sedan EX-GT line", tags: [] },
    { id: 97, marca: "KIA", modelo: "K3", version: "Criss - EX GT line", tags: [] },
    { id: 98, marca: "KIA", modelo: "Seltos", version: "Seltos", tags: [] },
    { id: 99, marca: "KIA", modelo: "Cerato", version: "Cerato", tags: [] },
    { id: 100, marca: "KIA", modelo: "Sportage", version: "Sportage", tags: [] },
    { id: 101, marca: "KIA", modelo: "Carnival", version: "Carnival", tags: [] },
    { id: 102, marca: "KIA", modelo: "K2500", version: "K2500", tags: [] },

/******************************** ByD ******************************************/

    { id: 103, marca: "ByD", modelo: "Dolphin", version: "MINI GL", tags: [] },
    { id: 104, marca: "ByD", modelo: "Dolphin", version: "MINI GS", tags: [] },
    { id: 105, marca: "ByD", modelo: "YUAN", version: "Pro GL", tags: [] },
    { id: 106, marca: "ByD", modelo: "YUAN", version: "Pro GS", tags: [] },
    { id: 107, marca: "ByD", modelo: "SONG", version: "Pro GL", tags: [] },
    { id: 108, marca: "ByD", modelo: "SONG", version: "Pro GS", tags: [] },
    { id: 109, marca: "ByD", modelo: "ATTO 2 DM-i", version: "GS", tags: [] },
];