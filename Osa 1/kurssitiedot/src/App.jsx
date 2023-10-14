const Header = (props) => {
return (
  <div>
    <h1>{props.course}</h1>
  </div>
)
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State og a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} />
      <Content part2 = {part2} />
      <Content part3 = {part3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
