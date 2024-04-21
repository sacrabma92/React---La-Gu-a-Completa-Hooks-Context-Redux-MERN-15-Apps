import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-sky-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase
          ">Contador de Calorias</h1>
        <button className="bg-white px-2 uppercase font-bold hover:bg-green-500 hover:text-white rounded">Reset</button>
        </div>

        <section className="bg-sky-500 py-20 px-5 mt-5">
          <div className="max-w-4xl mx-auto">
            <Form 
              dispatch={dispatch}
            />
          </div>
        </section>

        <section className="p-10 mx-auto max-w-4xl">
          <ActivityList 
            activities={state.activities}
          />
        </section>
      </header>
    </>
  )
}

export default App