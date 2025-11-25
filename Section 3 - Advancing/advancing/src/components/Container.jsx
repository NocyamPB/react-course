const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é um container</h2>
        {children}
        <p>O valor é: {myValue}</p>
    </div>
  )
}

export default Container