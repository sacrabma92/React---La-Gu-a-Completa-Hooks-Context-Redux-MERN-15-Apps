import { useCrypeStore } from "../store"
import { currencies } from "../data"
import { useState } from "react"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"



export default function CriptoSearchForm() {

  const cryptocurrencies = useCrypeStore((state) => state.cryptocurrencies)
  const fetchData = useCrypeStore((state) => state.fetchData)

  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')

    fetchData(pair)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currenct" onChange={handleChange} value={pair.currency}>
          <option value="">--Seleccione--</option>
          {currencies.map(currency => (
            <option value={currency.code} key={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency" onChange={handleChange} value={pair.criptocurrency}>
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
