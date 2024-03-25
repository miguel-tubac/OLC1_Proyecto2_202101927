import React from 'react';

const AreadeTexto2 = ({ responseContent }) => {
    return (
        <textarea style={{ width: '710px', height: '600px', resize: 'vertical' }} readOnly 
        value={responseContent} onChange={() => { }} />
    )
}

export default AreadeTexto2;
