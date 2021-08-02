import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { destroyCookie, parseCookies, setCookie } from 'nookies'

type AuthProviderProps = {
  children: ReactNode;
}

type AuthContextProps = {
  isAuthenticated: boolean;
  logout: () => void;
  getToken: () => string | null;
  auth: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider ({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const data = parseCookies(null, 'MyFinances@token');
    const token = data['MyFinances@token'];

    if(token){
      return true
    } else {
      return false
    }
  })

  function getToken(){
    const { token } = parseCookies(null, 'MyFinances@token');
    return token
  }

  function logout(){
    destroyCookie(null, 'MyFinances@token')
    setIsAuthenticated(false)
  }

  async function auth(email: string, password: string) {
    try {
      const { data } = await api.post('/api/auth', { email, password });
      if(!data.token) return;
      setCookie(null, 'MyFinances@token', data.token);

      setIsAuthenticated(true)
    } catch (error) {
      setIsAuthenticated(false)
      console.log(error)
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      const { data } = await api.post('/user/create', { name, email, password });
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={
      {
        isAuthenticated,
        logout,
        getToken,
        auth,
        register
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}
