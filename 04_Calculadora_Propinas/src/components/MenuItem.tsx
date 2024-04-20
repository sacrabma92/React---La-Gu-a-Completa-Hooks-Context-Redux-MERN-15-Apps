import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button onClick={()=> addItem(item)} className="border-2 border-sky-600 hover:bg-sky-400 w-full p-3 flex justify-between rounded-md">
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

