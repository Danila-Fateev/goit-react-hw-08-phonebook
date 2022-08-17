import { configureStore } from "@reduxjs/toolkit";
import listContactsSlice from "./contactsListReducers/contactsListReducers";

export const store = configureStore({
    reducer: {
      contacts: listContactsSlice,
  },
})
