import React from 'react';

export default function GreetingSectionComponent({setUrl}) {
  return (
    <section className="greeting-section">
      <h1>Построение таблицы</h1>
      <p>Пожалуйста выберите набор данных для постройки таблицы контактов</p>
      <button onClick={() => setUrl(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)}>
      Малый набор данных (32 контакта)</button>
      <button onClick={() => setUrl('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')}>Большой набор данных (1000 контактов)</button>
    </section>
  )
}

