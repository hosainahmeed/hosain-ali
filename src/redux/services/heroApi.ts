import baseApis from "../baseApis";
import type { IHeroApiResponse } from "../../types/hero.types";

export const heroApi = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getHeroData: builder.query<IHeroApiResponse, void>({
      query: () => "/hero/get-hero-data",
      providesTags: ["hero"],
    }),
  }),
});

export const { useGetHeroDataQuery } = heroApi;
