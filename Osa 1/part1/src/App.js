const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting App
    </div>
  )
}

const App = () => { 
  const nimi = 'Pekka'
  const ika = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maija"age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Footer />
    </>
  )
}

export default App