import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button onClick={()=> dispatch({type: 'add-item', payload: {item}})} className="border-2 border-sky-600 hover:bg-sky-400 w-full p-3 flex justify-between rounded-md">
      <div className="flex items-center">
        <div className="w-6">
          {item.name.includes('Pizza') ? (
            <img src={"./img/pizza.png"} alt="pizza" />
          ) : item.name.includes('Jugo') ? (
            <img src={"./img/jugo.png"} alt="jugo" />
          ) : item.name.includes('Pastel') ? (
            <img src={"./img/pastel.png"} alt="pastel" />
          ) : item.name.includes('Rib') ? (
            <img src={"./img/carne.png"} alt="pastel" />
          ) : item.name.includes('Café') ? (
            <img src={"./img/cafe.png"} alt="pastel" />
          ) : item.name.includes('Rebanada') ? (
            <img src={"./img/rebanada.png"} alt="pastel" />
          ) : item.name.includes('Tequila') ? (
            <img src={"./img/tequila.png"} alt="pastel" />
          ) : (
            null
          )}
        </div>
        <p className="font-medium ml-2">{item.name}</p>
      </div>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

