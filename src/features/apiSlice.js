import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from './authSlice'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rocket-bank-6ac2a01241f4.herokuapp.com/user/',
    // credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
    // }
  }),

  endpoints: (build) => ({
    // getLogin: build.mutation({
    //   query: userInfo => ({
    //     url: "login",
    //     method: "POST",
    //     body: {...userInfo},
    //   }),
    // }),
    getUser: build.query({
      query: () => ({
        url: '',
        method: 'GET',

      })
    }),

    getAccount: build.query({
      query: () => 'accounts',
    }),

    createAccount: build.mutation({
      query(data) {
        const { userId, body } = data
        return {
          url: `accounts/${userId}`,
          method: 'POST',
          body
        }
      }
    }),

    updateAccount: build.mutation({
      query(data) {
        const { id, body } = data
        return {
          url: `accounts/${id}`,
          method: 'PUT',
          body
        }
      },
    }),

    updateAccountBalance: build.mutation({
      query(data) {
        const { id, body } = data
        return {
          url: `accounts/${id}`,
          method: 'PUT',
          body
        }

      },
    }),

    deleteAccount: build.mutation({
      query(id) {
        return {
          url: `accounts/${id}`,
          method: 'DELETE'
        }
      },
    }),


    getTransactions: build.query({
      query(id) {
        return {
          url: `accounts/${id}/transactions`,
          method: 'GET'
        }
      },
    }),

    createTransaction: build.mutation({
      query(data) {
        const { userId, body } = data
        return {
          url: `accounts/${userId}/transactions`,
          method: 'POST',
          body
        }
      }
    }),
  })
})


export const {
  useGetUserQuery,
  useGetAccountQuery,
  useCreateAccountMutation,
  useUpdateAccountBalanceMutation,
  useGetTransactionsQuery,
  useCreateTransactionMutation
} = apiSlice;

