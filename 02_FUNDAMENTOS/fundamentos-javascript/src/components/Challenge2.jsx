const Challenge2 = () => {
    const a = 10;
    const b = 20;

    return (
        <div>
            <button onClick={() => console.log(`Soma de Valores ${a} e ${b}: ${a + b}`)}>
                Soma de Valores {a} e {b}
            </button>
        </div>
    );

};

export default Challenge2;