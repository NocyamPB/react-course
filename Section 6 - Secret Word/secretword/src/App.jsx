// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" }, 
  { id: 2, name: "game" }, 
  { id: 3, name: "end" }
]

const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    const word = 
      words[category][Math.floor(Math.random() * words[category].length)];
    
    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    // limpar todas as letras
    clearLetterStates();

    // escolher palavra aleatória
    const { word, category } = pickWordAndCategory();
    
    const letters = word.split("").map((l) => l.toLowerCase());
    
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(letters);

    console.log(category, word, letters);

    // iniciar o jogo
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // checar se a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // adicionar a letra correta ou remover uma tentativa
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((currGuessedLetters) => [
        ...currGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((currWrongLetters) => [
        ...currWrongLetters,
        letter.toUpperCase(),
      ]);

      setGuesses((currGuesses) => currGuesses - 1);
    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length && gameStage === "game") {
      // adicionar pontuação
      setScore((currScore) => currScore += 100);
      // reiniciar o jogo com nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const restartGame = () => {
    setScore(0);
    setGuesses(guessesQty);
    clearLetterStates();
    setGameStage(stages[0].name);
  }

  return (
    <div className="main-container">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game 
        verifyLetter={verifyLetter}
        pickedCategory={pickedCategory}
        pickedWord={pickedWord}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === "end" && <GameOver 
        restartGame={restartGame} 
        score={score} 
        />}
    </div>
  )
}

export default App
