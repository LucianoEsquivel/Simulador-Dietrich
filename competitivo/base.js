
// base.js
export const financiaciones = [
    {
        idPlan: 1,
        banco: "Santander",
        nombre: "Especial pickups UVA",
        descripcion: "Financiacion exclusiva para pickups",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        aplicaATodo: false,
        factorCalculo: 1000000, // Para calcular el valor de la cuota por millón financiado
        vehiculosIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88], // Aquí van los IDs que definimos antes
        
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
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
    
    // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$93.145", tna: "17,50%", cft: "23,36%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$65.250", tna: "17,50%", cft: "23,36%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$51.366", tna: "17,50%", cft: "23,36%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$37.608", tna: "17,50%", cft: "23,36%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$30.853", tna: "17,50%", cft: "23,36%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$26.898", tna: "17,50%", cft: "23,36%", ltv: "80%", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 3,
        banco: "Santander",
        nombre: "Linea UVA c/quebranto",
        descripcion: "esta financiacion aplica para toda la gama",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83.334", tna: "0%", cft: "0%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$60.947", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "10%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$47.030", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "12%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 4,
        banco: "Santander",
        nombre: "Linea UVA c/quebranto (pickups)",
        descripcion: "esta aplica para pickups nomas",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos específicos (bandera en false)
        vehiculosIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88], 

        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            // Opción con TNA 9,90%
            { plazo: "12 meses (Tasa 9,9%)", valor: "$88.822", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "4%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 9,9%)", valor: "$60.947", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "5%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 9,9%)", valor: "$47.030", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            
            // Opción con TNA 0%
            { plazo: "12 meses (Tasa 0%)", valor: "$83.334", tna: "0%", cft: "0%", ltv: "80%", gastos: "9%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 0%)", valor: "$55.556", tna: "0%", cft: "0%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 0%)", valor: "$41.667", tna: "0%", cft: "0%", ltv: "80%", gastos: "15%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 5,
        banco: "Santander",
        nombre: "Linea c/quebranto 10%",
        descripcion: "esta financiacion aplica para toda la gama",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
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
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: true, // Muestra este plan para cualquier vehículo seleccionado (bandera en true)
        vehiculosIds: [], 
        
        // Tabla de plazos completa y detallada
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$108.269", tna: "42,90%", cft: "66,23%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$80.643", tna: "42,90%", cft: "66,23%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$67.195", tna: "42,90%", cft: "66,23%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$54.445", tna: "42,90%", cft: "66,23%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$48.718", tna: "42,90%", cft: "66,23%", ltv: "80%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$45.742", tna: "42,90%", cft: "66,23%", ltv: "80%", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 7,
        banco: "Santander",
        nombre: "Tasa fija Green",
        descripcion: "financiacion exclusiva para vehiculos 100% electricos",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos eléctricos (bandera en false)
        vehiculosIds: [35, 37, 42, 130, 131, 132, 133], 
        
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
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos eléctricos (bandera en false)
        vehiculosIds: [35, 37, 42, 130, 131, 132, 133], 
        
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
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos BYD (bandera en false)
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137], 
        
        // Tabla de plazos detallada con las dos opciones de tasa
        cuotasPorMillon: [
            // Opciones con TNA 9,90%
            { plazo: "12 meses (Tasa 9,9%)", valor: "$88.822", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "5%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 9,9%)", valor: "$60.947", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "6%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 9,9%)", valor: "$47.030", tna: "9,90%", cft: "12,66%", ltv: "80%", gastos: "7%", seguro: "Cautivo" },
            
            // Opciones con TNA 0%
            { plazo: "12 meses (Tasa 0%)", valor: "$83.334", tna: "0%", cft: "0%", ltv: "80%", gastos: "12%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 0%)", valor: "$55.556", tna: "0%", cft: "0%", ltv: "80%", gastos: "15%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 0%)", valor: "$41.667", tna: "0%", cft: "0%", ltv: "80%", gastos: "19%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 10,
        banco: "Santander",
        nombre: "UVA ByD Green electricos",
        descripcion: "financiacion exclusiva para byd",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos BYD (bandera en false)
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137], 
        
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
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, // Solo para vehículos BYD (bandera en false)
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137], 
        
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
        nombre: "Dolphin GL (UVA)",
        descripcion: "Financiacion exclusiva para Dolphin GL",
        tipoPersona: "Ambas", // O "Física" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [130], 
        
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$22.000.000", gastos: "11%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "0%", ltv: "$20.000.000", gastos: "14,7%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 13,
        banco: "Santander",
        nombre: "Song PRO GL (UVA)",
        descripcion: "Financiacion exclusiva para Song PRO GL",
        tipoPersona: "Ambas", // O "Física" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [134], 
        
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$32.000.000", gastos: "11%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "0%", ltv: "$28.000.000", gastos: "14,7%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 14,
        banco: "Santander",
        nombre: "Dolphin GL (FIJA)",
        descripcion: "Financiacion exclusiva para Dolphin GL",
        tipoPersona: "Ambas", // O "Física" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [130], 
        
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$11.000.000", gastos: "23%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "0%", ltv: "$8.000.000", gastos: "31,1%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 15,
        banco: "Santander",
        nombre: "Song PRO GL (FIJA)",
        descripcion: "Financiacion exclusiva para Song PRO GL",
        tipoPersona: "Ambas", // O "Física" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [134], 
        
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$16.000.000", gastos: "23%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "0%", ltv: "$11.000.000", gastos: "31,1%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 16,
        banco: "Santander",
        nombre: "Seltos UVA",
        descripcion: "financiacion exclusiva para KIA Seltos",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [124], 
        
        // Tabla de plazos en formato compacto (un objeto por línea)
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$27.500.000", gastos: "12%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$19.000.000", gastos: "16,50%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 17,
        banco: "Santander",
        nombre: "k2500 UVA",
        descripcion: "financiacion exclusiva para KIA K2500",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [129], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$24.000.000", gastos: "11%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "15,1%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 18,
        banco: "Santander",
        nombre: "Tasman X-PRO UVA",
        descripcion: "financiacion exclusiva para Tasman X-PRO",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [137], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$66.000.000", gastos: "10.1%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$46.500.000", gastos: "13,5%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 19,
        banco: "Santander",
        nombre: "Seltos Tasa Fija",
        descripcion: "financiacion exclusiva para Seltos",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [124], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "25%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$12.000.000", gastos: "33,46%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 20,
        banco: "Santander",
        nombre: "k2500 Tasa fija",
        descripcion: "financiacion exclusiva para K2500",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [129], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "21,6%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$12.000.000", gastos: "29,2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 21,
        banco: "Santander",
        nombre: "Tasman X-PRO FIJA",
        descripcion: "financiacion exclusiva para Tasman X-PRO",
        tipoPersona: "Ambas", // O "Jurídica" o "Ambas"
        factorCalculo: 1000000,
        aplicaATodo: false, 
        vehiculosIds: [137], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$27.000.000", gastos: "21.6%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,55", tna: "0%", cft: "S/D", ltv: "$10.500.000", gastos: "29,2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 22,
        banco: "ICBC",
        nombre: "Especial Ranger XL y XLS (mayorista)",
        descripcion: "Financiacion exclusiva para Ranger XL y XLS",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        aplicaATodo: false, 
        factorCalculo: 1000,
        vehiculosIds: [1, 2, 3, 4, 5, 6, 7, 9, 10], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            // Opciones Seguro Cautivo
            { plazo: "12 meses", valor: "$90,93", tna: "14,90%", cft: "17,77%", ltv: "40%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$63,18", tna: "39,90%", cft: "54,19%", ltv: "50%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$48,90", tna: "37,90%", cft: "50,93%", ltv: "50%", gastos: "2%", seguro: "Cautivo" },
            
            
            // Opciones Seguro Liberado
            { plazo: "12 meses", valor: "$91,90", tna: "16,90%", cft: "20,36%", ltv: "40%", gastos: "2%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$64,38", tna: "41,90%", cft: "57,50%", ltv: "50%", gastos: "2%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$50,18", tna: "39,90%", cft: "54,19%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 23,
        banco: "ICBC",
        nombre: "Transit lib. y caut. (mayorista)",
        descripcion: "Financiacion exclusiva para Transit menos E-Transit",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        aplicaATodo: false,
        factorCalculo: 1000, 
        vehiculosIds: [31, 32, 33, 34, 36, 38, 39], 
        
        cuotasPorMillon: [
            // Opciones Seguro Cautivo
            { plazo: "12 meses", valor: "$83,33", tna: "0,0%", cft: "0,0%", ltv: "60%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$50,74", tna: "17,90%", cft: "21,67%", ltv: "75%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$43,99", tna: "30,00%", cft: "38,68%", ltv: "75%", gastos: "2%", seguro: "Cautivo" },
            
            // Opciones Seguro Liberado
            { plazo: "12 meses", valor: "$83,33", tna: "0,0%", cft: "0,0%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$51,81", tna: "19,90%", cft: "24,35%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$45,21", tna: "32,00%", cft: "41,69%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 24,
        banco: "ICBC",
        nombre: "General (liberado, cautivo) (mayorista)",
        descripcion: "Financiacion exclusiva para toda la gama Ford",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        aplicaATodo: false,
        factorCalculo: 1000, 
        vehiculosIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] , 
        
        cuotasPorMillon: [
            // Opciones Seguro Cautivo
            { plazo: "12 meses", valor: "$112,45", tna: "47,90%", cft: "71,96%", ltv: "75%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$69,23", tna: "47,90%", cft: "71,94%", ltv: "75%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$56,71", tna: "47,90%", cft: "71,93%", ltv: "75%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$51,19", tna: "47,90%", cft: "71,91%", ltv: "75%", gastos: "2%", seguro: "Cautivo" },
            
            // Opciones Seguro Liberado
            { plazo: "12 meses", valor: "$111,81", tna: "50,90%", cft: "77,49%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$71,11", tna: "50,90%", cft: "77,47%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$58,76", tna: "50,90%", cft: "77,45%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$53,40", tna: "50,90%", cft: "77,44%", ltv: "75%", gastos: "2%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 25,
        banco: "ICBC",
        nombre: "Especial Mi Pyme Ranger (mayorista)",
        descripcion: "Financiacion exclusiva para Ranger (excepto Raptor)",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 
        
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$54,93", tna: "23,90%", cft: "29,37%", ltv: "50%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$45,72", tna: "30,90%", cft: "38,94%", ltv: "60%", gastos: "2%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 26,
        banco: "ICBC",
        nombre: "Especial mi Pyme transit (mayorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [31, 32, 33, 34, 36, 38, 39], 
        
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$54,93", tna: "23,90%", cft: "29,37%", ltv: "50%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$45,72", tna: "30,90%", cft: "38,94%", ltv: "60%", gastos: "2%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 27,
        banco: "ICBC",
        nombre: "tasa especial transit UVA (mayorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Ambas", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [31, 32, 33, 34, 36, 38, 39], 
        
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$47,23", tna: "10%", cft: "12,79%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$33,21", tna: "10%", cft: "12,79%", ltv: "60%", gastos: "2%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 28,
        banco: "ICBC",
        nombre: "Especial Ranger UVA (lib) (mayorista)",
        descripcion: "Financiacion exclusiva para Ranger",
        tipoPersona: "Jurídica", // O "Física" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 
        
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$94,01", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$52,24", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$38,52", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$31,80", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$27,89", tna: "19%", cft: "25,57%", ltv: "60%", gastos: "2%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 29,
        banco: "ICBC",
        nombre: "Everest (minorista)",
        descripcion: "Financiacion exclusiva para Everest",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [30], 
        
        cuotasPorMillon: [
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$30.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$49,86", tna: "14,90%", cft: "19,60%", ltv: "$30.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 30,
        banco: "ICBC",
        nombre: "Bronco Sport (minorista)",
        descripcion: "Financiacion exclusiva para Bronco Sport",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [26, 27], 
        
        cuotasPorMillon: [
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$15.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 31,
        banco: "ICBC",
        nombre: "Territory Titanium (minorista)",
        descripcion: "Financiacion exclusiva para Territory Titanium",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [25], 
        
        cuotasPorMillon: [
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 32,
        banco: "ICBC",
        nombre: "Territory (minorista)",
        descripcion: "Financiacion exclusiva para Territory",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [23, 24, 25], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$15.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$15.000.000", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 33,
        banco: "ICBC",
        nombre: "tasa especial uva ranger (minorista)",
        descripcion: "Financiacion exclusiva para Ranger, excepto Raptor",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "0%", ltv: "60%", gastos: "17%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$27,78", tna: "0%", cft: "0%", ltv: "60%", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 34,
        banco: "ICBC",
        nombre: "tasa especial ranger (minorista)",
        descripcion: "Financiacion exclusiva para Ranger, excepto Raptor",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 
        
        // Tabla de plazos compacta - Ordenada por combinación de Tasa/Gastos
        cuotasPorMillon: [
            { plazo: "12 meses (Tasa 0% - Gtos 2%)", valor: "$83,33", tna: "0%", cft: "0%", ltv: "25%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 19% - Gtos 6%)", valor: "$52,77", tna: "19,90%", cft: "26,92%", ltv: "25%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "12 meses (Tasa 19% - Gtos 17%)", valor: "$94,53", tna: "19%", cft: "26,92%", ltv: "$25.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "18 meses (Tasa 0% - Gtos 17%)", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$30.000.000", gastos: "17%", seguro: "Cautivo" },
            { plazo: "12 meses (Tasa 0% - Gtos 17%)", valor: "$83,33", tna: "0%", cft: "0%", ltv: "80%", gastos: "17%", seguro: "Cautivo" },
            { plazo: "24 meses (Tasa 19% - Gtos 17%)", valor: "$52,77", tna: "19,90%", cft: "26,92%", ltv: "80%", gastos: "17%", seguro: "Cautivo" },
            { plazo: "36 meses (Tasa 30% - Gtos 17%)", valor: "$45,47", tna: "29,90%", cft: "42,82%", ltv: "60%", gastos: "17%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 35,
        banco: "ICBC",
        nombre: "nueva tasa transit UVA (minorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [31, 32, 33, 34, 36, 38, 39], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "0%", ltv: "60%", gastos: "17%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$27,78", tna: "0%", cft: "0%", ltv: "60%", gastos: "17%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 36,
        banco: "ICBC",
        nombre: "tasa especial transit (minorista)",
        descripcion: "Financiacion exclusiva para Transit (excepto e-transit)",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [31, 32, 33, 34, 36, 38, 39], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "60%", gastos: "2%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$52,77", tna: "19,90%", cft: "26,92%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$45,53", tna: "30,00%", cft: "42,99%", ltv: "75%", gastos: "2%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 37,
        banco: "ICBC",
        nombre: "Tasa especial Dolphin mini GL 0km",
        descripcion: "Aplica para Dolphin mini GL",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$11.000.000", gastos: "7%", seguro: "Liberado" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$8.000.000", gastos: "7%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 38,
        banco: "ICBC",
        nombre: "Tasa especial Song GL 0km",
        descripcion: "Aplica para Song GL 0km",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [134], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$16.000.000", gastos: "7%", seguro: "Liberado" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$11.500.000", gastos: "7%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 39,
        banco: "ICBC",
        nombre: "Tasa especial UVA Dolphin mini GL 0km",
        descripcion: "Aplica para Dolphin mini GL 0km",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$22.000.000", gastos: "7%", seguro: "Liberado" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$20.000.000", gastos: "7%", seguro: "Liberado" }
        ]
    },

    {
        idPlan: 40,
        banco: "ICBC",
        nombre: "Tasa especial UVA SONG GL 0km",
        descripcion: "Aplica para Song GL 0km",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [134], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "0%", ltv: "$32.000.000", gastos: "7%", seguro: "Liberado" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "0%", ltv: "$28.000.000", gastos: "7%", seguro: "Liberado" }
        ]
    },

     {
        idPlan: 41,
        banco: "ICBC",
        nombre: "Tasa GREEN ByD 0km y usados",
        descripcion: "Aplica para todos los vehiculos electricos e hibridos de la marca BYD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137, 139, 140], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$108,27", tna: "42,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$67,19", tna: "42,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$54,45", tna: "42,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$48,72", tna: "42,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$45,74", tna: "42,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 42,
        banco: "ICBC",
        nombre: "Tasa GREEN PROMOCIONAL ByD 0km y usados",
        descripcion: "Aplica para todos los vehiculos electricos e hibridos de la marca BYD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137, 139, 140], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$113,24", tna: "50,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$72,59", tna: "50,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$60,32", tna: "50,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$55,04", tna: "50,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$52,45", tna: "50,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 43,
        banco: "ICBC",
        nombre: "Tasa GREEN OPORTUNIDAD 0km y usados",
        descripcion: "Aplica para todos los vehiculos electricos e hibridos de la marca BYD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137, 139, 140], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$111,37", tna: "47,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$70,54", tna: "47,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$58,09", tna: "47,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$52,63", tna: "47,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$49,90", tna: "47,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 44,
        banco: "ICBC",
        nombre: "Tasa GREEN OPORTUNIDAD",
        descripcion: "Aplica para todos los vehiculos electricos e hibridos de la marca BYD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137, 139, 140], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$116,40", tna: "55,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$76,05", tna: "55,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$64,11", tna: "55,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$59,13", tna: "55,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$56,79", tna: "55,90%", cft: "S/D", ltv: "80%", gastos: "7%", seguro: "Liberado" },
        ]
    },

    {
        idPlan: 45,
        banco: "ICBC",
        nombre: "Tasa UVAS ByD 0km y usados",
        descripcion: "Aplica para todos los vehiculos electricos e hibridos de la marca BYD",
        tipoPersona: "Física", // O "Jurídica" o "Ambas"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137, 139, 140], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$91,14", tna: "14,90%", cft: "S/D", ltv: "60%", gastos: "7%", seguro: "Liberado" },
            { plazo: "24 meses", valor: "$45,35", tna: "14,90%", cft: "S/D", ltv: "60%", gastos: "7%", seguro: "Liberado" },
            { plazo: "36 meses", valor: "$35,52", tna: "14,90%", cft: "S/D", ltv: "60%", gastos: "7%", seguro: "Liberado" },
            { plazo: "48 meses", valor: "$28,69", tna: "14,90%", cft: "S/D", ltv: "60%", gastos: "7%", seguro: "Liberado" },
            { plazo: "60 meses", valor: "$24,65", tna: "14,90%", cft: "S/D", ltv: "60%", gastos: "7%", seguro: "Liberado" },
        ]
    },




    {
        idPlan: 46,
        banco: "Volkswagen Financiera",
        nombre: "Audi A1",
        descripcion: "Financiacion exclusiva para Audi A1",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [43], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses (Tasa 0%)", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "14,1%", seguro: "Cautivo" },
            { plazo: "12 meses (Tasa 9.9%)", valor: "$88,82", tna: "9,90%", cft: "S/D", ltv: "$30.000.000", gastos: "14,1%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 47,
        banco: "Volkswagen Financiera",
        nombre: "UVA Audi",
        descripcion: "Financiacion exclusiva para audi A3",
        tipoPersona: "Fisica", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [44, 45, 46, 47, 48, 49],
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$25.500.000", gastos: "13,5%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$60,95", tna: "0%", cft: "S/D", ltv: "$25.500.000", gastos: "13,5%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 48, //cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "Amarok financia mas",
        descripcion: "Financiacion exclusiva para amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$40.000.000", gastos: "15,915%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "S/D", ltv: "$26.000.000", gastos: "16,52%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$18.000.000", gastos: "15,31%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 49, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "Amarok sin quebranto",
        descripcion: "Financiacion exclusiva para amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 50, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "UVA Amarok (24)",
        descripcion: "Financiacion exclusiva para amarok",
        tipoPersona: "Física", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$20.000.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },


    {
        idPlan: 51, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "Autos sin quebranto",
        descripcion: "Tera Highline y Outfit, T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos Highline y Highline Bi Tono y Nivus Highline y Nivus Outfit Vigencia: desde el 7/05/2026, Disponible: Persona física, jurídica y venta directa ",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [92, 93, 95, 96, 99, 100, 103, 104, 105, 107, 108], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },
    
    {
        idPlan: 52, // cambiar id luego
        banco: "Volkswagen Financiera",
        nombre: "UVA Autos",
        descripcion: "Tera Highline y Outfit, T-Cross Comfortline, Highline y Extreme, Polo Comfortline y Highline y Taos Highline y Highline Bi Tono y Nivus Highline y Nivus Outfit Vigencia: desde el 7/05/2026 hasta el 31/05/2026, Disponible: Persona física ",
        tipoPersona: "Física", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [92, 93, 95, 96, 99, 100, 103, 104, 105, 107, 108], 
        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "24 meses", valor: "$41,67", tna: "0%", cft: "S/D", ltv: "$19.000.000", gastos: "2%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 53,
        banco: "Volkswagen Financiera",
        nombre: "Especial autos",
        descripcion: "Financiacion exclusiva para volkswagen, excepto amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119], 

        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$83,33", tna: "0%", cft: "S/D", ltv: "$25.000.000", gastos: "14,705%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$55,56", tna: "0%", cft: "S/D", ltv: "$17.000.000", gastos: "16,52%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$47,03", tna: "9,90%", cft: "S/D", ltv: "$17.000.000", gastos: "16,52%", seguro: "Cautivo" }
        ]
    },

    {
        idPlan: 54,
        banco: "Volkswagen Financiera",
        nombre: "Autos largo plazo",
        descripcion: "Financiacion exclusiva para volkswagen, excepto amarok",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 1000,
        aplicaATodo: false, 
        vehiculosIds: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119], 

        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "36 meses", valor: "$45,47", tna: "29,9%", cft: "S/D", ltv: "$32.000.000", gastos: "13,495%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$39,12", tna: "29,9%", cft: "S/D", ltv: "$32.000.000", gastos: "14,1%", seguro: "Cautivo" },
            
        ]
    },

    {
        idPlan: 55,
        banco: "BBVA",
        nombre: "Tasa UVA ByD",
        descripcion: "Financiacion exclusiva para ByD",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 100000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137], 

        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$8.995", tna: "11,90%", cft: "15,39%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$6.206", tna: "11,90%", cft: "15,39%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$4.815", tna: "11,90%", cft: "15,39%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$3.429", tna: "11,90%", cft: "15,39%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$2.742", tna: "11,90%", cft: "15,39%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 56,
        banco: "BBVA",
        nombre: "Tasa Tradicional ByD",
        descripcion: "Financiacion exclusiva para ByD",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 100000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137], 

        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$10.399",tna: "35,90%", cft: "53,22%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$7.624", tna: "35,90%", cft: "53,22%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$6.263", tna: "35,90%", cft: "53,22%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$4.952", tna: "35,90%", cft: "53,22%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "48 meses", valor: "$4.344", tna: "35,90%", cft: "53,22%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "60 meses", valor: "$4.014", tna: "35,90%", cft: "53,22%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
        ]
    },

    {
        idPlan: 57,
        banco: "BBVA",
        nombre: "Tasa 0% + UVA c/quebranto ByD",
        descripcion: "Financiacion exclusiva para ByD",
        tipoPersona: "Ambas", // O "Jurídica" o "Física"
        factorCalculo: 100000,
        aplicaATodo: false, 
        vehiculosIds: [130, 131, 132, 133, 134, 135, 136, 137], 

        
        // Tabla de plazos en formato compacto
        cuotasPorMillon: [
            { plazo: "12 meses", valor: "$8.333", tna: "0%", cft: "0%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "18 meses", valor: "$5.555", tna: "0%", cft: "0%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "24 meses", valor: "$4.166", tna: "0%", cft: "0%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
            { plazo: "36 meses", valor: "$2.777", tna: "0%", cft: "0%", ltv: "70%", gastos: "2%", seguro: "Cautivo" },
        ]
    },

];

