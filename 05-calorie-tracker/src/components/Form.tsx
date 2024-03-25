import { useState, ChangeEvent, FormEvent, Dispatch } from "react"

import { v4 as uuidv4 } from 'uuid'

import { Activity } from '../types'
import { categories } from "../data/categories"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}

export default function Form({ dispatch }: FormProps) {

  const [activity, setAcvtivity] = useState<Activity>(initialState)

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setAcvtivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: "save-activity", payload: { newActivity: activity } })
    setAcvtivity({
      ...initialState,
      id: uuidv4()
    })

  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>

      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category" >Categoría:</label>
        <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" name="" id="category" value={activity.category} onChange={handleChange} >
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="name" >Actividad:</label>
        <input className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de Naramja, Ensalada..." type="text" id="name" value={activity.name} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="calories" >Actividad:</label>
        <input className="border border-slate-300 p-2 rounded-lg" placeholder="Calorias Ej. 500, 200" type="number" id="calories" value={activity.calories} onChange={handleChange} />
      </div>

      <input className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10" type="submit" value={activity.category === 1 ? 'Gaurdar Comida' : 'Guardar Ejercicio'} disabled={!isValidActivity()} />

    </form>
  )
}
