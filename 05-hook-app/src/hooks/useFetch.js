import { useEffect, useState } from "react"

export const useFetch = () => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
  
  getFetch()

  }, [])
  

  const getFetch = async() => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1')

    if( !resp.ok ){
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: resp.statusText
      })
      return
    }

    const data = await resp.json()
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })
  }


  return{
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
