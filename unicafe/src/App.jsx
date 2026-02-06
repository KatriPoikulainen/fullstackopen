import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [hyva, setHyva] = useState(0)
  const [neutraali, setNeutraali] = useState(0)
  const [huono, setHuono] = useState(0)

  return (
    <div>
      <h1>anna meille palautetta</h1>
      <button onClick={() =>setHyva(hyva+1)}>hyva</button>
      <button onClick={()=> setNeutraali(neutraali+1)}>neutraali</button>
      <button onClick={()=> setHuono(huono+1)}>huono</button>

      <h2>tilastot</h2>
      <p>hyva {hyva}</p>
      <p>neutraali{neutraali}</p>
      <p>huono{huono}</p>


    </div>
  )
}

export default App