const Header = ({ title }) => {
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log('Content', parts)
  const sum = parts.reduce((amount, part) => amount = amount + part.exercises, 0)
  console.log('sum:', sum)
  
  return(
    <div>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part.name} ex={part.exercises} />
        )}
      </ul>
      <Total total={sum}/>
    </div>
  )
}

const Part = ({ part, ex }) => {
  return(
    <div>
      <li>{part} {ex}</li>
    </div>
  )
}

const Total = ({ total }) => {
  console.log('Total:', total)
  return(
    <div>
      <p>Total of {total} exercises</p>
      
    </div>
  )
}

const Course = (props) => {
  return(
    <>
      <Header title={props.course.name}/>
      <Content parts={props.course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
