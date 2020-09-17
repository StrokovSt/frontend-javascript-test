import React, { useState } from 'react';
import NewRowComponent from '../components/newRow';
import TableComponent from '../components/table';

export const MainPage = () => {
  let [users, setUsers] = useState([
    {id: 4, firstName: "Вася", lastName: "Голованов", email: "vasska@golovach.com", phone: 123 },
    {id: 2, firstName: "Даня", lastName: "Данилович", email: "donich@golovach.com", phone: 333 },
    {id: 3, firstName: "Вова", lastName: "Вавилович", email: "vovka@golovach.com", phone: 222 },
    {id: 1, firstName: "Наташа", lastName: "Батьковна", email: "nata@golovach.com", phone: 8913 }
  ])

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
  }
  
  return (
    <div className="page-main container">
      <h1>Main page</h1>
      <NewRowComponent />
      <TableComponent users={users} onThHandler={usersSort}/>
    </div>
  )
}