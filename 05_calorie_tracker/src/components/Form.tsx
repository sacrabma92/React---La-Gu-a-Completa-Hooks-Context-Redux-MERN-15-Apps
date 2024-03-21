import { useState, ChangeEvent } from "react"
import { categories } from "../data/categories"
import { Activity } from '../types'


export default function Form() {

  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0
  })


  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }


  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Categoria:</label>
        <select value={activity.category} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg w-full bg-white" id="name" >
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input value={activity.name} onChange={handleChange} id="activity" type="text" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de Naranjja, Ensalada, Pesas, Bicicleta" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input value={activity.calories} onChange={handleChange} id="calories" type="number" className="border border-slate-300 p-2 rounded-lg" placeholder="Calorias. ej. 300 0 500" />
      </div>

      <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer" value='Guardar' />
    </form>
  )
}
