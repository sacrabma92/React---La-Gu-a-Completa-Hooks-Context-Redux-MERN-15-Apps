import { useFetch } from "../hooks"


export const MultipleCustomHook = () => {

  const { data, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/3')

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading && <p> Cargando....</p> }

      <pre>{ data?.name}</pre>
      <pre>{ JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
