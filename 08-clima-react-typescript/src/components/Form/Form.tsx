import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: () => void
}

export default function Form({fetchWeather}:FormProps) {

  const [search, setSearch] = useState<SearchType>({
    city:'',
    country: ''
  })
  const [alert, setAlert] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Object.values(search).includes('')){
      setAlert('Todos los campos son obligatorios')
      return
    }
    fetchWeather()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" placeholder="Ciudad" value={search.city} onChange={handleChange}/>
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Pais:</label>
        <select name="country" id="country" value={search.country} onChange={handleChange}>
          <option value="">--Seleccione un País--</option>
          {countries.map(country => (
            <option key={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  )
}