export const vehiculos = [

/******************************** Ford ******************************************/

    { id: 1, marca: "Ford", modelo: "Ranger", version: "XL 4x4 Chasis", tags: [] },
    { id: 2, marca: "Ford", modelo: "Ranger", version: "XL 4x2 C/S", tags: [] },
    { id: 3, marca: "Ford", modelo: "Ranger", version: "XL 4x4 C/S", tags: [] },
    { id: 4, marca: "Ford", modelo: "Ranger", version: "XL 4x2 MT", tags: [] },
    { id: 5, marca: "Ford", modelo: "Ranger", version: "XL 4x4 MT", tags: [] },
    { id: 6, marca: "Ford", modelo: "Ranger", version: "XL 4x2 AT", tags: [] },
    { id: 7, marca: "Ford", modelo: "Ranger", version: "XL 4x4 AT", tags: [] },
    { id: 8, marca: "Ford", modelo: "Ranger", version: "Black 4x4", tags: [] },
    { id: 9, marca: "Ford", modelo: "Ranger", version: "XLS 4x2", tags: [] },
    { id: 10, marca: "Ford", modelo: "Ranger", version: "XLS 4x4 3.0 V6", tags: [] },
    { id: 11, marca: "Ford", modelo: "Ranger", version: "XLT 4x2", tags: [] },
    { id: 12, marca: "Ford", modelo: "Ranger", version: "XLT 4x4", tags: [] },
    { id: 13, marca: "Ford", modelo: "Ranger", version: "XLT 4x4 3.0 V6", tags: [] },
    { id: 14, marca: "Ford", modelo: "Ranger", version: "Limited 2.0", tags: [] },
    { id: 15, marca: "Ford", modelo: "Ranger", version: "Limited + 3.0", tags: [] },
    { id: 16, marca: "Ford", modelo: "Ranger", version: "Raptor", tags: [] },

    { id: 17, marca: "Ford", modelo: "Maverick", version: "XLT", tags: [] },
    { id: 18, marca: "Ford", modelo: "Maverick", version: "Lariat Hibrida", tags: [] },
    { id: 19, marca: "Ford", modelo: "Maverick", version: "Tremor", tags: [] },

    { id: 20, marca: "Ford", modelo: "F-150", version: "Lariat", tags: [] },
    { id: 21, marca: "Ford", modelo: "F-150", version: "Tremor", tags: [] },
    { id: 22, marca: "Ford", modelo: "F-150", version: "Raptor", tags: [] },

    { id: 23, marca: "Ford", modelo: "Territory", version: "SEL", tags: [] },
    { id: 24, marca: "Ford", modelo: "Territory", version: "Trend Hibrida", tags: [] },
    { id: 25, marca: "Ford", modelo: "Territory", version: "Titanium", tags: [] },

    { id: 26, marca: "Ford", modelo: "Bronco Sport", version: "BigBend", tags: [] },
    { id: 27, marca: "Ford", modelo: "Bronco Sport", version: "Badlands", tags: [] },

    { id: 28, marca: "Ford", modelo: "Kuga", version: "Platinum", tags: [] },
    { id: 29, marca: "Ford", modelo: "Bronco ", version: "Badlands", tags: [] },
    { id: 30, marca: "Ford", modelo: "Everest ", version: "Titanium", tags: [] },

    { id: 31, marca: "Ford", modelo: "Transit Van", version: "Mediana MT", tags: [] },
    { id: 32, marca: "Ford", modelo: "Transit Van", version: "Mediana TE MT", tags: [] },
    { id: 33, marca: "Ford", modelo: "Transit Van", version: "Larga TE MT", tags: [] },
    { id: 34, marca: "Ford", modelo: "Transit Van", version: "Larga AT", tags: [] },
    { id: 35, marca: "Ford", modelo: "Transit Van", version: "E-Transit", tags: [] },
    { id: 36, marca: "Ford", modelo: "Transit Chasis", version: "Chasis", tags: [] },
    { id: 37, marca: "Ford", modelo: "Transit Chasis", version: "Chasis-E", tags: [] },
    { id: 38, marca: "Ford", modelo: "Transit Minibus", version: "MT", tags: [] },
    { id: 39, marca: "Ford", modelo: "Transit Minibus", version: "AT", tags: [] },

    { id: 40, marca: "Ford", modelo: "Mustang", version: "Dark Horse", tags: [] },
    { id: 41, marca: "Ford", modelo: "Mustang", version: "GT Performance", tags: [] },
    { id: 42, marca: "Ford", modelo: "Mustang", version: "Mach-E", tags: [] },

/******************************** AUDI ******************************************/

    { id: 43, marca: "Audi", modelo: "A1", version: "Sportback 30 TFSI", tags: [] },

    { id: 44, marca: "Audi", modelo: "A3", version: "Sportback 1.4 TFSI", tags: [] },
    { id: 45, marca: "Audi", modelo: "A3", version: "Sportback 1.4 TFSI Advanced", tags: [] },
    { id: 46, marca: "Audi", modelo: "A3", version: "Sportback 2.0 TFSI S-Line", tags: [] },
    { id: 47, marca: "Audi", modelo: "A3", version: "Sedan 1.4 TFSI", tags: [] },
    { id: 48, marca: "Audi", modelo: "A3", version: "Sedan 1.4 TFSI Advanced", tags: [] },
    { id: 49, marca: "Audi", modelo: "A3", version: "Sedan 2.0 TFSI S-Line", tags: [] },

    { id: 50, marca: "Audi", modelo: "S3", version: "Sportback", tags: [] },
    { id: 51, marca: "Audi", modelo: "S3", version: "Sedan", tags: [] },
    { id: 52, marca: "Audi", modelo: "RS3", version: "Sportback", tags: [] },
    { id: 53, marca: "Audi", modelo: "RS3", version: "Sedan", tags: [] },

    { id: 54, marca: "Audi", modelo: "A5", version: "Advanced", tags: [] },
    { id: 55, marca: "Audi", modelo: "A5", version: "Serie", tags: [] },
    { id: 56, marca: "Audi", modelo: "A5", version: "S-Line quattro", tags: [] },

    { id: 57, marca: "Audi", modelo: "S5", version: "Avant", tags: [] },

    { id: 58, marca: "Audi", modelo: "A6", version: "S line quattro", tags: [] },

    { id: 59, marca: "Audi", modelo: "Q2", version: "35 TFSI Advanced", tags: [] },
    { id: 60, marca: "Audi", modelo: "Q2", version: "40 TFSI quattro", tags: [] },

    { id: 61, marca: "Audi", modelo: "Q3", version: "Advanced", tags: [] },
    { id: 62, marca: "Audi", modelo: "Q3", version: "Advanced Plus (WPZ)", tags: [] },
    { id: 63, marca: "Audi", modelo: "Q3", version: "Sportback Advanced", tags: [] },
    { id: 64, marca: "Audi", modelo: "Q3", version: "Sportback Advanced Plus", tags: [] },

    { id: 65, marca: "Audi", modelo: "Q5", version: "Advanced", tags: [] },
    { id: 66, marca: "Audi", modelo: "Q5", version: "Advanced Plus", tags: [] },
    { id: 67, marca: "Audi", modelo: "Q5", version: "Sportback Advanced", tags: [] },
    { id: 68, marca: "Audi", modelo: "Q5", version: "Sportback S-Line", tags: [] },
    { id: 69, marca: "Audi", modelo: "SQ5", version: "Sportback", tags: [] },

    { id: 70, marca: "Audi", modelo: "Q6", version: "50 E-Tron Performance", tags: [] },

    { id: 71, marca: "Audi", modelo: "Q7", version: "55 TFSI S-Line quattro", tags: [] },

    { id: 72, marca: "Audi", modelo: "Q8", version: "55 TFSI quattro", tags: [] },
    { id: 73, marca: "Audi", modelo: "RS Q8", version: "Performance", tags: [] },
    
/******************************** Volkswagen ******************************************/
    { id: 74, marca: "Volkswagen", modelo: "Amarok", version: "Trendline TDI MT 4x2 G2", tags: [] },
    { id: 75, marca: "Volkswagen", modelo: "Amarok", version: "Trendline TDI MT 4x4 G2", tags: [] },
    { id: 76, marca: "Volkswagen", modelo: "Amarok", version: "Comfortline TDI MT 4x2 G2", tags: [] },
    { id: 77, marca: "Volkswagen", modelo: "Amarok", version: "Comfortline TDI MT 4x2 SE G2", tags: [] },
    { id: 78, marca: "Volkswagen", modelo: "Amarok", version: "Comfortline TDI AT 4x2 G2", tags: [] },
    { id: 79, marca: "Volkswagen", modelo: "Amarok", version: "Comfortline TDI AT 4x2 SE G2", tags: [] },
    { id: 80, marca: "Volkswagen", modelo: "Amarok", version: "Comfortline V6 AT 4x4 G2", tags: [] },
    { id: 81, marca: "Volkswagen", modelo: "Amarok", version: "Highline TDI MT 4x2 G2", tags: [] },
    { id: 82, marca: "Volkswagen", modelo: "Amarok", version: "Highline TDI AT 4x2 G2", tags: [] },
    { id: 83, marca: "Volkswagen", modelo: "Amarok", version: "Highline TDI AT 4x2 SE G2", tags: [] },
    { id: 84, marca: "Volkswagen", modelo: "Amarok", version: "Highline V6 AT 4x4 G2", tags: [] },
    { id: 85, marca: "Volkswagen", modelo: "Amarok", version: "Extreme V6 AT 4x4 G2", tags: [] },
    { id: 86, marca: "Volkswagen", modelo: "Amarok", version: "Hero V6 AT 4x4 G2", tags: [] },
    { id: 87, marca: "Volkswagen", modelo: "Amarok", version: "Black Style V6 AT 4x4 G2", tags: [] },
    { id: 88, marca: "Volkswagen", modelo: "Amarok", version: "Black Style V6 AT 4x4 SE G2", tags: [] },

    { id: 89, marca: "Volkswagen", modelo: "Nivus", version: "170  TSI", tags: [] },
    { id: 90, marca: "Volkswagen", modelo: "Nivus", version: "Trendile 200 TSI", tags: [] },
    { id: 91, marca: "Volkswagen", modelo: "Nivus", version: "Comfortline 200 TSI", tags: [] },
    { id: 92, marca: "Volkswagen", modelo: "Nivus", version: "Highline 200 TSI", tags: [] },
    { id: 93, marca: "Volkswagen", modelo: "Nivus", version: "Highline Outfit 200 TSI", tags: [] },

    { id: 94, marca: "Volkswagen", modelo: "Polo", version: "Track", tags: [] },
    { id: 95, marca: "Volkswagen", modelo: "Polo", version: "Comfortline", tags: [] },
    { id: 96, marca: "Volkswagen", modelo: "Polo", version: "Highline", tags: [] },

    { id: 97, marca: "Volkswagen", modelo: "Tera", version: "Trend", tags: [] },
    { id: 98, marca: "Volkswagen", modelo: "Tera", version: "Comfort", tags: [] },
    { id: 99, marca: "Volkswagen", modelo: "Tera", version: "High", tags: [] },
    { id: 100, marca: "Volkswagen", modelo: "Tera", version: "Outfit", tags: [] },

    { id: 101, marca: "Volkswagen", modelo: "T-Cross", version: "Trendline 170 TSI MT", tags: [] },
    { id: 102, marca: "Volkswagen", modelo: "T-Cross", version: "Trendline 200 TSI AT", tags: [] },
    { id: 103, marca: "Volkswagen", modelo: "T-Cross", version: "Comfortline 200 TSI AT", tags: [] },
    { id: 104, marca: "Volkswagen", modelo: "T-Cross", version: "Highline 200 TSI AT", tags: [] },
    { id: 105, marca: "Volkswagen", modelo: "T-Cross", version: "Extreme 200 TSI AT", tags: [] },

    { id: 106, marca: "Volkswagen", modelo: "Taos", version: "Comfortline 250 TSI AT", tags: [] },
    { id: 107, marca: "Volkswagen", modelo: "Taos", version: "Highline 250 TSI AT", tags: [] },
    { id: 108, marca: "Volkswagen", modelo: "Taos", version: "Highline BiTono 250 TSI AT", tags: [] },

    { id: 109, marca: "Volkswagen", modelo: "Tiguan", version: "Life", tags: [] },
    { id: 110, marca: "Volkswagen", modelo: "Tiguan", version: "R-Line", tags: [] },

    { id: 111, marca: "Volkswagen", modelo: "Virtus", version: "MSI", tags: [] },
    { id: 112, marca: "Volkswagen", modelo: "Virtus", version: "Trendline", tags: [] },
    { id: 113, marca: "Volkswagen", modelo: "Virtus", version: "Comfortline", tags: [] },
    { id: 114, marca: "Volkswagen", modelo: "Virtus", version: "Highline", tags: [] },
    { id: 115, marca: "Volkswagen", modelo: "Virtus", version: "Exclusive", tags: [] },

    { id: 116, marca: "Volkswagen", modelo: "Vento", version: "GLI", tags: [] },

    { id: 117, marca: "Volkswagen", modelo: "Saveiro", version: "CS Trendline", tags: [] },
    { id: 118, marca: "Volkswagen", modelo: "Saveiro", version: "CD Comfortline", tags: [] },
    { id: 119, marca: "Volkswagen", modelo: "Saveiro", version: "CD Extreme", tags: [] },

/******************************** KIA ******************************************/

    { id: 120, marca: "KIA", modelo: "K3", version: "Sedan EX", tags: [] },
    { id: 121, marca: "KIA", modelo: "K3", version: "Sedan EX GT line", tags: [] },
    { id: 122, marca: "KIA", modelo: "K3", version: "Cross - EX", tags: [] },
    { id: 123, marca: "KIA", modelo: "K3", version: "Cross GT Line", tags: [] },
    { id: 124, marca: "KIA", modelo: "Seltos", version: "Seltos", tags: [] },
    
    { id: 125, marca: "KIA", modelo: "K4", version: "Sedan EX", tags: [] },
    { id: 126, marca: "KIA", modelo: "K4", version: "Sedan GT line", tags: [] },

    { id: 127, marca: "KIA", modelo: "Sportage", version: "Sportage X-Line 2.0 R AWD AT", tags: [] },

    { id: 128, marca: "KIA", modelo: "Sportage", version: "Carnival SX 2.2 R A/T", tags: [] },

    { id: 129, marca: "KIA", modelo: "K2500", version: "K2500", tags: [] },
    { id: 138, marca: "KIA", modelo: "TASMAN", version: "X-PRO", tags: [] },

/******************************** ByD ******************************************/

    { id: 130, marca: "ByD", modelo: "Dolphin", version: "MINI GL", tags: [] },
    { id: 131, marca: "ByD", modelo: "Dolphin", version: "MINI GS", tags: [] },
    { id: 132, marca: "ByD", modelo: "YUAN", version: "Pro GL", tags: [] },
    { id: 133, marca: "ByD", modelo: "YUAN", version: "Pro GS", tags: [] },
    { id: 134, marca: "ByD", modelo: "SONG", version: "Pro GL", tags: [] },
    { id: 135, marca: "ByD", modelo: "SONG", version: "Pro GS", tags: [] },
    { id: 136, marca: "ByD", modelo: "ATTO 2 DM-i", version: "GS", tags: [] },
    { id: 137, marca: "ByD", modelo: "SHARK", version: "Shark", tags: [] },
    { id: 140, marca: "ByD", modelo: "SEAL", version: "U DM-I", tags: [] },

];