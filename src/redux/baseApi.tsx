import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TAG_TYPES = ["AUTH"] as const;

export type TTagTypes = (typeof TAG_TYPES)[number];

const baseQuery = fetchBaseQuery({
  baseUrl: "API_URL",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "MULTI_STEP_FORM_API",
  baseQuery,
  tagTypes: TAG_TYPES,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
