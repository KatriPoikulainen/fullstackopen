import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [filter, setFilter] = useState('')


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState ('')

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some (
      person => person.name === newName
    )

    if (nameExists) {
    alert(`${newName} is already added to phonebook`)
    return
    }


    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons (persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:{' '}
        <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
          value= {newName}
          onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number: 
          <input 
          value= {newNumber}
          onChange={(event)=> setNewNumber(event.target.value)}/>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person=> (
          <li key={person.name}>{person.name} {person.number}
          </li>
        ))}

      </ul>
    </div>
  )

}

export default App
