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
  isLoading: boolean;
  createTransaction: (transaction: TransactionInput) => Promise<void>
  deleteTransaction: (transactionId: string) => Promise<void>
  updateTransaction: (transactionId: string, transaction: TransactionInput) => Promise<void>

}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true)
    const data = parseCookies(null, 'MyFinances@token');
    const token = data['MyFinances@token'];

    const response = await api.post('/transactions', {
      ...transactionInput,
    }, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    });
    const { transaction } = response.data;

    console.log(transaction);

    setTransactions([
      ...transactions,
      transaction
    ])
    setIsLoading(false)
  }

  async function deleteTransaction(transactionId: string):Promise<void>{
    setIsLoading(true)

    const data = parseCookies(null, 'MyFinances@token');
    const token = data['MyFinances@token'];

    await api.delete(`/transactions/delete/${transactionId}`, { headers: {
      'authorization': `Bearer ${token}`,
    }});
    const newArray = transactions.filter(el => el._id !== transactionId)
    setTransactions(newArray);
    setIsLoading(false)
  }

  async function updateTransaction(transactionId: string, transaction: TransactionInput){
    setIsLoading(true)

    const data = parseCookies(null, 'MyFinances@token');
    const token = data['MyFinances@token'];

    await api.patch(`/transactions/update/${transactionId}`, transaction, { headers: {
      'authorization': `Bearer ${token}`
    }});

    api.get('/transactions', {
      headers: {
        'authorization' : `Bearer ${token}`
      }
    }).then(response => setTransactions(response.data.transactions))

    setIsLoading(false)
  }


  return (
    <TransactionsContext.Provider value={
      {
        transactions,
        isLoading,
        createTransaction,
        deleteTransaction,
        updateTransaction
      }
    }>
      {children}
    </TransactionsContext.Provider>
  )
}
