import React from 'react';

export default function NewRowComponent() {

  const onAddButtonClick = () => {
    console.log(`You clicked this button`)
  }

  return (
    <div className="page-main__adds-container">
      <button className="page-main__add-button" onClick={onAddButtonClick}>Создать нового пользователя</button>
      <form className="page-main__form">
        <fieldset className = "page-main__fieldset">
          <ul className = "page-main__list">
              <li className = "page-main__item">
                <label htmlFor = "user-id">id</label>
                <input className = "page-main__input" type="text" name="user-id" id="user-id" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-first-name">firstName</label>
                <input className = "page-main__input" type="text" name="user-first-name" id="user-first-name" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-first-name">secondName</label>
                <input className = "page-main__input" type="text" name="user-second-name" id="user-second-name" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-email">email</label>
                <input className = "page-main__input" type="email" name="user-email" id="user-email" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-phone">phone</label>
                <input className = "page-main__input" type="phone" name="user-phone" id="user-phone" required />
              </li>
            </ul>
        </fieldset>
        <button className ="popup-call__button" type="submit">Добавить пользователя</button>
      </form>
    </div>
  )
}