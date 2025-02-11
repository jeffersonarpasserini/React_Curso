import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import CarList from './components/CarList';

import './App.css';

function App() {
  const cars = [
    { id: 1, brand: 'VW', model: 'Golf', year: 2020, color: 'Azul' },
    { id: 2, brand: 'Ford', model: 'Mustang', year: 2019, color: 'Vermelho' },
    { id: 3, brand: 'Fiat', model: '500', year: 2021, color: 'Branco' },
    { id: 4, brand: 'Chevrolet', model: 'Camaro', year: 2018, color: 'Amarelo' },
    { id: 5, brand: 'Tesla', model: 'Model S', year: 2022, color: 'Preto' }
  ];

  return (
    <div>
      <h1>Car List</h1>
      {/* exercicio */}
      {cars.map((car, index) => (
        <CarList 
          key={car.id} 
          model={car.model} 
          year={car.year} 
          color={car.color}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;