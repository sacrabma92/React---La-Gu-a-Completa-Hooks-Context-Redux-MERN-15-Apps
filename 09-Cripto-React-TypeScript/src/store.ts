import { create } from "zustand";
import axios from "axios";
import { devtools } from 'zustand/middleware'
import { CryptoCurrencyReponseSchema } from "./schema/crypto-schema";
import { CryptoCurrencies } from "./types";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies,
  fetchCryptos: () => Promise<void>
}

async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const { data: { Data } } = await axios(url)
  const result = CryptoCurrencyReponseSchema.safeParse(Data)

  if (result.success) {
    return result.data
  }
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