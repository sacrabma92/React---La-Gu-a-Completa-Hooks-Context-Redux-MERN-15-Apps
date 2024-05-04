import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { CryptoCurrencies, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CruptoServices";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies,
  result: CryptoPrice,
  loading: boolean,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCrypeStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  result: {} as CryptoPrice,
  loading: false,
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos()
    set(() => ({
      cryptocurrencies
    }))
  },
  fetchData: async (pair) => {
    set(() => ({
      loading: true
    }))
    const result = await fetchCurrentCryptoPrice(pair)
    set(() => ({
      result,
      loading: false
    }))
  }
})))