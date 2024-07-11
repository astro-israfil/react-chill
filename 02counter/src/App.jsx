import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const increaseCount = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  const decreaseCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React Chill: Counter App</h1>
      <h2>Count is : {counter}</h2>
      <button onClick={increaseCount}>Increase count {counter}</button>
      <button onClick={decreaseCount}>Decrease count {counter}</button>
    </>
  )
}

export default App
