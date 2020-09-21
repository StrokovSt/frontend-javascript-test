import React, { useState } from 'react';
import RowDetailsComponent from './rowDetails';
import TableRowComponent from './tableRow';

export default function TableComponent(props) {
  const [selectedUser, setSelectedUser] = useState({});
  
  const [thStatus, setThStatus] = useState(
    {id: true,
    firstName: true,
    lastName: true,
    email: true,
    phone: true
  });

  const thHandler = (key) => {
    setThStatus(Object.assign({}, thStatus, {
      [key]: !thStatus[key]
    }));
    props.onThHandler(thStatus[key], key);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  }

  return (
    <div>
      <table className="page-main__table">
        <tbody>
          <tr className="page-main__tr page-main__tr--heading">
            <th className="page-main__th" onClick={() => thHandler('id')}>id</th>
            <th className="page-main__th" onClick={() => thHandler('firstName')}>имя</th>
            <th className="page-main__th" onClick={() => thHandler('lastName')}>фамилия</th>
            <th className="page-main__th" onClick={() => thHandler('email')}>email</th>
            <th className="page-main__th" onClick={() => thHandler('phone')}>телефон</th>
          </tr>

          {props.users.map((user, index) => {
            return <TableRowComponent rowNumber={index} user={user} key={index} selectUser={selectUser}/>
          })}

        </tbody>
      </table>

      <RowDetailsComponent user={selectedUser}/>
    </div>
  )
}