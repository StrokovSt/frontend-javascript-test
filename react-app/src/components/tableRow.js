import React from 'react';

export default function TableRowComponent({user}) {
  return (
    <tr className="page-main__tr">
      <td className="page-main__td">{user.id}</td>
      <td className="page-main__td">{user.firstName}</td>
      <td className="page-main__td">{user.lastName}</td>
      <td className="page-main__td">{user.email}</td>
      <td className="page-main__td">{user.phone}</td>
    </tr>
  )
}