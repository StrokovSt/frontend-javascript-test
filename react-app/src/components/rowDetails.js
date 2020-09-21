import React from 'react';

export default function RowDetailsComponent({user}) {
  if (Object.keys(user).length === 0) {
    return null;
  }
  return (
    <div className="page-main__details-container">
      <div className="page-main__details-avatar">
        <p><b>{user.firstName} {user.lastName}</b></p>
        <img src="../img/avatar.png" alt="Аватар пользователя"></img>
      </div>
      <div className="page-main__details-description">
        <textarea value={user.description} readOnly />
        <p>Адресс проживания:<b>{user.hasOwnProperty('address') ? user.address.streetAddress : 'Не указан'}</b></p>
        <p>Город:<b>{user.hasOwnProperty('address') ? user.address.city : 'Не указан'}</b></p>
        <p>Провинция/штат:<b>{user.hasOwnProperty('address') ? user.address.state : 'Не указан'}</b></p>
        <p>Индекс:<b>{user.hasOwnProperty('address') ? user.address.zip : 'Не указан'}</b></p>
      </div>
    </div>
    )
}