import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({contacts})=> {
    return (
        <>
        <ul >
            {contacts.map(({id, name, number }) =>(
            <li key ={id}>           
             
            <ContactItem 
            name={name}
            number={number}/>
            </li>))} 
        </ul>
        </>
    )

}