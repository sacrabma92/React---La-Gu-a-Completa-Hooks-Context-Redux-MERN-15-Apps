import { useMemo } from "react"
import { useCrypeStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCrypeStore((state) => state.result)
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Cryptomoneda" />
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
              <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
              <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
              <p>Variación ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
