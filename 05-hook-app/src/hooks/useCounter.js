import { useState } from "react"

export const useCounter = ( initialValue = 100 ) => {

  const [counter, setCounter] = useState( initialValue )

  const increment = ( value = 1 ) => {
    return setCounter( counter + value  )
  }

  const decrement = ( value = 1 ) => {
    if( counter <= 0 ) return;

    return setCounter( counter - value  )
  }

  const reset = () => {
    return setCounter( initialValue )
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}