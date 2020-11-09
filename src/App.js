import './App.css';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';

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
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/register" exact component={RegisterComponent} />
          <Route path="/" exact component={ImageList} />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
