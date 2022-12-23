import { useState} from 'react'
import './App.css';

function App() {

  const[currentScore, setCurrentScore] = useState(0)
  // const[bestScore, setBestScore] = useState(0)
  const[images, setImages] = useState([
    {url:'./imgs/00_Fool.jpeg',
    id:1,
    clicked:false},
    {url:'./imgs/01_Magician.jpeg',
    id:2,
    clicked:false},
    {url:'./imgs/02_High_Priestess.jpeg',
    id:3,
    clicked:false},
    {url:'./imgs/03_Empress.jpeg',
    id:4,
    clicked:false},
    {url:'./imgs/04_Emperor.jpeg',
    id:5,
    clicked:false},
    {url:'./imgs/05_Hierophant.jpeg',
    id:6,
    clicked:false},
    {url:'./imgs/06_TheLovers.jpeg',
    id:7,
    clicked:false},
    {url:'./imgs/07_Chariot.jpeg',
    id:8,
    clicked:false},
    {url:'./imgs/09_Hermit.jpeg',
    id:9,
    clicked:false},
    {url:'./imgs/10_Wheel_Of_Fortune.jpeg',
    id:10,
    clicked:false},
  ])

  const setToClicked = id => {
    images.forEach( image => {
      if (image.id == id ) {
        const values = [...images]
        const index = image.id -1
        values[index].clicked = true;
        setImages(values)
        // console.log(image.clicked)
      }

    })
  }

  const handleSetScore = event => {
    const id = event.target.id
    images.forEach( image => {
      if (image.id == id) {
        console.log(image.clicked)
        image.clicked ? setCurrentScore(0) : setCurrentScore(currentScore + 1)
          }
      })
      setToClicked(id)
      console.log(currentScore)
  }

  return (
    <div className="App">
     <h1>Memory Card Game</h1>

     {images.map( (image, index) => (
      <div key={image.id} >
        <img src={image.url} alt={image.url} id={image.id} width={300} onClick={ event => {handleSetScore(event)}}/>
      </div>
     ))}

    </div>
  )
}

export default App;
