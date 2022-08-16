import { configureStore } from "@reduxjs/toolkit";
import listContactsSlice from "./features/contactsListReducers/contactsListReducers";

export const store = configureStore({
    reducer: {
      contacts: listContactsSlice,
  },
})
