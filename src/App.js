import './App.css';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import LoginComponent from './containers/Auth/Login/Login';
import RegisterComponent from './containers/Auth/Register/Register';
import MenuComponent from './components/Menu/MenuComponent'
import { ImageList } from './containers/Images/ImageList/ImageList';

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuComponent />
        <Container>
          <Route path="/login" exact>
            <LoginComponent />
          </Route>
          <Route path="/register" exact>
            <RegisterComponent />
          </Route>
          <Route path="/" exact>
            <ImageList />
          </Route>
          <Redirect to="/" />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
