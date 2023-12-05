import React, { useState } from 'react';

const Report = () => {
  const [selectedMarket, setSelectedMarket] = useState('');

  // Con el hook useState crea un estado selectedMarket que almacena el valor del mercado seleccionado

  const handleMarketChange = (event) => {
    setSelectedMarket(event.target.value);
  };
  //Cambia el estado del hook cuando el usuario selecciona mercado en el menu desplegable

  const handleDownloadReport = () => {
  };

    // Lógica para descargar el informe de Excel del mercado seleccionado por llamada de axios


  return (
    <div>
      <h2>Reports</h2>
      <div>
        <label htmlFor="markets">Select Market: </label>
        <select id="markets" onChange={handleMarketChange} value={selectedMarket}>
          <option value="">-- Select Market --</option>
          {/* Lógica para mostrar opciones de mercado */}
        </select>
      </div>
      <button onClick={handleDownloadReport}>Download Report</button>
    </div>
  );
};
//renderiza en pantalla el front del componente haciendo llamadas al boton de descarga
export default Report;
