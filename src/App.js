import './App.css';
import { Container } from 'semantic-ui-react';

import { AuthComponent } from './containers/AuthComponent';
import MenuComponent from './components/Menu/MenuComponent'

function App() {
  return (
    <>
      <MenuComponent />
      <Container>
        <AuthComponent />
      </Container>
    </>
  );
}

export default App;
