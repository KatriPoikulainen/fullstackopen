import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.yhteensa === 0) {
    return <p>palautetta ei annettu</p>
  }

  return(
    <table>
      <tbody>
      <StatisticLine text="hyva" value={props.hyva}/>
      <StatisticLine text="neutraali" value={props.neutraali}/>
      <StatisticLine text="huono" value={props.huono}/>
      <StatisticLine text="yhteensa" value={props.yhteensa}/>
      <StatisticLine text="keskiarvo" value={props.keskiarvo}/>
      <StatisticLine text="tyytyvaisyys" value={props.tyytyvaisyys + " %"}/>
      </tbody>
    </table>

  )
}

const App = () => {
  const [hyva, setHyva] = useState(0)
  const [neutraali, setNeutraali] = useState(0)
  const [huono, setHuono] = useState(0)
  const yhteensa = hyva+neutraali+huono
  const keskiarvo = yhteensa === 0 ? 0 : (hyva-huono) / yhteensa
  const tyytyvaisyys = yhteensa === 0 ? 0 : (hyva/yhteensa) * 100

  return (
    <div>
      <h1>anna meille palautetta</h1>
      <Button onClick={() =>setHyva(hyva+1)} text="hyva"/>
      <Button onClick={()=> setNeutraali(neutraali+1)} text="neutraali"/>
      <Button onClick={()=> setHuono(huono+1)} text="huono"/>

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