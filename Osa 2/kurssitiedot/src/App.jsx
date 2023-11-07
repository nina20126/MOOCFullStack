const Header = ({ title }) => {
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return(
    <div>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part.name} ex={part.exercises} />
        )}
      </ul>
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
