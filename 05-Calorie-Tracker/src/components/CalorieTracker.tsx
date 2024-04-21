import { useMemo } from "react"
import type { Activities } from "../types"
import CaloriDisplay from "./CaloriDisplay"

type CalorieTrackerProps = {
  activities: Activities[]
}
export default function CalorieTracker({ activities }: CalorieTrackerProps) {

  //Contadores
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriDisplay
          calories={caloriesConsumed}
          text="Consumidas"
        />
        <CaloriDisplay
          calories={caloriesBurned}
          text="Ejercicio"
        />
        <CaloriDisplay
          calories={netCalories}
          text="Calorias quemadas"
        />
        
      </div>
    </>
  )
}
