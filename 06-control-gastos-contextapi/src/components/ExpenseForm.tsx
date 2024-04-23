import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { ChangeEvent, FormEvent, useState } from "react";
import { DrafExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";



export default function ExpenseForm() {

  const [expense, setExpense] = useState<DrafExpense>({
    amount: 0,
    expensename: '',
    category: '',
    date: new Date()
  })
  const [error, setError] = useState('')

  const { dispatch } = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    const isAmountField = ['amount'].includes(name)
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value
    })
  }

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //validar
    if (Object.values(expense).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }

    // Agregar un nuevo gasto
    dispatch({ type: 'add-expense', payload: { expense } })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-orange-600 py-2">Nuevo Gasto</legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nombre Gasto:</label>
        <input value={expense.expensename} onChange={handleChange} type="text" id="expenseName" placeholder="Añade el nombre del gasto" className="bg-slate-100 p-2" name="expensename" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">Cantidad:</label>
        <input value={expense.amount} onChange={handleChange} type="number" id="amount" placeholder="Añade la cantidad del gasto Ej: 300" className="bg-slate-100 p-2" name="amount" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">Categoria:</label>
        <select
          value={expense.category}
          onChange={handleChange}
          id="category"
          className="bg-slate-100 p-2"
          name="category"
        >
          <option value="">--Seleccione--</option>
          {categories.map(categoria => (
            <option
              key={categoria.id}
              value={categoria.id}
            >
              {categoria.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl">Fecha Gasto:</label>
        <DatePicker
          className='bg-slate-100 p-2 boder-0'
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-orange-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'Registrar gasto'}
      />
    </form>
  )
}
