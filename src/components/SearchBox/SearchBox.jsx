import React, { useId } from 'react'
import s from './SearchBox.module.css'
const SearchBox = ({ value, setFilter, contactsData }) => {
  const id = useId();

  return (
    <div className={s.wrapper}>
    <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" name='nameContact' onChange={(e) => setFilter((e.target.value).trim())} value={value} className={s.input} readOnly={contactsData.length === 0} />
    </div>

  )
}

export default SearchBox