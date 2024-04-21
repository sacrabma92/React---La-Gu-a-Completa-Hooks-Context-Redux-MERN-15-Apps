import { Dispatch, useCallback } from "react"
import { OrderItem } from "../types"
import { formmatCurrency } from "../helpers"
import { OrderActions } from '../reducers/order-reducer'

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

  const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
  const totalPay = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formmatCurrency(subtotalAmount())}</span>
        </p>
        <p>Propina: {''}
          <span className="font-bold">{formmatCurrency(tipAmount())}</span>
        </p>
        <p>Total a pagar: {''}
          <span className="font-bold">{formmatCurrency(totalPay())}</span>
        </p>
      </div>

      <button onClick={() => dispatch({type: 'place-order'})} disabled={totalPay() === 0} className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10">Guardar Orden</button>
    </>
  )
}
