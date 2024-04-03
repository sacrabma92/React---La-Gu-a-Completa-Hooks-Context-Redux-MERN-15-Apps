import { useFetch } from "../hooks"


export const MultipleCustomHook = () => {

  const { data, hasError, isLoading } = useFetch()

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading && <p> Cargando....</p> }

      <pre>{ JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
