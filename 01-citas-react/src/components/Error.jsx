import { useState, useEffect } from "react"

const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white font-bold uppercase text-center p-3 rounded mb-3">
    <p>{children}</p>
  </div>
  )
}

export default Error