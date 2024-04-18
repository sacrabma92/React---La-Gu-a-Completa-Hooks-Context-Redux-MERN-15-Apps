import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className="border-2 border-sky-600 hover:bg-sky-400 w-full p-3 flex justify-between rounded-md">
      <div className="flex items-center">
        <div className="w-6">
          {item.name.includes('Pizza') ? (
            <img src={`public/img/pizza.png`} alt="pizza" />
          ) : item.name.includes('Jugo') ? (
            <img src={`public/img/jugo.png`} alt="jugo" />
          ) : item.name.includes('Pastel') ? (
            <img src={`public/img/pastel.png`} alt="pastel" />
          ) : item.name.includes('Rib') ? (
            <img src={`public/img/carne.png`} alt="pastel" />
          ) : item.name.includes('Café') ? (
            <img src={`public/img/cafe.png`} alt="pastel" />
          ) : item.name.includes('Rebanada') ? (
            <img src={`public/img/rebanada.png`} alt="pastel" />
          ) : item.name.includes('Tequila') ? (
            <img src={`public/img/tequila.png`} alt="pastel" />
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

