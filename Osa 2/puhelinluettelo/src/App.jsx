import { useState } from 'react'
import './App.css'

const App = () => {
  const [person, setPerson] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    setPerson(person.concat(nameObject))
    setNewName('')
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
