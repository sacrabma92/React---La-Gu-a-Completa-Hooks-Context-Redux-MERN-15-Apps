import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Guitar } from "./components/Guitar"
import { useEffect, useReducer } from "react"

import { cartReducer, initialState } from "./reducers/cart-reducer"
import { Guitarl } from "./types"



function App() {
  
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },[state.cart])

  return (

    <>
      <Header 
        cart={state.cart}
        dispatch={dispatch}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

        {state.data.map((guitar : Guitarl) => (
          <Guitar 
          key={guitar.id} 
          guitar={guitar}
          dispatch={dispatch}
          />
        ))}

        </div>
      </main>


      <Footer />

    </>
  )
}

export default App
