const Persons = ({ person, search, deleteObject }) => {
  return (
    <div>
      {person
        .filter((p) => p.name.toLowerCase().includes(search))
        .map((p) => (
          <li style={{ listStyleType: "none" }} key={p.name}>
            {p.name} {p.number}{" "}
            <button onClick={() => deleteObject(p.id)}>Delete</button>
          </li>
        ))}
    </div>
  );
};

export default Persons;
