import { useEffect, useState } from 'react'

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './App.css'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },];
  const [contactsData, setContactsData] = useState(JSON.parse(window.localStorage.getItem('contactsData')) ?? initialContacts);
  const [filter, setFilter] = useState('');
  
  useEffect(() => { window.localStorage.setItem('contactsData', JSON.stringify(contactsData)) }, [contactsData]);

const iziToastCondition = (message) => {
  return iziToast.show({
    theme: 'dark',
    imageWidth: '24px',
    position: 'topRight',
    message:
      `${message}`,
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '24px',
    backgroundColor: '#EF4040',
    timeout: 5000,
    displayMode: 1,
  });
}

  const visibleContacts = contactsData.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()));
if (visibleContacts.length === 0 && contactsData.length !== 0)    iziToastCondition('Sorry, no match found.');

  const onDelete = (id) => {
    setContactsData((prevCont) => {
      return contactsData.filter(cont => cont.id !== id)
    });
  }
  const onAdd = (newData) => {
     
    setContactsData((prev) => {
      
          const uniqueName = prev.every((cont) => cont.name.toLowerCase() !== newData.name.toLowerCase());
          const uniqueTel = prev.every((cont) => String(cont.number) !== String(newData.number))
          if ((!uniqueName && !uniqueTel) || !uniqueTel) {
            iziToastCondition('This number is already added to contacts');
            return prev;
          }
          return [...prev, newData];
        }) 
  }
  return (
    <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={onAdd} />
      <SearchBox value={filter} setFilter={setFilter} contactsData={contactsData} />
      {contactsData.length >= 1 && <ContactList data={visibleContacts} onDelete={onDelete} />}
      {contactsData.length === 0 && <p>The contact sheet is empty. Add your first contact in the form.</p>}
    </>
  )
}

export default App
