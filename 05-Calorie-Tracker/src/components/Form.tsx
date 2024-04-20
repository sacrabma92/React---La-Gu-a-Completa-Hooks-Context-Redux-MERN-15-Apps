import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {

  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0
  })

  const handleChange = () => {
    console.log('Algo cambio')
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >{category.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input
          value={activity.name}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta...."
          type="text"
          id="activity"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input
          value={activity.calories}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias Ej. 300, 500"
          type="number"
          id="calories"
          onChange={handleChange}
        />
      </div>

      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value='Guardar Comida o Guardar Ejercicio'
        type="submit"
      />
    </form>
  )
}
