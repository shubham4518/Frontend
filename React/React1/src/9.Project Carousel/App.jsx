import React ,{useState} from 'react'

const App = () => {
  const images =[
    "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/spider-man-no-way-home-tom-holland-andrew-garfield-toby-mcquire.jpg?w=1200&h=675&fit=crop",
    "https://i.pinimg.com/736x/88/06/e1/8806e192fa2f9fcd53a2e17cbd5fb739.jpg",
    "https://m.media-amazon.com/images/I/81lnO0RES0L._AC_UF1000,1000_QL80_.jpg"

  ]
  const[currentIndex,setCurrentIndex] = useState(0)
  function handleNext(){
    setCurrentIndex((currentIndex + 1) % images.length)
  }
 function handlePrev(){
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }
  return (
    <div>
      <img src={images[currentIndex]} height={'600px'} width={'800px'} />
      <br/>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>

    </div>
  )
}

export default App