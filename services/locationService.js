const { generateExcelForMarket, sendLeadToApi } = require('./excelService');

// Estructura de datos para almacenar leads por mercado
const leadsByMarket = {};

function receiveLead(leadData, location) {
  const targetApi = determineTargetApi(location);
  storeLeadByMarket(leadData, targetApi);
  sendLeadToApi(leadData, targetApi);
}

function determineTargetApi(location) {
  // Lógica para asignar la API de destino basada en la variable de localización
  
  if (location === 'Zone1') {
    return 'http://api.zone1.com';
  } else if (location === 'Zone2') {
    return 'http://api.zone2.com';
  } else {
    return 'http://api.default.com';
  }
}

function storeLeadByMarket(leadData, targetApi) {
  if (!leadsByMarket[targetApi]) {
    leadsByMarket[targetApi] = [];
  }

  leadsByMarket[targetApi].push(leadData);
  generateExcelForMarket(targetApi);
}

module.exports = { receiveLead };
