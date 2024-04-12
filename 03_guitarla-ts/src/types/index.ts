export type Guitarl = {
	id: number
	name: string
	image: string
	description: string
	price: number
}

// Heredar los types de Guitarl y añade quantity
export type CartItem = Guitarl &{
  quantity: number
}

// Decemos que de Guitarl solamente tome el de tipo id
export type GuitarID = Guitarl['id']

/** Esta se usa */
// export type CartItem = Pick<Guitarl, 'id' | 'name' | 'price' > & {
//   quantity: number
// }