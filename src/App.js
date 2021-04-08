import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'

import MenuPage from './pages/MenuPage'
import Comment from './pages/Comment'
import Compare from './pages/Compare'
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/:menuListName" component={MenuPage} />
          {/* <Route exact path="/:pageName" component={Home} /> */}
          
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
