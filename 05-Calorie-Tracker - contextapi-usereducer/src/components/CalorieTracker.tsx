import CaloriDisplay from "./CaloriDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CalorieTracker() {

  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()

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
