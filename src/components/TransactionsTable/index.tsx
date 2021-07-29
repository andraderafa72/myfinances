import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import deleteImg from '../../assets/delete.svg';
import editImg from '../../assets/edit.svg';
import { EditTransactionModal } from "../EditTransactionModal";
import { Transaction } from "../../contexts/TransactionsContext";
import { useState } from "react";

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();
  const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false)
  const [transactionToEdit, setTransactionToEdit] = useState<Transaction>({} as Transaction)

  function handleOpenEditTransactionModal() {
    setIsEditTransactionModalOpen(true)
  }

  function handleCloseEditTransactionModal() {
    setIsEditTransactionModalOpen(false)
  }

  return (
    <Container>
      {transactionToEdit._id ? (
        <EditTransactionModal
          isOpen={isEditTransactionModalOpen}
          onRequestClose={handleCloseEditTransactionModal}
          transaction={transactionToEdit}
        />
      ) : (<></>)}

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' && '- '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <img src={editImg} alt="Editar transação" onClick={() => {
                  setTransactionToEdit(transaction);
                  handleOpenEditTransactionModal()
                }
                } />
                <img src={deleteImg} alt="Apagar transação" onClick={() => deleteTransaction(transaction._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
