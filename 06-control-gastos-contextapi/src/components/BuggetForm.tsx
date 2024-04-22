import { ChangeEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BuggetForm() {

  const [budget, setBudget] = useState(0)
  const { dispatch } = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'add-budget', payload: { budget } })
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          className="text-4xl text-orange-600 font-bold text-center"
          htmlFor="budget"
        >Definir Presupuesto</label>
        <input
          className="w-full bg-white border border-gray-200 p-2"
          onChange={handleChange}
          value={budget}
          type="number"
          id="budgetID"
          name="budget"
        />
      </div>

      <input
        className="bg-orange-600 hover:bg-orange-700 cursor-pointer w-full p-2 text-white font-black disabled:opacity-40"
        type="submit"
        value='Definir Presupuesto'
        disabled={isValid}
      />
    </form>
  )
}
