import { useState } from 'react'
import './App.css';

const cardImages = [
  {name: 'fool',
  src:'./imgs/00_Fool.jpeg',
  id:1},
  {name: 'magician',
  src:'./imgs/01_Magician.jpeg',
  id:2},
  {name: 'priestess',
  src:'./imgs/02_High_Priestess.jpeg',
  id:3},
  {name: 'empress',
  src:'./imgs/03_Empress.jpeg',
  id:4},
  {name: 'emperor',
  src:'./imgs/04_Emperor.jpeg',
  id:5},
  {name: 'hyerophant',
  src:'./imgs/05_Hierophant.jpeg',
  id:6},
  {name: 'lovers',
  src:'./imgs/06_TheLovers.jpeg',
  id:7},
  {name: 'chariot',
  src:'./imgs/07_Chariot.jpeg',
  id:8},
  {name: 'hermit',
  src:'./imgs/09_Hermit.jpeg',
  id:9},
  {name: 'wheel',
  src:'./imgs/10_Wheel_Of_Fortune.jpeg',
  id:10},
]

function App() {

  const[score, setScore] = useState(0)
  const[highestScore, setHighestScore] = useState(0)
  const[clickedCards, setClickedCard] = useState([])
  const[cards, setCards] = useState([])


  const shuffleCards = () => { 
    const shuffledCards = [...cardImages]
        .sort( (() => Math.random() - 0.5))
        .map((cardImage) => ({...cardImage}))
      setCards(shuffledCards)
  }

  const incrementScore = () => {
    setScore( prevScore => prevScore + 1)
  }

  const reset = () => {
    setScore(0);
    addClickedCard([])
  }

  const addClickedCard = (cardName) => {
    setClickedCard(prevCards => [...prevCards, cardName] )
  }

  const handleGameLogic = (event) => {
    const cardName = event.target.id
    if (!clickedCards.includes(cardName)) {
      console.log('not included')
      incrementScore();
      addClickedCard(cardName);
    } else {
      console.log('included')
      reset();
    }
    shuffleCards();
  };

  return (
    <div className="App">
     <h1>Memory Card Game</h1>
     <button onClick={shuffleCards}>New Game</button>
     <h2>Score: {score}</h2>
     <h2>Highest Score: {highestScore}</h2>

     {cards.map( (card) => (
      <div key={card.id} >
        <img src={card.src} alt={card.name} id={card.name} width={300} onClick={ (event) => handleGameLogic(event)} />
      </div>
     ))}

    </div>
  )
}

export default App;
