import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage"
import { Quote } from "./Quote"


export const Layout = () => {

  const { counter, increment } = useCounter(1)
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  return (
    <>
    <h1>BreakingBad Quptes</h1>
    <hr />

    { isLoading ? <LoadingMessage/> : <Quote author={author} quote={quote}/>}

    <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>
      Nex Quoute
    </button>
    </>
  )
}
