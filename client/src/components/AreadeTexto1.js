import React, { useState, useEffect } from 'react';

const AreadeTexto1 = ({ fileContent,  setFileContent }) => {
    const [textValue, setTextValue] = useState('');

    // Utilizamos useEffect para actualizar el estado interno solo cuando cambie la prop fileContent
    useEffect(() => {
        setTextValue(fileContent);
    }, [fileContent]);

    const handleChange = (event) => {
        const newTextValue = event.target.value;
        setTextValue(newTextValue);
        setFileContent(newTextValue); // Actualizamos el estado fileContent en NavBar también
      };

    return (
        <textarea 
            style={{ width: '710px', height: '600px', marginRight: '56px', resize: 'vertical' }} 
            value={textValue} 
            onChange={handleChange} 
        />
    );
};

export default AreadeTexto1;