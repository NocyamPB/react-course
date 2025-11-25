const ExternalFunction = ({myFunction}) => {
  return (
    <div>
        <h2>Função em props</h2>
        <button onClick={myFunction}>Clique aqui para ativar a função de dizer Hello World</button>
    </div>
  )
}

export default ExternalFunction