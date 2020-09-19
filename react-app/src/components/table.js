import React, { useState } from 'react';
import TableRowComponent from './tableRow';

export default function TableComponent(props) {
  
  let [thStatus, setThStatus] = useState(
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
  }

  return (
    <table className="page-main__table">
      <tbody>
        <tr className="page-main__tr">
          <th className="page-main__th" onClick={() => thHandler('id')}>id</th>
          <th className="page-main__th" onClick={() => thHandler('firstName')}>имя</th>
          <th className="page-main__th" onClick={() => thHandler('lastName')}>фамилия</th>
          <th className="page-main__th" onClick={() => thHandler('email')}>email</th>
          <th className="page-main__th" onClick={() => thHandler('phone')}>телефон</th>
        </tr>

        {props.users.map((user, index) => {
          return <TableRowComponent user={user} key={index}/>
        })}

      </tbody>
    </table>
  )
}