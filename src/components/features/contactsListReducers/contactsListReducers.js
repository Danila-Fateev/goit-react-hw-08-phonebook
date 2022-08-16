import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    contacts: {
        items:     window.localStorage.getItem('storageContacts')
      ? JSON.parse(window.localStorage.getItem('storageContacts'))
      : [],
        filter: ''
    }
}
export const listContactsSlice = createSlice({
    name: 'contactsList',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.items = [action.payload, ...state.contacts.items]
            window.localStorage.setItem('storageContacts',JSON.stringify(state.contacts.items))
        },
        deleteContacts: (state, action) => {
            state.contacts.items = state.contacts.items.filter(el => el.id !== action.payload.id)
            window.localStorage.setItem('storageContacts',JSON.stringify(state.contacts.items))
        },
               setFilter: (state, action) => {
         state.contacts.filter = action.payload   
        }
    }
})

export const { addContact, deleteContacts, setFilter } = listContactsSlice.actions

export default listContactsSlice.reducer