import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
      const userIndex = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(userIndex, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => {
  return state.contacts.items;
};