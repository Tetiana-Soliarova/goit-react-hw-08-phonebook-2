import { Component } from 'react';
import ContactForm from './Form';
import ContactList from '../ContactList/ContactList';

class Phonebook extends Component{
    render() {
        return (
            <div>
                <ContactForm />
                <ContactList/>
               
            </div>
       )
   } 
}
export default Phonebook;