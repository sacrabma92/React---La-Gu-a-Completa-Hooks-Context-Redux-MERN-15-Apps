import CriptoSearchForm from "./components/CriptoSearchForm"; 
import { useCrypeStore } from "./store";
import { useEffect } from "react";

export default function App() {
  const fetchCryptos = useCrypeStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])
  
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  )
}
