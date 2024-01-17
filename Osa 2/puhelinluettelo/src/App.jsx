import { useEffect, useState } from "react"
import Person from "./components/Person"
import NewPersonForm from "./components/NewPersonForm"
import Search from "./components/Search"
import personService from "./services/people"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
    
  }, []);

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const allNames = persons.map((all) => all.name);
    const findName = allNames.includes(newName);

    if (findName) {
      alert(`${newName} is already added to phonebook `)
    } else {
      personService.create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        clearForm();
      })
      .catch((error) => {
        console.error("Error creating person:", error);
        // Handle the error as needed, e.g., set an error state, display an error message, etc.
      })
      
    }
  };

  const clearForm = () => {
    setNewName("")
    setNewNumber("")
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  };

  const handleSearch = (event) => {
    event.preventDefault()
    const searchValue = event.target.value
    const searchValueLower = searchValue.toLowerCase()
    setSearchInput(searchValueLower);
  };

  const deleteObject = (name, id) => {
    const confirmDelete = window.confirm(
      `Do you want to delete person ${name}?`
    )

    if (confirmDelete) {
      personService
        .deletePerson(id)
        .then(() => {
          const updatedPersons = persons.filter((person) => person.id !== id)
          setPersons(updatedPersons);
          console.log("Deleted");
        })
        .catch((error) => {
          console.error("Error deleting person:", error)
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <NewPersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Search handleSearch={handleSearch} searchInput={searchInput} />
      <Person
        persons={persons}
        searchInput={searchInput}
        deleteObject={deleteObject}
      />
    </div>
  );
};

export default App;
