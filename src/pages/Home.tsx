import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "../components/NewTransactionModal";
import { TransactionsProvider } from "../contexts/TransactionsContext";
import { useAuth } from "../hooks/useAuth";
import { Redirect } from "react-router-dom";
import { SettingsMenu } from "../components/SettingsMenu";

Modal.setAppElement('#root');

export function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      {!isAuthenticated && (<Redirect to='/' />)}
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </TransactionsProvider>
      <SettingsMenu />
    </>
  );
}
