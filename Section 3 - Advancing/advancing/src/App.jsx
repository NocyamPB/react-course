import Cave from "./assets/crystal-cave.jpg";
import './App.css';
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import Conditional from "./components/Conditional";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExternalFunction from "./components/ExternalFunction";
import Message from "./components/Message";
import HandleMessage from "./components/HandleMessage";
import UserDetails from "./components/UserDetails";

function App() {

  //const name = "Matheus";
  const [userName] = useState("Matheus Battisti");

  const cars = [
    {id: 1, brand: "Ford", km: 100000, color: "Vermelho", newCar: false},
    {id: 2, brand: "Chevrolet", km: 0, color: "Azul", newCar: true},
    {id: 3, brand: "Fiat", km: 75000, color: "Branco", newCar: false},
  ];

  const printHello = () => {
    console.log("Hello World!");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [{name: "Matheus", age: 30, job: "Desenvolvedor"}, {name: "Ana", age: 17, job: "Estudante"}, {name: "Carlos", age: 22, job: "Designer"}, {name: "Beatriz", age: 15, job: "Estudante"}, {name: "Pedro", age: 19, job: "Estagiário"}];

  return (
    <div>
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em public */}
        <img src="/magic-tree.jpeg" alt="Big magical tree with glowing orbs around." />
      </div>

      <div>
        {/* Imagem em assets */}
        <img src={Cave} alt="Crystal cave." />
      </div>

        <ManageData />
        <ListRender />
        <Conditional />
        {/* props */}
        <ShowUserName name={userName} />
        <CarDetails brand="Ford" km={100000} color="Vermelho" newCar={false} />
        <CarDetails brand="Chevrolet" km={0} color="Azul" newCar={true} />
        <CarDetails brand="Fiat" km={75000} color="Branco" newCar={false} />
        {/* loop using props */}
        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            km={car.km} 
            color={car.color} 
            newCar={car.newCar} 
          />
        ))} 
        {/* fragments */}
        <Fragments />
        {/* Children */}
        <Container myValue="Algum valor">
          <p>Este é o conteúdo</p>
        </Container>
        <Container myValue="Valor Aleatório">
          <h3>Testando o container</h3>
        </Container>
        {/* Function in prop */}
        <ExternalFunction myFunction={printHello} />
        {/* state lift */}
        <Message msg={message} />
        <HandleMessage changeMessage={handleMessage} />
        {/* Desafio */}
        {users.map((user, index) => (
          <UserDetails
            key={index}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        ))}
    </div>
  )
}

export default App
