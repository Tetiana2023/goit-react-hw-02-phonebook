import { Component } from 'react';
import React from 'react';

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

  handleInputChange = event => {
// console.log(event.currentTarget.value)
const {name, value }= event.currentTarget
this.setState({[name]: value})
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)


  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        
        <h2>Contacts</h2>
      </div>
    );
  }
}
