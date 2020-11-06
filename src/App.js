import './App.css';
import { Container } from 'semantic-ui-react';

import { LoginComponent } from './containers/Auth/Login/Login';
import MenuComponent from './components/Menu/MenuComponent'

function App() {
  return (
    <>
      <MenuComponent />
      <Container>
        <LoginComponent />
      </Container>
    </>
  );
}

export default App;
