import React from 'react';

export default function TableRowComponent({user, rowNumber, selectUser}) {

  const trHandler = () => {
    selectUser(user);
  }

  return (
    <tr id={"tr" + rowNumber} className="page-main__tr" onClick={trHandler}>
      <td className="page-main__td">{user.id}</td>
      <td className="page-main__td">{user.firstName}</td>
      <td className="page-main__td">{user.lastName}</td>
      <td className="page-main__td">{user.email}</td>
      <td className="page-main__td">{user.phone}</td>
    </tr>
  )
}