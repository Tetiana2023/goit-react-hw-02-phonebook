import { Component } from 'react';
import React from 'react';
import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  addNewContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const { contacts } = this.state;
    const isContactExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    isContactExist ? alert(`${name} is alreadi in contacts`)
    : this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }))
  }

  hendleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  hendleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormContact onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <FilterContact
          value={this.state.filter}
          hendleFilter={this.hendleFilter}
        />
        <ContactList
          contacts={this.state.contacts}
          hendleDeleteContact={this.hendleDeleteContact}
        />
      </div>
    );
  }
}
