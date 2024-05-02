import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { CryptoCurrencies } from "./types";
import { getCryptos } from "./services/CruptoServices";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies,
  fetchCryptos: () => Promise<void>
}



export const useCrypeStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos()
    set(() => ({
      cryptocurrencies
    }))
  }
})))