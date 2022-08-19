import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./services/contacts";
import filterReducers from "./contactsListReducers/filterReducers";

export const store = configureStore({
    reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
      filter: filterReducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})
