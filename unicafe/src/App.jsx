import { useState } from 'react'

const Statistics = (props) => {
  return(
  <div>
      <p>hyva {props.hyva}</p>
      <p>neutraali {props.neutraali}</p>
      <p>huono {props.huono}</p>
      <p>yhteensa {props.yhteensa}</p>
      <p>keskiarvo {props.keskiarvo}</p>
      <p>tyytyvaisyys {props.tyytyvaisyys} %</p>
  </div>

  )
}

const App = () => {
  const [hyva, setHyva] = useState(0)
  const [neutraali, setNeutraali] = useState(0)
  const [huono, setHuono] = useState(0)
  const yhteensa = hyva+neutraali+huono
  const keskiarvo = yhteensa === 0 ? 0 : (hyva-huono)/yhteensa
  const tyytyvaisyys = yhteensa === 0 ? 0 : (hyva/yhteensa) * 100

  return (
    <div>
      <h1>anna meille palautetta</h1>
      <button onClick={() =>setHyva(hyva+1)}>hyva</button>
      <button onClick={()=> setNeutraali(neutraali+1)}>neutraali</button>
      <button onClick={()=> setHuono(huono+1)}>huono</button>

      <h2>tilastot</h2>

      <Statistics
      hyva= {hyva}
      neutraali= {neutraali}
      huono= {huono}
      yhteensa= {yhteensa}
      keskiarvo= {keskiarvo}
      tyytyvaisyys= {tyytyvaisyys}
      />

    </div>
  )
}

export default App