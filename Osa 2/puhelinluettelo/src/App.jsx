import { useState } from 'react'

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
      <div>
        Search: <input 
          placeholder="Search..." 
          onChange={(event) => setSearchBarQuery((event.target.value).toLowerCase())}
          />
      </div>
      <h2>Add new contact</h2>
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
        {person.filter((p)=>
          p.name.toLowerCase().includes(searchBarQuery)).map(p => 
          <li style={{listStyleType: 'none'}} key={p.name} > 
          {p.name} {p.number}
        </li>)}
      </div>
    </div>
  )
}

export default App
