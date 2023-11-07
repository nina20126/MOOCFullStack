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

export default Course