import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heaveStuff = ( iteracionNumber = 100 ) => {
  for(let i=0; i < iteracionNumber; i++){
    console.log('Ahi vamos...')
  }
  return `${ iteracionNumber } iteraciones realizadas`
}


export const MemoHook = () => {

  const { counter, increment } = useCounter( 4000 )
  const [show, setShow] = useState(true)

  const memorizeValue = useMemo(() => heaveStuff(counter), [counter] )


  return (
    <div>
      <h1>Counter <small>{ counter }</small> </h1>
      <hr />

      <h4>{ memorizeValue }</h4>

      <button className="btn btn-primary" onClick={ () => increment() }>+1</button>

      <button className="btn btn-outline-primary" onClick={() => setShow( !show )}>Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
}
