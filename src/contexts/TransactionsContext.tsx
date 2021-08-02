import { parseCookies } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type Transaction = {
  _id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, '_id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextProps = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
  deleteTransaction: (transactionId: string) => Promise<void>
  updateTransaction: (transactionId: string, transaction: TransactionInput) => Promise<void>

}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const data = parseCookies(null, 'MyFinances@token');
    const token = data['MyFinances@token'];

    api.get('/transactions', {
      headers: {
        'authorization' : `Bearer ${token}`
      }
    }).then(response => setTransactions(response.data.transactions))

  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      // createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  async function deleteTransaction(transactionId: string):Promise<void>{
    await api.delete(`/transactions/delete/${transactionId}`);
    // api.get('/transactions')
    //   .then(response => setTransactions(response.data.transactions)).catch(e => console.log(e));
    const newArray = transactions.filter(el => el._id !== transactionId)
    setTransactions(newArray);
  }

  async function updateTransaction(transactionId: string, transaction: TransactionInput){
    await api.patch(`/transactions/update/${transactionId}`, transaction);
  }


  return (
    <TransactionsContext.Provider value={
      {
        transactions,
        createTransaction,
        deleteTransaction,
        updateTransaction
      }
    }>
      {children}
    </TransactionsContext.Provider>
  )
}
