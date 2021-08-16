/* eslint-disable jsx-a11y/anchor-is-valid */

import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import { Home } from "../../pages/Home";
import { Form } from "./styles";

export function LoginForm() {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [formType, setFormType] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { auth, register } = useAuth()

  function handleChangeForm() {
    if (formType === 'login') {
      setFormType('register')
      return
    }

    setFormType('login')
  }

  async function handleSubmit(formType: string, event: FormEvent) {
    event.preventDefault();
    setIsLoading(true)

    if (formType === 'login') {
      await auth(email, password);
      // const token = localStorage.getItem('MyFinances@token');
    } else {
      await register(name, email, password)
      setIsLoading(false)
      setFormType('login')
    }

    history.push('/dashboard')
  }

  return (
    <Form onSubmit={e => handleSubmit(formType, e)}>
      <h2>Seja bem-vindo!</h2>
      {isLoading ? (
        <div className="loading">
          <div className="loading-line"></div>
        </div>
      ) : (
        <>
          <span>{formType === 'login' ? 'Conecte-se para continuar.' : 'Registre-se para continuar.'}</span>
          {
            formType === 'register' && (
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            )
          }
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">
          {formType === 'login' ? ' Entrar' : 'Cadastrar'}
          </button>

          <p>
            {formType === 'login' ? 'Não possui conta? ' : 'Já possui conta? '}
            <a href="" onClick={(e) => { e.preventDefault(); handleChangeForm() }}>
              {formType === 'login' ? ' Crie uma aqui.' : 'Clique aqui para entrar.'}
            </a>
          </p>
        </>
      )
      }
    </Form >
  );
}
