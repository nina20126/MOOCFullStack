const Person = ({ persons, searchInput, deleteObject }) => {

  return (
    <div>
      <ul>
        {persons.filter((item) => {
          return searchInput === '' 
          ? item 
          : item.name.toLowerCase().includes(searchInput)
        })
        .map((person, index) => (
          <li key={index}>
            {person.name} {person.number}{" "}
            <button onClick={() => deleteObject(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Person;
