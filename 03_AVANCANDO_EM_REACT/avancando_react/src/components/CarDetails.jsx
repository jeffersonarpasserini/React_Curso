
const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <h1>Detalhes do Carros</h1>
            <h2>Marca: {brand}</h2>
            <p>Km: {km}</p>
            <p>Cor: {color}</p>
            <p> Carro novo: {newCar ? 'Carro novo!' : 'Carro Usado'}</p>
        </div>
    );
}

export default CarDetails;