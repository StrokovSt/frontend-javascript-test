import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoadingComponent from './components/loading';
import GreetingSectionComponent from './components/greeting-section'
import { MainPage } from './pages/mainPage';
import NavigationComponent from './components/navigation';

function App() {
  const ROWS_PER_PAGE = 50;

  let [greetingIsShow, setGreetingIsShow] = useState(true);
  let [url, setUrl] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState('');
  let [users, setUsers] = useState([]);

  useEffect( () => {
    fetch(url)
      .then(response => response.json())
      .then(users => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, [url]);

  const greetButtonHandler = (url) => {
    setUrl(url);
    setGreetingIsShow(false);
    setIsLoading(true);
  };

  const addNewUser = (newUser) => {
    setUsers([].concat(newUser).concat(users))
  }

  const meow = () => {
    let switchList = [];
    for (let i = 0; i < Math.ceil(users.length / ROWS_PER_PAGE); i++) {
      switchList.push(
        <Switch key={i}>
          <Route path={"/main/" + (i === 0 ? "" : i)} exact>
            <MainPage users={users.slice(ROWS_PER_PAGE * i, ROWS_PER_PAGE * i + ROWS_PER_PAGE)} setUsers={addNewUser} pageNumber={i}/>
          </Route>
        </Switch>
      )
    }
    return switchList;
  }

  return (
    <div className="container">
      {greetingIsShow ? <GreetingSectionComponent setUrl={greetButtonHandler} /> : null}

      {users.length ? (
        <BrowserRouter>
        {users.length > 50 && <NavigationComponent pageCount={Math.ceil(users.length / ROWS_PER_PAGE)} />}
          {meow()}
          <Redirect to="/main" />
        </BrowserRouter>
      ) : isLoading ? 
      (<div className="page-main__loading-container"><p>Пожалуйста подождите...</p><LoadingComponent /></div>): (error.length > 0 && !greetingIsShow) ? <p>Произошла ошибка {error}</p> : null}
    </div>
  );
}

export default App;
