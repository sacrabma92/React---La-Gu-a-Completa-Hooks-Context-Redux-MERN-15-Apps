import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyReponseSchema, PairSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrencyReponseSchema>
export type Pair = z.infer<typeof PairSchema>