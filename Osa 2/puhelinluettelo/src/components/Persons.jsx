const Persons = ({ person, search }) => {
    return(
      <div>
          {person.filter((p)=>
            p.name.toLowerCase().includes(search)).map(p => 
            <li style={{listStyleType: 'none'}} key={p.name} > 
            {p.name} {p.number}
          </li>)}
        </div>
    )
  }

export default Persons