import React, { useState } from 'react';
import Report from './Report';
import Logo from './components/Logo';
import axios from 'axios';

//importación de dependencias

const App = () => {
  const [location, setLocation] = useState('');
  const [leadData, setLeadData] = useState({});

  //Almacena datos introducidos por el usuario de locacion y leads
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLeadDataChange = (event) => {
    setLeadData({
      ...leadData,
      [event.target.name]: event.target.value,
    });
  };
// Actualiza los cambios hechos por el usuario en los imputs

const handleSubmit = () => {
  // Verifica si hay suficiente información para enviar el lead
  if (!location || !leadData.name || !leadData.email) {
    console.error('Por favor, complete todos los campos antes de enviar el lead.');
    return;
  }

  // Construye el objeto de lead con la ubicación y datos del lead
  const leadToSend = {
    location: location,
    name: leadData.name,
    email: leadData.email,
  };

  // Envía el lead al servidor utilizando una solicitud HTTP (por ejemplo, con axios)
  // Aquí deberías reemplazar la URL con la URL real de tu API y ajustar la configuración según sea necesario
  axios.post('http://tu-api.com/enviar-lead', leadToSend)
    .then(response => {
      // Maneja la respuesta del servidor si es necesario
      console.log('Lead enviado exitosamente:', response.data);

      // Puedes realizar otras acciones aquí, como limpiar los campos de entrada
      setLocation('');
      setLeadData({});
    })
    .catch(error => {
      // Maneja los errores de la solicitud al servidor
      console.error('Error al enviar el lead:', error);
    });
};

  return (
    <div>
      <Logo />
      <h1>FiltrosMarket</h1>
      <div>
        <label htmlFor="location">Location: </label>
        <input type="text" id="location" name="location" value={location} onChange={handleLocationChange} />
      </div>
      <br></br>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={leadData.name || ''} onChange={handleLeadDataChange} />
      </div>
      <br></br>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" value={leadData.email || ''} onChange={handleLeadDataChange} />
      </div>
      <br></br>
      <button onClick={handleSubmit}>Submit Lead</button>
      <hr />
      <Report />
    </div>
  );
};

export default App;
