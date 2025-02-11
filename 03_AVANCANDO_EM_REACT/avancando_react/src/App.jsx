import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import City from './assets/city.jpg'
import viteLogo from '/vite.svg'

/* Components */
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

/* Styles */
import './App.css'


function App() {
  const name=	'Fernando';
  const [userName] = useState('Marcio');

  const cars = [
    { id:1, brand: 'VW', km: 101000, color: 'Azul', newCar: false },
    { id:2, brand: 'Ford', km: 1000, color: 'Verde', newCar: false },
    { id:3, brand: 'Fiat', km: 10000, color: 'Roxo', newCar: false },
    { id:4, brand: 'GM', km: 0, color: 'Preto', newCar: true }
  ]

  const people = [
    { id:1, nome: 'Alice', idade: 25, profissao: 'Engenheira' },
    { id:2, nome: 'Bruno', idade: 30, profissao: 'Designer' },
    { id:3, nome: 'Carla', idade: 16, profissao: 'Desenvolvedora' }
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/img1.jpg" alt="Imagem no public" />
      {/* Imagem em src/assets */}
      <img src={ReactLogo} alt="Imagem no assets" />
      <img src={City} alt="Imagem no assets" />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={101000} color="Azul" newCar={false}/>
      {/* reaproveitando cardetails  */}
      <CarDetails brand="Ford" km={1000} color="Verde" newCar={false} />
      <CarDetails brand="Fiat" km={0} color="Roxo" newCar={true}/>
      <CarDetails brand="GM" km={300000} color="Preto" newCar={false}/>
      
      {/* loop em array objetos - map */}
      {cars.map(car => (
        <CarDetails 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar} /> 
        ))}

      {/* Fragmentos */}
      <Fragments propFragment="teste" />

      {/* children prop */}
      <Container containerTitle={'Titulo do container'}>
        <p>este é o conteudo</p>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* elevação de state - state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* exercicio */}
      {people.map((person) => (
        <UserDetails 
          key={person.id} 
          nome={person.nome} 
          idade={person.idade} 
          profissao={person.profissao} 
        />
      ))}

      

    </div>
  );
}

export default App
