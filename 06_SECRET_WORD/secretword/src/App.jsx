//hooks
import { useState, useCallback, useEffect } from 'react'

// components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

//data
import { wordsList } from './data/words'

// css
import './App.css'

const stages= [{id:1, name:"Start"},{id:2, name:"Game"},{id:3, name:"End"}]

const guessesNumber = 5

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesNumber)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //pick a category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    

    //pick a word from the category
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    

    return {word, category}
  }, [words]);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }
  
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates();

    //pick word and category
    const { word, category } = pickWordAndCategory();
  
    //create array of letters
    let wordLetters = word.split("").map((l) => l.toLowerCase());


    //set state
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    //push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter]);
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }

  };

  //game over condition
  useEffect(() =>{
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses])

  //verify win condition
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore+=100);
      //restart game with new word
      startGame();
    }
  
  }, [guessedLetters. letters, startGame])

  const retry = () => {
    setScore(0);
    setGuesses(guessesNumber);

    setGameStage(stages[0].name);
  };

  console.log(words)

  return (
      <div className='App'>
        {gameStage === 'Start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'Game' && <Game 
            verifyLetter={verifyLetter} 
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />}
        {gameStage === 'End' && <GameOver retry={retry} score={score} />}
      </div>
  )
}

export default App
