const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.courseP}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.osa1} {props.harj1}</p>
      <p>{props.osa2} {props.harj2}</p>
      <p>{props.osa3} {props.harj3}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.totalEx}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseP = {course} />
      <Content osa1 = {part1} harj1 = {exercises1} />
      <Content osa2 = {part2} harj2 = {exercises2} />
      <Content osa3 = {part3} harj3 = {exercises3} />
      <Total totalEx = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;
