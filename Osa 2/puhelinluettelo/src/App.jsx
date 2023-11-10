import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Search from './components/Search'

const App = () => {
  const [person, setPerson] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchBarQuery, setSearchBarQuery] = useState('')

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
      <Search setSearchBarQuery={setSearchBarQuery} />
      <h2>Add new contact</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons person={person} search={searchBarQuery} />
    </div>
  )
}

export default App
