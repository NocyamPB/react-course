import styles from './Title.module.css';

const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>Título utilizando modulos</h1>
        {/* Note que o estilo aqui é isolado apenas para este componente e os nomes das classes devem utilizar '_' ao invés de '-'. Se for utilizar algo como my-title então a forma de aplicar na tag é a seguinte: */}
        <h2 className={styles['my-title']}>Subtítulo utilizando modulos</h2>
    </div>
  )
}

export default Title