//comentario de linha

import MyComponent from "./MyComponent";

/*
    comentario de bloco
*/



const FirstComponent = () => {
    // comentario de linha
    return (
        <div>
            {/* teste de comentario */}
            <h1>First Component</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div> 
    );
};

export default FirstComponent;