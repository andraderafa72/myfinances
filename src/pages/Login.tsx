import { Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { Container } from "../styles/login";

export function Login() {
  const { isAuthenticated } = useAuth()

  return (
    <>
    { isAuthenticated ? <Redirect to="/dashboard"/> :
      <>
        <Header isLoginPage={true} />
        <Container>
          <LoginForm />
        </Container>
      </>
    }
    </>
  );
}
