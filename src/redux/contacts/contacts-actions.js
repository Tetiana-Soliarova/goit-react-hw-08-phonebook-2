//import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');



export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');



export const deleteTodoRequest = createAction('contact/deleteTodoRequest');
export const deleteTodoSuccess = createAction('contact/deleteTodoSuccess');
export const deleteTodoError = createAction('contact/deleteTodoError');

//export const deleteTodo=createAction('contact/Delete')



export const changeFilter = createAction('contacts/changeFilter')



//export default { addContactRequest,  addContactSuccess, addContactError, deleteTodo, changeFilter};