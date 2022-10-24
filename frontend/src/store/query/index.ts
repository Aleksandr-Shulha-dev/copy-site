import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from '../../common/enums';
import { RegistrationFormGroup } from '../../common/types';

export const senderApi = createApi({
  reducerPath: 'senderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Api.BASE,
  }),
  tagTypes: ['Character'],
  endpoints: (builder) => ({
    sendMail: builder.mutation<void, RegistrationFormGroup>({
      query: (data) => ({
        url: Api.SEND,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendMailMutation } = senderApi;