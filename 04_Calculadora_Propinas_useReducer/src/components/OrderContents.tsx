import { Dispatch } from "react"
import { formmatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl ">Consumo</h2>

      <div className="space-y-3 mt-10">
        {
            order.map(item => (
              <div key={item.id} className="flex justify-between border-t border-sky-200 py-5 last-of-type:border-b items-center">
                <div>
                  <p>
                    {item.name} - {formmatCurrency(item.price)}
                  </p>
                  <p className="font-black">Cantidad: {item.quantity} - {formmatCurrency(item.price * item.quantity)}</p>
                </div>

                <button onClick={() => dispatch({type: 'remove-item', payload:{id: item.id}})} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
              </div>
            ))}
      </div>
    </div>
  )
}
