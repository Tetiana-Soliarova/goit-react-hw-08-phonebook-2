import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions'

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
})

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
  loading,
})
