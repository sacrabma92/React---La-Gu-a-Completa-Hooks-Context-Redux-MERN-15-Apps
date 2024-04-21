import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import { Activities } from "../types"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

const initialState : Activities = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}

export default function Form({ dispatch }: FormProps) {

  const [activity, setActivity] = useState<Activities>(initialState)

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  // Deshabilita el boton en caso que actividad y calorias no contengan datos
  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: 'save-activity', payload: { newActivity: activity } })
    setActivity(
      {
        ...initialState,
        id: uuidv4()
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white shadow p-10 rounded-lg">

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
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input
          value={activity.name}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta...."
          type="text"
          id="name"
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
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        type="submit"
        disabled={!isValidActivity()}
      />
    </form>
  )
}
