import { v4 as uuidv4 } from 'uuid'

import { DrafExpense, Expense } from "../types"

export type BudgetActions =
  { type: 'add-budget', payload: { budget: number } } |
  { type: 'show-modal' } |
  { type: 'close-modal' } |
  { type: 'add-expense', payload: { expense: DrafExpense } } |
  { type: 'remove-expense', payload: { id: Expense['id'] } }  |
  { type: 'get-expense-by-id', payload: { id: Expense['id'] } } |
  { type: 'update-expense', payload: { expense: Expense } }


export type BudgetSate = {
  budget: number
  modal: boolean
  expenses: Expense[]
  editingId: Expense['id']
}

const initialBudget = () : number => {
  const localStorageBudget = localStorage.getItem('budget')
  return localStorageBudget ? +localStorageBudget : 0
}

const localStorageExpense = () : Expense[] => {
  const localStorageExpense = localStorage.getItem('expenses')
  return localStorageExpense ? JSON.parse(localStorageExpense) : []
}

export const initialState: BudgetSate = {
  budget: initialBudget(),
  modal: false,
  expenses: localStorageExpense(),
  editingId: ''
}

const createExpense = ( draftExpense: DrafExpense) : Expense => {
  return {
    ...draftExpense,
    id: uuidv4()
  }
}

export const budgetReducer = (
  state: BudgetSate = initialState,
  action: BudgetActions
) => {

  if (action.type === 'add-budget') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }

  if (action.type === 'show-modal') {
    return {
      ...state,
      modal: true
    }
  }

  if (action.type === 'close-modal') {
    return {
      ...state,
      modal: false,
      editingId: ''
    }
  }

  if (action.type === 'add-expense') {

    const expense = createExpense(action.payload.expense)

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false
    }
  }

  if(action.type === 'remove-expense'){
    return{
      ...state,
      expense: state.expenses.filter( expense => expense.id !== action.payload.id)
    }
  }

  if(action.type === 'get-expense-by-id'){
    return {
      ...state,
      editingId: action.payload.id,
      modal: true
    }
  }

  if(action.type === 'update-expense'){
    return {
      ...state,
      expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense :  expense ),
      modal: false,
      editingId: ''
    }
  }

  return state
}