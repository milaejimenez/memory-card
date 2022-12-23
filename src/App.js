import { useState } from 'react'
import './App.css';

function App() {

  const[score, setScore] = useState(0)
  const[highestScore, setHighestScore] = useState(0)
  const[cards, setCards] = useState([])

  const images = [
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

  const incrementScore = () => {
    setScore( prevScore => prevScore + 1)
  }

  const reset = () => {
    setScore(0);
    setCards([])
  }

  const addCard = (cardName) => {
    setCards(prevCards => [...prevCards, cardName] )
  }

  const handleGameLogic = (event) => {
    const cardName = event.target.id
    if (!cards.includes(cardName)) {
      console.log('not included')
      incrementScore();
      addCard(cardName);
    } else {
      console.log('included')
      reset();
    }
  };


  return (
    <div className="App">
     <h1>Memory Card Game</h1>
     <h2>Score: {score}</h2>
     <h2>Highest Score: {highestScore}</h2>

     {images.map( (image) => (
      <div key={image.id} >
        <img src={image.src} alt={image.name} id={image.name} width={300} onClick={ (event) => handleGameLogic(event)} />
      </div>
     ))}

    </div>
  )
}

export default App;
