import { db } from "../data/db";
import { CartItem, Guitarl } from "../types";

export type CartActions =
  { type: 'add-to-cart', payload: { item: Guitarl } } |
  { type: 'remove-from-cart', payload: { id: Guitarl['id'] } } |
  { type: 'decrease-quantity', payload: { id: Guitarl['id'] } } |
  { type: 'increase-quantity', payload: { id: Guitarl['id'] } } |
  { type: 'clear-cart' }

export type CartState = {
  data: Guitarl[],
  cart: CartItem[]
}

const initialCart = () : CartItem[] => {
  const localStorageCart = localStorage.getItem('cart')
  return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const initialState: CartState = {
  data: db,
  cart: initialCart()
}

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {

  if (action.type === 'add-to-cart') {
    let updatedCart: CartItem[] = []
    const itemExists = state.cart.find((guitar) => guitar.id === action.payload.item.id)
    if (itemExists) {
      updatedCart = state.cart.map(item => {
        if (item.id === action.payload.item.id) {
          if (item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        }else {
          return item
        }
      })
    } else {
      const newItem: CartItem = { ...action.payload.item, quantity: 1 }
      updatedCart = [...state.cart, newItem]
    }
    return {
      ...state,
      cart: updatedCart
    }
  }

  if (action.type === 'remove-from-cart') {
    const updatedCart = state.cart.filter(item => item.id !== action.payload.id)
    return {
      ...state,
      cart: updatedCart
    }
  }

  if (action.type === 'decrease-quantity') {
    const updatedCart = state.cart.map( item => {
      if( item.id === action.payload.id && item.quantity > MIN_ITEMS){
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    return {
      ...state,
      cart: updatedCart
    }
  }

  if (action.type === 'increase-quantity') {
    const updatedCart = state.cart.map( item => {
      if( item.id === action.payload.id && item.quantity < MAX_ITEMS ){
        return {
          ...item,
          quantity: item.quantity + 1 
        }
      }
      return item
    })
    return {
      ...state,
      cart: updatedCart
    }
  }

  if (action.type === 'clear-cart') {
    return {
      ...state,
      cart: []
    }
  }

}