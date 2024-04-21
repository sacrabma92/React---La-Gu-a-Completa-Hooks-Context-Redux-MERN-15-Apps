import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-sky-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase
          ">Contador de Calorias</h1>
        <button 
        className="bg-white px-2 uppercase font-bold hover:bg-sky-900 hover:text-white rounded disabled:opacity-10"
        disabled={!canRestartApp()}
        onClick={() => dispatch({type: 'restart-app'})}
        >Reiniciar App</button>
        </div>

        <section className="bg-sky-500 py-20 px-5 mt-5">
          <div className="max-w-4xl mx-auto">
            <Form 
              dispatch={dispatch}
              state={state}
            />
          </div>
        </section>

        <section className="bg-gray-800 py-10">
          <div className="max-w-4xl mx-auto">
            <CalorieTracker
            activities={state.activities}
            />
          </div>
        </section>

        <section className="p-10 mx-auto max-w-4xl">
          <ActivityList 
            activities={state.activities}
            dispatch={dispatch}
          />
        </section>
      </header>
    </>
  )
}

export default App
