import { useEffect, useState } from "react";
import Person from "./components/Person";
import NewPersonForm from "./components/NewPersonForm";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const allNames = persons.map((all) => all.name);
    const findName = allNames.includes(newName);

    if (findName) {
      alert(`${newName} is already added to phonebook `);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.value;
    const searchValueLower = searchValue.toLowerCase();
    setSearchInput(searchValueLower);
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
      <Person persons={persons} searchInput={searchInput} />
    </div>
  );
};

export default App;
