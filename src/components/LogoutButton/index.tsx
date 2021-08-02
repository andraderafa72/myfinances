/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LogoutLink } from "./styles";

export function LogoutButton(){
  const { logout } = useAuth();
  const history = useHistory()

  function handleLogout(e: any){
    e.preventDefault();
    logout();
    history.replace('/')
  }

  return (
    <LogoutLink href="" onClick={e => handleLogout(e)}>Sair</LogoutLink>
  )
}
