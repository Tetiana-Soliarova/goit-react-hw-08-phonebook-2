import axios from 'axios';
import  {addContactRequest,  addContactSuccess, addContactError, deleteTodoRequest,deleteTodoSuccess, deleteTodoError, fetchContactRequest, fetchContactSuccess, fetchContactError} from './contacts-actions'

//axios.defaults.baseURL = 'http://localhost:4040';

 export const fetchContact = () => dispatch => { 
    dispatch(fetchContactRequest());

    axios
        .get(`/contacts`)
        .then(({data}) =>
            dispatch(fetchContactSuccess(data) ),
        )
        .catch(error => dispatch(fetchContactError(error.message) ));
}

export const addContact = (text) => dispatch => {
  const contact = {
    name: text.name,
    number: text.number,
  };
  dispatch(addContactRequest());
  axios
    .post(`/contacts`, contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.massage)));
};

export const deleteTodo = contactId => dispatch => { 
    dispatch(deleteTodoRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() =>
            dispatch(deleteTodoSuccess(contactId) ),
        )
        .catch(error => dispatch(deleteTodoError(error.message) ));
}


