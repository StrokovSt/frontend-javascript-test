import React, { useState, useEffect } from 'react';
import NewRowComponent from '../components/newRow';
import TableComponent from '../components/table';
import LoadingComponent from '../components/loading';

export const MainPage = () => {
  let [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then(response => response.json())
      .then(users => {
        setUsers(users);
        console.log(users);
      })
  }, []);

  const addNewUser = (newUser) => {
    setUsers(users.concat(newUser))
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
  
  return (
    <div className="page-main container">
      <h1>Main page</h1>
      <NewRowComponent addNewUser={addNewUser}/>
      {users.length ? (
        <TableComponent users={users} onThHandler={usersSort}/>
      ) : (
        <LoadingComponent />
      )}
    </div>
  )
}