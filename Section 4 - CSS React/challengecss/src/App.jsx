import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const cars = [{
    brand: "Ford",
    model: "Mustang",
    km: 0,
    color: "vermelho"
  }, {
    brand: "Chevrolet",
    model: "Camaro",
    km: 2500,
    color: "amarelo"
  }, {
    brand: "Dodge",
    model: "Challenger",
    km: 3000,
    color: "cinza"
  }];

  return (
    <div>
      <h1>Lista de Carros</h1>
      <h2>Venha conhecer nossos carros</h2>
      {
        cars.map((car) => (
          <CarDetails 
            brand={car.brand}
            model={car.model}
            km={car.km}
            color={car.color}
          />
        ))
      }
    </div>
  )
}

export default App
