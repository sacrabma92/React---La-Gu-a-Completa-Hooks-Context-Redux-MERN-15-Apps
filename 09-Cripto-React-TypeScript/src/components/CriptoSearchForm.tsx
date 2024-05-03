import { useCrypeStore } from "../store"
import { currencies } from "../data"
import { useState } from "react"
import { Pair } from "../types"



export default function CriptoSearchForm() {

  const cryptocurrencies = useCrypeStore((state) => state.cryptocurrencies)
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptoCurrency: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currenct" onChange={handleChange}>
          <option value="">--Seleccione--</option>
          {currencies.map(currency => (
            <option value={currency.code} key={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency" onChange={handleChange}>
          <option value="">--Seleccione--</option>
          {cryptocurrencies.map(crypto => (
            <option
              key={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value='Cotizar' />
    </form>
  )
}
