import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { CryptoCurrencies, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CruptoServices";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}



export const useCrypeStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos()
    set(() => ({
      cryptocurrencies
    }))
  },
  fetchData: async (pair) => {
    const result = await fetchCurrentCryptoPrice(pair)
    console.log(result)
  }
})))