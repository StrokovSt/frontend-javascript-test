import React, { useState } from 'react';

export default function SearchFormComponent({usersFilter}) {
  const [searchValue, setSearchValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    usersFilter(searchValue)
  }

  return (
    <form className="page-main__search-form" onSubmit={submitHandler}>
      <input value={searchValue} onChange={ev => setSearchValue(ev.target.value)} type="text" placeholder="Search..." name="search" />
      <button type="submit">Submit</button>
    </form>
  )
}

