import React, { useRef, useState  } from 'react';
import AreadeTexto1 from './AreadeTexto1';
import AreadeTexto2 from './AreadeTexto2'

const NavBar = () => {
  const fileInputRef = useRef(null);
  const [fileContent, setFileContent] = useState('');
  const [responseContent, setResponseContent] = useState('');

  const handleFileButtonClick = () => {
      fileInputRef.current.click();
     
  };

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.name.endsWith('.sc')) {
          const reader = new FileReader();
          reader.onload = (e) => {
              const content = e.target.result;
              setFileContent(content);
          };
          reader.readAsText(file);
      } else {
          console.log('Por favor selecciona un archivo con extensión .sc');
      }
  };

  const handleExecuteButtonClick = () => {
    // Enviar el contenido de AreadeTexto1 al backend
    sendDataToBackend(fileContent);
  };

  const sendDataToBackend = (data) => {
    const backendUrl = 'http://localhost:4000/analizar';

    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ entrada: data })
    })
      .then(response => response.json())
      .then(data => {
          // Procesa la respuesta del backend para obtener solo el texto
        let resultado = data.salida.map(element => element.exprecion.valor).join('\n');
        console.log('Respuesta del backend:', resultado);
        // Actualiza el estado de AreadeTexto2 con la respuesta del backend
        setResponseContent(resultado);
      })
      .catch(error => console.error('Error al enviar datos al backend:', error));
  };

  return (
      <div>
          <nav style={{ marginBottom: '20px', backgroundImage: 'linear-gradient(to right, blue, purple)', padding: '10px' }}>
              <button style={{ marginRight: '10px' }} onClick={handleFileButtonClick}>Archivo</button>
              <input ref={fileInputRef} type="file" accept=".sc" style={{ display: 'none' }} onChange={handleFileChange} />
              <button style={{ marginRight: '10px' }} onClick={handleExecuteButtonClick}>Ejecutar</button>
              <button>Reportes</button>
          </nav>
          <AreadeTexto1 fileContent={fileContent} setFileContent={setFileContent} />
          <AreadeTexto2 responseContent={responseContent}/>
      </div>
  );
};

export default NavBar;