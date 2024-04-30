import { create } from "zustand";

export const useCrypeStore = create(() => ({
  fetchCryptos: async () => {
    console.log('Desde FetchCryptos')
  }
}))