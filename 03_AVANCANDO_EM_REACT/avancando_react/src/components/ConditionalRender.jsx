import { useState } from 'react';

const ConditionalRender = () => {
    const [x, setX] = useState(true);

    const [name, setName] = useState('João')

    return (
        <div>
            <h1>Conditional Render</h1>
            {x && <p>se X for true - Renderizado condicionalmente</p>}
            {!x && <p>se X for false - Renderizado condicionalmente</p>}

            {/* Renderização condicional com operador ternário */}
            {name === 'João' ? (<p>Olá João</p>) : (<p>Olá estranho</p>)}

            <button onClick={() => setName("José")}>Altera nome</button>
        </div>
    );
}

export default ConditionalRender