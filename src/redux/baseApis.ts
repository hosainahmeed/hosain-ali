import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";

const baseApis = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState & { auth?: { accessToken?: string } };
      const token = state?.auth?.accessToken;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "hero",
    "user",
    "Service",  
    "gallery",
    "about-us",
    "contact-us",
    "faq",
    "partner",
    "privacy-policy",
    "slider",
    "terms-conditions",
    "testimonial",
    "contact",
    "legal-info",
  ],
  endpoints: () => ({}),
});

export default baseApis;
