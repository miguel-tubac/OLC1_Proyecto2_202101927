import React from 'react';
import ReactDOM from 'react-dom/client';

//con esta ruta obtengo los datos del index.html
const rootElement = document.getElementById('root');

//Este es el elemento root:
const root = ReactDOM.createRoot(rootElement);

//Creacion de un componente:
function ArearDeTexto() {
  return <h1>Hola</h1>
}


//Aca grego los componentes al componente principal:
//Utlizo la forma set closig tags:
root.render(
  <>
    <ArearDeTexto/>
    
  </>
);
