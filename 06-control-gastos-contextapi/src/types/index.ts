type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Expense = {
  id: string
  expensename: string
  amount: number
  category: string
  date: Value
}

export type DrafExpense = Omit<Expense, 'id'>

export type Category = {
  id: string;
  name: string;
  icon: string;
}