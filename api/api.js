const express = require('express');
const router = express.Router();

//importacion de librerias express para aplicacion y router para crear rutas especificas de l API

const { receiveLead } = require('../services/locationService');
//importacion de funcion receiveLeads desde LocationService que tiene la lógica de reparticion de leads

router.post('/receive-lead', (req, res) => {
  const leadData = req.body;
  const location = leadData.location;
// Lógica para determinar la API de destino y procesar el lead saca el cuerpo del lead y la locacion

  receiveLead(leadData, location);

//llama a función que contiene la lógica de distribución de leads en LocationServices ruta post a este endponit

  res.status(200).json({ message: 'Lead received and processed successfully.' });
});
//Responde con un mensaje JSON indicando que el lead ha sido recibido y procesado exitosamente.

module.exports = router;
