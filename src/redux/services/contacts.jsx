import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query() {
        return {
          url: `contacts`,
          method: 'GET',
          headers: {
            Authorization: axios.defaults.headers.common.Authorization,
          },
        };
      },
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
          headers: {
            Authorization: axios.defaults.headers.common.Authorization,
          },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query(body) {
        return {
          url: `contacts`,
          method: 'POST',
          body,
          headers: {
            Authorization: axios.defaults.headers.common.Authorization,
          },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
