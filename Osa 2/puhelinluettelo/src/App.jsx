import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Search from './components/Search'

const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchBarQuery, setSearchBarQuery] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/person')
      .then(response => {
        setPerson(response.data)
      })
  }, [])

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
