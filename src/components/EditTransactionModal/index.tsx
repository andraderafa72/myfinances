import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';
import { Transaction } from '../../contexts/TransactionsContext';

type NewTransactionModalProps = {
  isOpen: boolean;
  transaction: Transaction;
  onRequestClose: () => void;
}

export function EditTransactionModal({ isOpen, onRequestClose, transaction }: NewTransactionModalProps) {
  const { updateTransaction } = useTransactions();

  const [type, setType] = useState('type');
  const [title, setTitle] = useState(transaction.title)
  const [amount, setAmount] = useState(transaction.amount)
  const [category, setCategory] = useState(transaction.category)

  console.log(transaction)
  async function handleUpdateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await updateTransaction(transaction._id, {
      title,
      amount,
      category,
      type
    });

    onRequestClose()
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="" />
      </button>
      <Container onSubmit={handleUpdateNewTransaction}>

        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          min={0}
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'

          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">Atualizar</button>
      </Container>
    </Modal>
  );
}
