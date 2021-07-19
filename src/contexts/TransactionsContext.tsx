import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextProps = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>

}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }


  return (
    <TransactionsContext.Provider value={
      {
        transactions,
        createTransaction
      }
    }>
      {children}
    </TransactionsContext.Provider>
  )
}
