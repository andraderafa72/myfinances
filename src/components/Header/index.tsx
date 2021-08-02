/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal?: () => void;
  isLoginPage?: boolean;
}

export function Header({ onOpenNewTransactionModal, isLoginPage }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="myfinances" />

        {!isLoginPage && (
          <button
            type="button"
            onClick={onOpenNewTransactionModal}
          >
            Nova transação
          </button>
        )}
      </Content>
    </Container>
  )
}
