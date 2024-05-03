import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { CryptoCurrencies, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CruptoServices";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies,
  result: CryptoPrice,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}



export const useCrypeStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  result: {} as CryptoPrice,
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos()
    set(() => ({
      cryptocurrencies
    }))
  },
  fetchData: async (pair) => {
    const result = await fetchCurrentCryptoPrice(pair)
    set(() => ({
      result
    }))
  }
})))