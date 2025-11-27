import styles from './CarDetails.module.css'

const CarDetails = ({brand, model, km, color}) => {
  return (
    <div className={styles.car_details}>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Modelo: {model}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails