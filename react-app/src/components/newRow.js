import React, {useState} from 'react';

export default function NewRowComponent({addNewUser}) {
  const [formStatus, setFormStatus] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(true);
  const [newUser, setNewUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const formClasses = ['page-main__form'];
  if (formStatus) {
    formClasses.push('page-main__form--show');
  }

  const buttonClickHandler = () => {
    setFormStatus(!formStatus);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    addNewUser(newUser);
    setNewUser(Object.assign({}, newUser, {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }));
  }

  const submitStatusCheck = () => {
    if (!!newUser.id && !!newUser.firstName && !!newUser.lastName && !!newUser.email && !!newUser.phone) {
      setSubmitStatus(false);
    } else {
      setSubmitStatus(true);
    }
  };

  return (
    <div className="page-main__adds-container">
      <button className="page-main__add-button" onClick={buttonClickHandler}>{formStatus ? `Закрыть форму` : `Открыть форму`}</button>
      <form className={formClasses.join(' ')} onSubmit={formSubmitHandler} onChange={submitStatusCheck}>
        <fieldset className="page-main__fieldset">
          <ul className="page-main__list">
              <li className="page-main__item">
                <label htmlFor="user-id">id</label>
                <input value={newUser.id} 
                onChange={ev => setNewUser(Object.assign({}, newUser, {
                  id: Number(ev.target.value)
                }))} 
                className="page-main__input" type="text" name="user-id" id="user-id" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-first-name">firstName</label>
                <input value={newUser.firstName}
                onChange={ev => setNewUser(Object.assign({}, newUser, {
                  firstName: ev.target.value
                }))}
                className = "page-main__input" type="text" name="user-first-name" id="user-first-name" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-first-name">secondName</label>
                <input value={newUser.lastName}
                onChange={ev => setNewUser(Object.assign({}, newUser, {
                  lastName: ev.target.value
                }))} 
                className = "page-main__input" type="text" name="user-second-name" id="user-second-name" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-email">email</label>
                <input value={newUser.email}
                onChange={ev => setNewUser(Object.assign({}, newUser, {
                  email: ev.target.value
                }))}  
                className = "page-main__input" type="email" name="user-email" id="user-email" required />
              </li>
              <li className = "page-main__item">
                <label htmlFor = "user-phone">phone</label>
                <input value={newUser.phone}
                onChange={ev => setNewUser(Object.assign({}, newUser, {
                  phone: ev.target.value
                }))}   
                className = "page-main__input" type="phone" name="user-phone" id="user-phone" required />
              </li>
            </ul>
        </fieldset>
        <button className ="popup-call__button" type="submit" disabled={submitStatus}>Добавить пользователя</button>
      </form>
    </div>
  )
}