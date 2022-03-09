import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './Components/Details';
import List from './Components/List';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
      setLoading(false);
  }, []);

  const handleClick = (id) => {
    const selectedUser = users.find(user => user.id === id);
    
    setUser(selectedUser);
  }

  return (
    <div className="App">
      <List users={users} handleClick={handleClick} />
      {user ? <Details info={user} /> : null}
    </div>
  );
}

export default App;
