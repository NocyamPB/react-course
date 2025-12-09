import "./GameOver.css";

const GameOver = ({ restartGame, score }) => {
  return (
    <div className="gameover">
      <h1>Fim de Jogo</h1>
      <h2>Sua pontuação final foi <span>{score}</span></h2>
      <button onClick={restartGame}>Reiniciar jogo</button>
    </div>
  )
}

export default GameOver