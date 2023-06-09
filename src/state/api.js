import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api/v1/users'}),
    reducerPath: '',
    tagTypes: ['User', 'Products', 'Customers', 'Transactions'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `/`,
            providesTags: ['User']
        }),
        getProducts: build.query({
            query: () => '/client/products',
            providesTags: ['Products']
        }),
        getCustomers: build.query({
            query: () => '/client/customers',
            providesTags: ['Customers']
        }),
        getTransactions: build.query({
            query: ({page, pageSize, sort, search}) => ({
                url: 'client/transactions',
                method: 'GET',
                params: {page, pageSize, sort, search}
            }),
            providesTags: ['Transactions']
        }),
    })
})

export const {useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery } = api;