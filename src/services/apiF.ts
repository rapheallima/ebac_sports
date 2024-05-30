import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const apiF = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getFavoritos: builder.query<Produto[], void>({
      query: () => 'favoritos'
    })
  })
})

export const { useGetFavoritosQuery } = apiF
export default apiF
