import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from "./styles/global";
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { AuthProvider } from './contexts/AuthContext';

export function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Home} />
        </Switch>
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  );
}
