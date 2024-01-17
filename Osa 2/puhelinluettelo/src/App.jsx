import { useEffect, useState } from "react";
import Person from "./components/Person";
import NewPersonForm from "./components/NewPersonForm";
import Search from "./components/Search";
import personService from "./services/people";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((initialPerson) => {
        setPersons(initialPerson);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage(`An error orrured while fething data`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const allNames = persons.map((all) => all.name);
    const findName = allNames.includes(newName);

    const existingPerson = persons.find((person) => person.name === newName);

    if (findName) {
      const existingPersonId = existingPerson.id;
      const updateNumber = window.confirm(
        `${newName} is already added to phonebook. Do you want to update number?`
      );

      if (updateNumber) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        updatePerson(existingPersonId, updatedPerson);
      } else {
        clearForm();
      }
    } else {
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));

          setMessage(`Person '${newName}' added successfully.`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          clearForm();
        })

        .catch((error) => {
          console.error("Error creating person:", error);
          setMessage(`An error occurred while creating person ${newName}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  const clearForm = () => {
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

  const deleteObject = (name, id) => {
    const confirmDelete = window.confirm(
      `Do you want to delete person ${name}?`
    );

    if (confirmDelete) {
      personService
        .deletePerson(id)
        .then(() => {
          const updatedPersons = persons.filter((person) => person.id !== id);
          setPersons(updatedPersons);
          console.log("Deleted");

          setMessage(`Person '${name}' deleted successfully.`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          clearForm();
        })

        .catch((error) => {
          console.error("Error deleting person:", error);
          setMessage(`An error occurred while deleting person ${name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  const updatePerson = (id, updatedInfo) => {
    personService
      .update(id, updatedInfo)
      .then((returnedPerson) => {
        setPersons(
          persons.map((person) => (person.id !== id ? person : returnedPerson))
        );
        console.log("updated succesfully");
        setMessage(`Person '${updatedInfo.name}' updated successfully.`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((error) => console.log("Update error: ", error));
    setMessage(`An error orrured while updating person ${updatedInfo.name}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
    clearForm();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
