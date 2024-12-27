import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todolistApp = createApi({
    reducerPath: 'todolistApp',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['Post'],
    endpoints: build => {
        return {
            getTodoApp: build.query<any[], void>({
                query: () => 'photos',
                providesTags: ['Post']
            })

        }
    }
})

export const {useGetTodoAppQuery} = todolistApp