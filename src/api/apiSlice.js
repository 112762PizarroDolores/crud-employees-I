//import de fetchBaseQuery, para hacer peticiones no manuales
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//aca se definen las funciones de peticiones http
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "/api/employees", 
    }),
  }),
});
// Hook para poder solicitar datos
export const { useGetEmployeesQuery } = apiSlice;