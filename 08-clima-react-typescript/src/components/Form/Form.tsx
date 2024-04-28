import { countries } from "../../data/countries";


export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" placeholder="Ciudad" />
      </div>

      <div>
        <label htmlFor="city">Pais:</label>
        <select name="" id="">
          <option value="">--Seleccione un País--</option>
          {countries.map(country => (
            <option key={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consultar Clima" />
    </form>
  )
}
