const Events = () => {

    const handleMyEventClick = (e) => {
        console.log('Cliquei no botão!');
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
    };

    const renderSomething = (x) => {
        if (x) {
            return <div>Something</div>;
        } else {
            return <div>Nothing</div>;
        }
    };
    
    return (
        <div>
            <div>
                <h1>Eventos en React</h1>
                <button onClick={handleMyEventClick}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>
                    Clique aqui também
                </button>
            </div>
            <div>
                {renderSomething(true)}
            </div>
            <div>
                {renderSomething(false)}
            </div>
        </div>
    );
};
export default Events;
