import React from 'react'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
const ContactList = ({data, onDelete}) => {
  return (
    <ul className={s.contactsList}>
      {data.map(cont => <li key={cont.id}><Contact data={cont} onDelete={onDelete} className={s.itemContact} /></li>)}
    </ul>
  )
}

export default ContactList