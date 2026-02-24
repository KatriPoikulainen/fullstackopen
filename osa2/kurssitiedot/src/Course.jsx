const Header = (props) => {
  return<h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part)=>(
        <Part key={part.id} part={part}/>
      ))}
</div>
  )
}

const Total = (props) => {
const total = props.parts.reduce ((sum, part) => {
  console.log ("Number of exercises", sum, part)
  return sum + part.exercises
}, 0)

return <p>Number of exercises {total}</p>
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course}/>
      <Content parts={props.course.parts}/>
      <Total parts= {props.course.parts}/>
    </div>
  )
}

export default Course