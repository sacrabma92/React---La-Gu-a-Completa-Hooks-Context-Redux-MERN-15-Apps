import { db } from "../data/db";
import { CartItem, Guitar } from "../types";


export type CartActions =
{ type: 'add-to-cart', payload: {item: Guitar}} | 
{ type: 'remove-from-cart', payload: {id: Guitar['id']}} | 
{ type: 'decrease-quatity', payload: {id: Guitar['id']}} | 
{ type: 'increase-quatity', payload: {id: Guitar['id']}} | 
{ type: 'clear-cart'} 

export type CartState = {
  data: Guitar[]
  cartL: CartItem[]
}

export const initialState: CartState = {
  data: db,
  cart: []
}

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
  if(action.type === 'add-to-cart') {
    return{
      ...state
    }
  }

  if(action.type === 'remove-from-cart'){
    return{
      ...state
    }
  }

  if(action.type === 'decrease-quatity'){
    return{
      ...state
    }
  }

  if(action.type === 'increase-quatity'){
    return{
      ...state
    }
  }

  if(action.type === 'clear-cart'){
    return{
      ...state
    }
  }
  
}