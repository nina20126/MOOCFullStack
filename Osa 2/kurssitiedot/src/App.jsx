const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <Content parts={props.parts} />
    </div>
  )
}

const Content = ({ parts }) => {

  const sum = parts.reduce((amount, part) => amount = amount + part.exercises, 0)

  return(
    <div>
      <ul>
        {parts.map(part =>
          <Part key={part.id} name={part.name} ex={part.exercises} />
          )}
      </ul>
      <Total total={sum} />
    </div>
  )
}

const Part = ({ name, ex }) => {
  return(
    <div>
      <li>{name} {ex}</li>
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

const Course = ({courses}) => {
  return(
    <div>
      {courses.map(course =>
        <Header key={course.id} title={course.name} parts={course.parts}/>
      )}
    </div>
  )
} 

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App
