import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyReponseSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrencyReponseSchema>