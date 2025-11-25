const UserDetails = ({name, age, job}) => {
  return (
    <div>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p>Este usuário pode tirar carteira de motorista.</p>
      ) : (
        <p>Este usuário ainda é menor de idade.</p>
      )}
    </div>
  )
}

export default UserDetails