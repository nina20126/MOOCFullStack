import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import peopleService from "./services/people";

const App = () => {
  const [person, setPerson] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchBarQuery, setSearchBarQuery] = useState("");

  useEffect(() => {
    peopleService.getAll().then((initialPerson) => {
      setPerson(initialPerson);
      console.log(initialPerson);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const allNames = person.map((all) => all.name);
    const findName = allNames.includes(newName);

    if (findName) {
      alert(`${newName} is already added to phonebook `);
      clearForm();
    } else {
      peopleService.create(nameObject).then((returnedPerson) => {
        setPerson(person.concat(returnedPerson));
        clearForm();
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const clearForm = () => {
    setNewName("");
    setNewNumber("");
  };

  const deleteObject = (id) => {
    const comfirmDelete = confirm(
      `Are you sure you want to delete person ${id}?`
    ); // This is causing the [Violation] 'click' handler -error/notification in the console.

    if (comfirmDelete) {
      peopleService
        .deletePerson(id)
        .then(() => {
          console.log(`Deleted post with ID ${id}`);
          setPerson(person.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search setSearchBarQuery={setSearchBarQuery} />
      <h2>Add new contact</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        person={person}
        search={searchBarQuery}
        deleteObject={deleteObject}
      />
    </div>
  );
};

export default App;
