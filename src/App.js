import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import "aos/dist/aos.css";
import Home from './pages/Home'

import MenuPage from './pages/MenuPage'
import Comment from './pages/Comment'
import Compare from './pages/Compare'
import Login from './pages/LoginPage'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Favorite from './pages/Favorite'
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/favorite" component={Favorite}/>
          <Route exact path="/:menuListName" component={MenuPage} /> 
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
