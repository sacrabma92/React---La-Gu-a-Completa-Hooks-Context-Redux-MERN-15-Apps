import { useMemo } from "react"
import { useCrypeStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCrypeStore((state) => state.result)
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

  return (
    <div>
      {hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">

            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
