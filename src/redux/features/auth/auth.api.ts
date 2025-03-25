import { baseApi, TTagTypes } from "@/redux/baseApi";

// Injecting endpoints into the base API
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new Area
    register: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => [
        { type: "AUTH" as TTagTypes, id: result?.id },
        "AUTH" as TTagTypes,
      ],
    }),
  }),
});

// Export hooks for consuming the API endpoints in components
export const { useRegisterMutation } = authApi;
