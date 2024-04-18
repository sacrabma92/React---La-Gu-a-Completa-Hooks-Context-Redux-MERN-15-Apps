import { useState } from "react"
import { OrderItem } from "../types"

export default function useOrder() {

  const [order, setOrder] = useState<OrderItem[]>([])

  return {

  }
}