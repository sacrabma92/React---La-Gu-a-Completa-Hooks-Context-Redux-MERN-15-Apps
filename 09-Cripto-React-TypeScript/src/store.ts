import axios from "axios";
import { create } from "zustand";
import { CryptoCurrencyReponseSchema } from "./schema/crypto-schema";

async function getCryptos(){
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const {data: {Data}} = await axios(url)
  const result = CryptoCurrencyReponseSchema.safeParse(Data)
  console.log(result)
}

export const useCrypeStore = create(() => ({
  fetchCryptos: async () => {
    getCryptos()
  }
}))