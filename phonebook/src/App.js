import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '213456' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
      event.preventDefault();
      if(!persons.some(person => person.name === newName)) {
          setPersons(persons.concat({name: newName, number: newNumber}));
      } else {
          alert(newName + ' is already added to phonebook')
      }
        setNewName('')
        setNewNumber('')
    };

    const onNameChange = (event) => {
      setNewName(event.target.value);
    };

    const onNumberChange = event => {
        setNewNumber(event.target.value);
    };

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input
              value={newName}
              onChange={onNameChange}
          />
          </div>
            <div>
              number: <input
              value={newNumber}
              onChange={onNumberChange}
          />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person) =>
              <Person key={person.name} person={person} />
          )}
        </ul>
      </div>
  )
};

export default App