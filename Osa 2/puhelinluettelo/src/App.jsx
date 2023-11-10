import { useState } from 'react'
import './App.css'

const App = () => {
  const [person, setPerson] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244'
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => { 
    event.preventDefault() 

      const nameObject = {
        name: newName,
        number: newNumber,
      }

      const allNames = person.map((all) => all.name)
      const findName = allNames.includes(newName)

      if (findName) {
        alert(`${newName} is already added to phonebook `)
        clearForm()
      } else {
        setPerson(person.concat(nameObject))
        clearForm()
      }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const clearForm = () => {
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {person.map(p => 
        <li style={{listStyleType: 'none'}} key={p.name} > 
          {p.name} {p.number}
        </li>)}
      </div>
    </div>
  )
}

export default App
