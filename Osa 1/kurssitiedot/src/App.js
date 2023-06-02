const Header = (props) => {
  //console.log(props)
  return (
    <div>
      <h1>{props.courseP}</h1>
    </div>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <p>
      {props.osa} {props.harj}
    </p>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part osa = {props.osa1} harj={props.harj1} />
      <Part osa = {props.osa2} harj={props.harj2} />
      <Part osa = {props.osa3} harj={props.harj3} />
    </div>
  )
}

const Total = (props) => {
  //console.log(props)
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
  const part1 = 
    { name: 'Fundamentals of React', exercises: 10 }
  

  const part2 = 
    { name: 'Using props to pass data', exercises: 7 }
  

  const part3 = 
    { name: 'State of a component', exercises: 14 }


  return (
    <div>
      <Header courseP = {course} />
      <Content osa1 = {part1.name} harj1 = {part1.exercises} osa2 = {part2.name} harj2 = {part2.exercises} osa3 = {part3.name} harj3 = {part3.exercises} />
      <Total totalEx = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App;
