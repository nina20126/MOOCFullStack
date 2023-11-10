import { useState } from 'react'
import './App.css'

const App = () => {
  const [person, setPerson] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  // tapahtumankäsittelijäfunktio reagoi napin painamiseen
  const addName = (event) => { // Parametrin event arvona on metodin kutsun aiheuttama
    event.preventDefault() // estää lomakkeen oletusarvoisen toiminnan, sivun uudelleen latautumisen

      const nameObject = {
        name: newName,
      }

      const allNames = person.map((all) => all.name)
      const findName = allNames.includes(newName)

      if (findName) {
        alert(`${newName} is already added to phonebook `)
      } else {
        setPerson(person.concat(nameObject))
        setNewName('')
      }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {person.map(p => 
        <li style={{listStyleType: 'none'}} key={p.name} > 
          {p.name}
        </li>)}
      </div>
    </div>
  )
}

export default App
