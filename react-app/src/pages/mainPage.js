import React, { useState, useEffect } from 'react';
import NewRowComponent from '../components/newRow';
import TableComponent from '../components/table';
import SearchFormComponent from '../components/search';

export const MainPage = (props) => {
  let [users, setUsers] = useState(props.users);

  const addNewUser = (newUser) => {
    setUsers([].concat(newUser).concat(users))
  };  

  const usersSort = (direction, key) => {
    setUsers(
      [].concat(users = users.sort(function(a, b) {
        if (a[key] > b[key]) {
          return direction ? 1 : -1;
        }
        if (a[key] < b[key]) {
          return direction ? -1 : 1;
        }
        return 0;
      }))
    )
  };

  const getUserValues = (user) => {
    return Object.values(user).map(value => {
      if (typeof value === 'object') {
        return getUserValues(value);
      }
      return value;
    });
  };

  const usersFilter = (searchValue) => {
    if (searchValue) {
      setUsers(
        props.users.filter(user => {
        let valuesIsExist = false;
          getUserValues(user).forEach(value => {
            if (String(value).includes(searchValue)) {
              console.log(`Найдено совпадение в`, value);
              valuesIsExist = true;
            }
          });
        return valuesIsExist;
        })
      ) 
    } else {
      setUsers(props.users)
    }
  };

  return (
    <div className="page-main container">
      <h1>Main page</h1>
      <NewRowComponent addNewUser={addNewUser} />
      {!!users ? (
        <div>
          <SearchFormComponent usersFilter={usersFilter} />
          <TableComponent users={users} onThHandler={usersSort}/>
        </div>
      ) : ( <p>Нам нечего тут отобразить</p>
      )}
    </div>
  )
}