import React, {useState, useEffect} from 'react';
import LoadingComponent from './components/loading';
import { MainPage } from './pages/mainPage';

function App() {
  let [error, setError] = useState('');
  let [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then(response => response.json())
      .then(users => {
        setUsers(users);
      })
      .catch(err => {
        setError(err);
        console.log('Произошла ошибка:', err.message)
      })
  }, []);

  return (
    <div className="container">
      {users.length ? <MainPage users={users}/> : <LoadingComponent />}
    </div>
  );
}

export default App;
